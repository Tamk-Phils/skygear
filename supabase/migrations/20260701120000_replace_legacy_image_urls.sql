-- Replace legacy CDN image paths with stable Unsplash URLs
UPDATE public.categories SET image_url = CASE slug
  WHEN 'drones' THEN 'https://images.unsplash.com/photo-1508614589041-895b88991e8e?auto=format&fit=crop&w=800&q=80'
  WHEN 'batteries' THEN 'https://images.unsplash.com/photo-1609091839311-dea83be1f51a?auto=format&fit=crop&w=800&q=80'
  WHEN 'gimbals' THEN 'https://images.unsplash.com/photo-1516035069371-29a1b244ccaf?auto=format&fit=crop&w=800&q=80'
  WHEN 'accessories' THEN 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
  ELSE image_url
END
WHERE image_url LIKE '/__l5e/%';

UPDATE public.products SET images = CASE slug
  WHEN 'skygear-pro-x1' THEN ARRAY['https://images.unsplash.com/photo-1508614589041-895b88991e8e?auto=format&fit=crop&w=900&q=80']
  WHEN 'skygear-mini-fold' THEN ARRAY['https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&w=900&q=80']
  WHEN 'skygear-fpv-racer' THEN ARRAY['https://images.unsplash.com/photo-1524143983365-2aa047986b7b?auto=format&fit=crop&w=900&q=80']
  WHEN 'skygear-cinema-8k' THEN ARRAY['https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=900&q=80']
  WHEN 'intelligent-flight-battery' THEN ARRAY['https://images.unsplash.com/photo-1609091839311-dea83be1f51a?auto=format&fit=crop&w=900&q=80']
  WHEN 'low-noise-propellers' THEN ARRAY['https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80']
  WHEN 'handheld-gimbal' THEN ARRAY['https://images.unsplash.com/photo-1516035069371-29a1b244ccaf?auto=format&fit=crop&w=900&q=80']
  WHEN 'smart-controller' THEN ARRAY['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80']
  WHEN 'hardshell-case' THEN ARRAY['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80']
  WHEN 'nd-filter-set' THEN ARRAY['https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80']
  ELSE images
END
WHERE images::text LIKE '%__l5e%';
