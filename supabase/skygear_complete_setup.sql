-- =============================================================================
-- SkyGear Drones — Complete Supabase setup
-- Run this entire script in: Supabase Dashboard → SQL Editor → New query
-- Project: https://ozzngoaftdkazkzcbkps.supabase.co
-- =============================================================================

-- -----------------------------------------------------------------------------
-- 1. Extensions (usually enabled by default on Supabase)
-- -----------------------------------------------------------------------------
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- -----------------------------------------------------------------------------
-- 2. Enum
-- -----------------------------------------------------------------------------
DO $$ BEGIN
  CREATE TYPE public.app_role AS ENUM ('admin', 'customer');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

-- -----------------------------------------------------------------------------
-- 3. Profiles
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users view own profile" ON public.profiles;
CREATE POLICY "Users view own profile"
  ON public.profiles FOR SELECT TO authenticated
  USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users update own profile" ON public.profiles;
CREATE POLICY "Users update own profile"
  ON public.profiles FOR UPDATE TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "Users insert own profile" ON public.profiles;
CREATE POLICY "Users insert own profile"
  ON public.profiles FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = id);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;

-- -----------------------------------------------------------------------------
-- 4. User roles
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  );
$$;

DROP POLICY IF EXISTS "Users view own roles" ON public.user_roles;
CREATE POLICY "Users view own roles"
  ON public.user_roles FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Admins manage roles" ON public.user_roles;
CREATE POLICY "Admins manage roles"
  ON public.user_roles FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;

-- Required: RLS policies call has_role() as the current user
GRANT EXECUTE ON FUNCTION public.has_role(UUID, public.app_role) TO authenticated, anon;

-- Allow first user to self-promote when no admin exists yet
DROP POLICY IF EXISTS "Bootstrap first admin" ON public.user_roles;
CREATE POLICY "Bootstrap first admin"
  ON public.user_roles FOR INSERT TO authenticated
  WITH CHECK (
    role = 'admin'
    AND user_id = auth.uid()
    AND NOT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin')
  );

-- Let anyone check whether an admin account exists (for /admin bootstrap UI)
CREATE OR REPLACE FUNCTION public.any_admin_exists()
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin');
$$;

GRANT EXECUTE ON FUNCTION public.any_admin_exists() TO authenticated, anon;

-- -----------------------------------------------------------------------------
-- 5. Auto-create profile + customer role on signup
-- -----------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'display_name', split_part(NEW.email, '@', 1))
  );
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'customer');
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;

-- -----------------------------------------------------------------------------
-- 6. Categories
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  image_url TEXT,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone view categories" ON public.categories;
CREATE POLICY "Anyone view categories"
  ON public.categories FOR SELECT TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "Admins manage categories" ON public.categories;
CREATE POLICY "Admins manage categories"
  ON public.categories FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

GRANT SELECT ON public.categories TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.categories TO authenticated;
GRANT ALL ON public.categories TO service_role;

-- -----------------------------------------------------------------------------
-- 7. Products
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  short_description TEXT,
  price NUMERIC(10,2) NOT NULL,
  compare_at_price NUMERIC(10,2),
  stock INT NOT NULL DEFAULT 0,
  images TEXT[] NOT NULL DEFAULT '{}',
  category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
  is_published BOOLEAN NOT NULL DEFAULT true,
  is_featured BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone view published products" ON public.products;
CREATE POLICY "Anyone view published products"
  ON public.products FOR SELECT TO anon, authenticated
  USING (is_published OR public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins manage products" ON public.products;
CREATE POLICY "Admins manage products"
  ON public.products FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

GRANT SELECT ON public.products TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.products TO authenticated;
GRANT ALL ON public.products TO service_role;

CREATE INDEX IF NOT EXISTS idx_products_category ON public.products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_featured ON public.products(is_featured) WHERE is_featured;

-- -----------------------------------------------------------------------------
-- 8. Cart items
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.cart_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  quantity INT NOT NULL DEFAULT 1 CHECK (quantity > 0),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, product_id)
);

ALTER TABLE public.cart_items ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users manage own cart" ON public.cart_items;
CREATE POLICY "Users manage own cart"
  ON public.cart_items FOR ALL TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.cart_items TO authenticated;
GRANT ALL ON public.cart_items TO service_role;

-- -----------------------------------------------------------------------------
-- 9. Seed categories
-- -----------------------------------------------------------------------------
INSERT INTO public.categories (name, slug, image_url, sort_order) VALUES
  ('Drones', 'drones', 'https://images.unsplash.com/photo-1508614589041-895b88991e8e?auto=format&fit=crop&w=800&q=80', 1),
  ('Batteries', 'batteries', 'https://images.unsplash.com/photo-1609091839311-dea83be1f51a?auto=format&fit=crop&w=800&q=80', 2),
  ('Gimbals & Cameras', 'gimbals', 'https://images.unsplash.com/photo-1516035069371-29a1b244ccaf?auto=format&fit=crop&w=800&q=80', 3),
  ('Accessories', 'accessories', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80', 4)
ON CONFLICT (slug) DO NOTHING;

-- -----------------------------------------------------------------------------
-- 10. Seed products
-- -----------------------------------------------------------------------------
WITH c AS (SELECT id, slug FROM public.categories)
INSERT INTO public.products (
  name, slug, short_description, description,
  price, compare_at_price, stock, images,
  category_id, is_published, is_featured
) VALUES
  (
    'SkyGear Pro X1', 'skygear-pro-x1',
    '4K HDR camera drone with 46-min flight time',
    'The Pro X1 is our flagship aerial platform. A 1-inch CMOS sensor captures 5.4K/60 video, obstacle sensing in all directions keeps you safe, and OcuSync 4 delivers a 15 km transmission range.',
    1299.00, 1499.00, 12,
    ARRAY['https://images.unsplash.com/photo-1508614589041-895b88991e8e?auto=format&fit=crop&w=900&q=80'],
    (SELECT id FROM c WHERE slug = 'drones'), true, true
  ),
  (
    'SkyGear Mini Fold', 'skygear-mini-fold',
    'Sub-250g foldable travel drone, 4K/30',
    'Weighing less than 249 g, the Mini Fold slips into a jacket pocket yet shoots stabilized 4K/30 footage with a 3-axis gimbal. Perfect for travel creators.',
    549.00, NULL, 30,
    ARRAY['https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&w=900&q=80'],
    (SELECT id FROM c WHERE slug = 'drones'), true, true
  ),
  (
    'SkyGear FPV Racer', 'skygear-fpv-racer',
    'Carbon-frame FPV drone, 140 km/h top speed',
    'Purpose-built for freestyle and racing pilots. Carbon fiber frame, brushless 2306 motors, and analog/digital HD video options for a low-latency FPV experience.',
    799.00, 899.00, 8,
    ARRAY['https://images.unsplash.com/photo-1524143983365-2aa047986b7b?auto=format&fit=crop&w=900&q=80'],
    (SELECT id FROM c WHERE slug = 'drones'), true, true
  ),
  (
    'SkyGear Cinema 8K', 'skygear-cinema-8k',
    'Full-frame cinema drone with ProRes RAW',
    'Built for professional cinematographers: dual-battery redundancy, full-frame 8K sensor, ProRes RAW, and a 55-minute flight time.',
    4499.00, NULL, 4,
    ARRAY['https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=900&q=80'],
    (SELECT id FROM c WHERE slug = 'drones'), true, true
  ),
  (
    'Intelligent Flight Battery', 'intelligent-flight-battery',
    'Swap batteries in under 30 seconds',
    '5000 mAh LiPo pack tuned for the Pro X1. Delivers up to 46 minutes of flight and includes onboard cell balancing and low-temp performance.',
    189.00, NULL, 40,
    ARRAY['https://images.unsplash.com/photo-1609091839311-dea83be1f51a?auto=format&fit=crop&w=900&q=80'],
    (SELECT id FROM c WHERE slug = 'batteries'), true, false
  ),
  (
    'Low-Noise Propellers (4-pack)', 'low-noise-propellers',
    'Quieter flight, longer endurance',
    'CNC-balanced propellers reduce sound signature by up to 4 dB while extending flight time by up to 5%.',
    24.00, NULL, 120,
    ARRAY['https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80'],
    (SELECT id FROM c WHERE slug = 'accessories'), true, false
  ),
  (
    '3-Axis Handheld Gimbal', 'handheld-gimbal',
    'Rock-steady footage from any camera',
    'Repurpose your drone camera or mirrorless body with our brushless 3-axis stabilizer. 12-hour battery, ARRI-style side handle.',
    349.00, 399.00, 15,
    ARRAY['https://images.unsplash.com/photo-1516035069371-29a1b244ccaf?auto=format&fit=crop&w=900&q=80'],
    (SELECT id FROM c WHERE slug = 'gimbals'), true, true
  ),
  (
    'Smart Controller with 7" Display', 'smart-controller',
    '1000-nit sunlight-readable screen',
    'No more phone mounting. Built-in 1000-nit display, HDMI out, and a customizable HD downlink up to 15 km.',
    729.00, NULL, 10,
    ARRAY['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80'],
    (SELECT id FROM c WHERE slug = 'accessories'), true, false
  ),
  (
    'Hardshell Travel Case', 'hardshell-case',
    'IP67 waterproof, TSA carry-on friendly',
    'Custom-cut foam holds one drone, six batteries, controller, and cables. Airline carry-on compliant.',
    129.00, NULL, 25,
    ARRAY['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80'],
    (SELECT id FROM c WHERE slug = 'accessories'), true, false
  ),
  (
    'ND Filter Set (6-pack)', 'nd-filter-set',
    'ND4/8/16/32/64/PL for perfect exposure',
    'Multi-coated Schott glass filters that thread onto your drone gimbal camera. Includes travel case.',
    89.00, 109.00, 60,
    ARRAY['https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80'],
    (SELECT id FROM c WHERE slug = 'accessories'), true, false
  )
ON CONFLICT (slug) DO NOTHING;

-- -----------------------------------------------------------------------------
-- Done. After running:
--   1. Sign up at /auth on your site
--   2. Visit /admin — first user can claim admin if none exists
-- -----------------------------------------------------------------------------
