-- Create sub-modules table for module 6 (Avkastning og risiko)
CREATE TABLE IF NOT EXISTS public.sub_modules (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  module_id UUID NOT NULL,
  title TEXT NOT NULL,
  content JSONB,
  order_index INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  FOREIGN KEY (module_id) REFERENCES public.modules(id) ON DELETE CASCADE
);

-- Enable Row Level Security
ALTER TABLE public.sub_modules ENABLE ROW LEVEL SECURITY;

-- Create policies for sub_modules
CREATE POLICY "Everyone can view sub_modules" 
ON public.sub_modules 
FOR SELECT 
USING (true);

CREATE POLICY "Instructors can manage sub_modules" 
ON public.sub_modules 
FOR ALL 
USING (EXISTS (
  SELECT 1
  FROM profiles
  WHERE profiles.user_id = auth.uid() 
  AND profiles.role = ANY (ARRAY['instructor'::text, 'admin'::text])
));

-- Insert sub-modules for module 6
INSERT INTO public.sub_modules (module_id, title, order_index, content) 
SELECT 
  id as module_id,
  unnest(ARRAY[
    '6.1 Introduksjon til risiko og avkastning',
    '6.2 Hvordan måle avkastning',
    '6.3 Hvordan måle risiko', 
    '6.4 Risiko og avkastning for porteføljer',
    '6.5 Effisient front og minimum varians',
    '6.6 Kapitalverdimodellen',
    '6.7 Oppgaver'
  ]) as title,
  unnest(ARRAY[1, 2, 3, 4, 5, 6, 7]) as order_index,
  unnest(ARRAY[
    '{"sections": [{"title": "Introduksjon til risiko og avkastning", "type": "content", "content": "Dette er en introduksjon til grunnleggende konsepter innen risiko og avkastning i finansiell teori."}]}',
    '{"sections": [{"title": "Hvordan måle avkastning", "type": "content", "content": "Lær ulike metoder for å beregne og måle avkastning på investeringer."}]}',
    '{"sections": [{"title": "Hvordan måle risiko", "type": "content", "content": "Forstå ulike mål for risiko og hvordan de anvendes i praksis."}]}',
    '{"sections": [{"title": "Risiko og avkastning for porteføljer", "type": "content", "content": "Lær om sammenhenger mellom risiko og avkastning på porteføljenivå."}]}',
    '{"sections": [{"title": "Effisient front og minimum varians", "type": "content", "content": "Forstå moderne porteføljeteori og optimal porteføljesammensetning."}]}',
    '{"sections": [{"title": "Kapitalverdimodellen", "type": "content", "content": "Lær om CAPM og dens anvendelse i praksis."}]}',
    '{"sections": [{"title": "Oppgaver", "type": "content", "content": "Praktiske oppgaver for å teste forståelsen av risiko og avkastning."}]}'
  ])::jsonb as content
FROM modules 
WHERE order_index = 6;

-- Add trigger for automatic timestamp updates
CREATE TRIGGER update_sub_modules_updated_at
BEFORE UPDATE ON public.sub_modules
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();