-- Update product and category images to local paths (optional — app resolves by slug automatically)
UPDATE public.categories SET image_url = CASE slug
  WHEN 'drones' THEN '/images/categories/drones.jpg'
  WHEN 'batteries' THEN '/images/categories/batteries.jpg'
  WHEN 'gimbals' THEN '/images/categories/gimbals.jpg'
  WHEN 'accessories' THEN '/images/categories/accessories.jpg'
  ELSE image_url
END;

UPDATE public.products SET images = CASE slug
  WHEN 'skygear-pro-x1' THEN ARRAY['/images/products/skygear-pro-x1.jpg']
  WHEN 'skygear-mini-fold' THEN ARRAY['/images/products/skygear-mini-fold.jpg']
  WHEN 'skygear-fpv-racer' THEN ARRAY['/images/products/skygear-fpv-racer.jpg']
  WHEN 'skygear-cinema-8k' THEN ARRAY['/images/products/skygear-cinema-8k.jpg']
  WHEN 'intelligent-flight-battery' THEN ARRAY['/images/products/intelligent-flight-battery.jpg']
  WHEN 'low-noise-propellers' THEN ARRAY['/images/products/low-noise-propellers.jpg']
  WHEN 'handheld-gimbal' THEN ARRAY['/images/products/handheld-gimbal.jpg']
  WHEN 'smart-controller' THEN ARRAY['/images/products/smart-controller.jpg']
  WHEN 'hardshell-case' THEN ARRAY['/images/products/hardshell-case.jpg']
  WHEN 'nd-filter-set' THEN ARRAY['/images/products/nd-filter-set.jpg']
  ELSE images
END;
