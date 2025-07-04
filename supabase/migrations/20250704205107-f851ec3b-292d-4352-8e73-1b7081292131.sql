-- Create storage bucket for course images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'course-images', 
  'course-images', 
  true, 
  52428800, -- 50MB limit
  ARRAY['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml']
);

-- Create storage policies for course images
CREATE POLICY "Anyone can view course images"
ON storage.objects FOR SELECT
USING (bucket_id = 'course-images');

CREATE POLICY "Instructors can upload course images"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'course-images' AND
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE user_id = auth.uid() 
    AND role IN ('instructor', 'admin')
  )
);

CREATE POLICY "Instructors can update course images"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'course-images' AND
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE user_id = auth.uid() 
    AND role IN ('instructor', 'admin')
  )
);

CREATE POLICY "Instructors can delete course images"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'course-images' AND
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE user_id = auth.uid() 
    AND role IN ('instructor', 'admin')
  )
);