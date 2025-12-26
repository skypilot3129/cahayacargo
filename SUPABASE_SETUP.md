# Quick Setup Instructions

## Step 1: Create .env.local file manually

Create a file named `.env.local` in the project root with this content:

```
NEXT_PUBLIC_SUPABASE_URL=https://kuuhaxaopjgawnsoomrq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1dWhheGFvcGpnYXduc29vbXJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY3MjY0NjgsImV4cCI6MjA4MjMwMjQ2OH0.V6FjaSed8QVFtpRt_CblNoLWwfieSuj_YDUJgoIsv6Q
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1dWhheGFvcGpnYXduc29vbXJxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjcyNjQ2OCwiZXhwIjoyMDgyMzAyNDY4fQ.44azzHFysa0KQTMs1zQcXcjxdY-JlWHRSLXrSWwkagY
ADMIN_PASSWORD=cahayacargo2024
```

## Step 2: Run Database Migration

1. Go to Supabase Dashboard: https://supabase.com/dashboard/project/kuuhaxaopjgawnsoomrq
2. Click "SQL Editor" in sidebar
3. Click "New Query"
4. Copy paste the SQL from `supabase/migrations/001_create_articles_table.sql`
5. Click "Run" or press Ctrl+Enter

## Step 3: Migrate Existing Articles

After API routes are updated, run:
```bash
npx tsx scripts/migrate-articles.ts
```

This will transfer all existing articles from TypeScript to database.
