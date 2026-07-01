-- Set up storage bucket for product and category images
insert into storage.buckets (id, name, public)
values ('product-images', 'product-images', true)
on conflict (id) do nothing;

-- Public can view images
create policy "Anyone view images"
on storage.objects for select
to public
using (bucket_id = 'product-images');

-- Admins can upload images
create policy "Admins insert images"
on storage.objects for insert
to authenticated
with check (
  bucket_id = 'product-images' and
  public.has_role(auth.uid(), 'admin')
);

-- Admins can update images
create policy "Admins update images"
on storage.objects for update
to authenticated
using (
  bucket_id = 'product-images' and
  public.has_role(auth.uid(), 'admin')
)
with check (
  bucket_id = 'product-images' and
  public.has_role(auth.uid(), 'admin')
);

-- Admins can delete images
create policy "Admins delete images"
on storage.objects for delete
to authenticated
using (
  bucket_id = 'product-images' and
  public.has_role(auth.uid(), 'admin')
);
