-- Create product_reviews table
CREATE TABLE IF NOT EXISTS public.product_reviews (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    product_id UUID REFERENCES public.products(id) ON DELETE CASCADE NOT NULL,
    author_name TEXT NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Enable RLS
ALTER TABLE public.product_reviews ENABLE ROW LEVEL SECURITY;

-- Allow public read access to reviews
CREATE POLICY "Public read access for product reviews" 
ON public.product_reviews 
FOR SELECT 
USING (true);

-- Allow admins to insert reviews
CREATE POLICY "Admins can insert product reviews" 
ON public.product_reviews 
FOR INSERT 
WITH CHECK (public.has_role('admin', auth.uid()));

-- Allow admins to update reviews
CREATE POLICY "Admins can update product reviews" 
ON public.product_reviews 
FOR UPDATE 
USING (public.has_role('admin', auth.uid()));

-- Allow admins to delete reviews
CREATE POLICY "Admins can delete product reviews" 
ON public.product_reviews 
FOR DELETE 
USING (public.has_role('admin', auth.uid()));
