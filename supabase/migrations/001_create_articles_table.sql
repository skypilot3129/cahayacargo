-- Create articles table
CREATE TABLE IF NOT EXISTS articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  tags TEXT[] NOT NULL DEFAULT '{}',
  featured_image TEXT DEFAULT '/images/blog/default.jpg',
  reading_time INTEGER NOT NULL DEFAULT 5,
  
  -- Author info
  author_name TEXT NOT NULL DEFAULT 'Tim Cahaya Cargo',
  author_role TEXT NOT NULL DEFAULT 'Logistics Expert',
  author_avatar TEXT NOT NULL DEFAULT '📦',
  
  -- SEO
  meta_title TEXT,
  meta_description TEXT,
  keywords TEXT[] DEFAULT '{}',
  
  -- Timestamps
  published_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);
CREATE INDEX IF NOT EXISTS idx_articles_category ON articles(category);
CREATE INDEX IF NOT EXISTS idx_articles_published_at ON articles(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_articles_created_at ON articles(created_at DESC);

-- Enable Row Level Security
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any
DROP POLICY IF EXISTS "Articles are viewable by everyone" ON articles;
DROP POLICY IF EXISTS "Anyone can insert articles" ON articles;
DROP POLICY IF EXISTS "Anyone can update articles" ON articles;
DROP POLICY IF EXISTS "Anyone can delete articles" ON articles;

-- Public can read all articles
CREATE POLICY "Articles are viewable by everyone"
  ON articles FOR SELECT
  USING (true);

-- Anyone can insert (we'll handle auth in app layer for now)
CREATE POLICY "Anyone can insert articles"
  ON articles FOR INSERT
  WITH CHECK (true);

-- Anyone can update
CREATE POLICY "Anyone can update articles"
  ON articles FOR UPDATE
  USING (true);

-- Anyone can delete
CREATE POLICY "Anyone can delete articles"
  ON articles FOR DELETE
  USING (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger
DROP TRIGGER IF EXISTS update_articles_updated_at ON articles;
CREATE TRIGGER update_articles_updated_at
    BEFORE UPDATE ON articles
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
