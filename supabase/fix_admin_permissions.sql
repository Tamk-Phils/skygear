-- =============================================================================
-- SkyGear — Fix admin permissions + promote phils7872@gmail.com
-- Run in Supabase Dashboard → SQL Editor
-- =============================================================================

-- 1. Fix has_role permissions (RLS policies need this)
GRANT EXECUTE ON FUNCTION public.has_role(UUID, public.app_role) TO authenticated, anon;

-- 2. Allow first user to claim admin via the /admin page
DROP POLICY IF EXISTS "Bootstrap first admin" ON public.user_roles;
CREATE POLICY "Bootstrap first admin"
  ON public.user_roles FOR INSERT TO authenticated
  WITH CHECK (
    role = 'admin'
    AND user_id = auth.uid()
    AND NOT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin')
  );

-- 3. RPC for checking if any admin exists (used by /admin page)
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

-- 4. Promote phils7872@gmail.com to admin
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::public.app_role
FROM auth.users
WHERE email = 'phils7872@gmail.com'
ON CONFLICT (user_id, role) DO NOTHING;

-- Verify
SELECT u.email, ur.role
FROM auth.users u
JOIN public.user_roles ur ON ur.user_id = u.id
WHERE u.email = 'phils7872@gmail.com';
