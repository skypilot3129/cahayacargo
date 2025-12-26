// Load .env.local manually
import { readFileSync } from 'fs'
import { join } from 'path'

const envPath = join(process.cwd(), '.env.local')
try {
    const envFile = readFileSync(envPath, 'utf-8')
    envFile.split('\n').forEach(line => {
        const [key, value] = line.split('=')
        if (key && value) {
            process.env[key.trim()] = value.trim()
        }
    })
} catch (e) {
    console.error('⚠️  Warning: .env.local not found, using process.env')
}

import { createAdminClient } from '../lib/supabase/admin'
import { articles } from '../data/articles'

async function migrateArticles() {
    console.log('🚀 Starting article migration to Supabase...')

    const supabase = createAdminClient()

    try {
        // Check if articles table exists by trying to fetch
        const { error: tableError } = await supabase
            .from('articles')
            .select('count')
            .limit(1)

        if (tableError) {
            console.error('❌ Articles table not found. Please run the SQL migration first!')
            console.error('Error:', tableError.message)
            process.exit(1)
        }

        console.log(`📦 Found ${articles.length} articles to migrate`)

        // Transform and insert articles
        for (const article of articles) {
            const dbArticle = {
                slug: article.slug,
                title: article.title,
                excerpt: article.excerpt,
                content: article.content,
                category: article.category,
                tags: article.tags,
                featured_image: article.featuredImage,
                reading_time: article.readingTime,
                author_name: article.author.name,
                author_role: article.author.role,
                author_avatar: article.author.avatar,
                meta_title: article.seo.metaTitle,
                meta_description: article.seo.metaDescription,
                keywords: article.seo.keywords,
                published_at: article.publishedAt,
                updated_at: article.updatedAt || null,
            }

            const { error } = await supabase
                .from('articles')
                .upsert(dbArticle, {
                    onConflict: 'slug',
                    ignoreDuplicates: false
                })

            if (error) {
                console.error(`❌ Error migrating article "${article.title}":`, error.message)
            } else {
                console.log(`✅ Migrated: ${article.title}`)
            }
        }

        // Verify migration
        const { count, error: countError } = await supabase
            .from('articles')
            .select('*', { count: 'exact', head: true })

        if (countError) {
            console.error('❌ Error counting articles:', countError.message)
        } else {
            console.log(`\n🎉 Migration complete! Total articles in database: ${count}`)
        }

    } catch (error) {
        console.error('❌ Migration failed:', error)
        process.exit(1)
    }
}

// Run migration
migrateArticles()
