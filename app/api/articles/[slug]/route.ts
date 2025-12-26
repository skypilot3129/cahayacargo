import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'

// GET single article by slug
export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params
        const supabase = createAdminClient()

        const { data: article, error } = await supabase
            .from('articles')
            .select('*')
            .eq('slug', slug)
            .single()

        if (error || !article) {
            return NextResponse.json(
                { error: 'Article not found' },
                { status: 404 }
            )
        }

        // Transform to application format
        const formattedArticle = {
            slug: article.slug,
            title: article.title,
            excerpt: article.excerpt,
            content: article.content,
            category: article.category,
            tags: article.tags,
            featuredImage: article.featured_image,
            readingTime: article.reading_time,
            author: {
                name: article.author_name,
                role: article.author_role,
                avatar: article.author_avatar,
            },
            publishedAt: article.published_at,
            updatedAt: article.updated_at,
            seo: {
                metaTitle: article.meta_title || article.title,
                metaDescription: article.meta_description || article.excerpt,
                keywords: article.keywords || [],
            },
        }

        return NextResponse.json({ article: formattedArticle })
    } catch (error) {
        console.error('Error fetching article:', error)
        return NextResponse.json(
            { error: 'Failed to fetch article' },
            { status: 500 }
        )
    }
}

// PUT update article
export async function PUT(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params
        const body = await request.json()
        const supabase = createAdminClient()

        // Check if article exists
        const { data: existing } = await supabase
            .from('articles')
            .select('id')
            .eq('slug', slug)
            .single()

        if (!existing) {
            return NextResponse.json(
                { error: 'Article not found' },
                { status: 404 }
            )
        }

        // Transform to database format
        const updates = {
            title: body.title,
            excerpt: body.excerpt,
            content: body.content,
            category: body.category,
            tags: body.tags,
            featured_image: body.featuredImage,
            reading_time: body.readingTime,
            author_name: body.author.name,
            author_role: body.author.role,
            author_avatar: body.author.avatar,
            meta_title: body.seo.metaTitle,
            meta_description: body.seo.metaDescription,
            keywords: body.seo.keywords,
            updated_at: new Date().toISOString(),
        }

        const { data, error } = await supabase
            .from('articles')
            .update(updates)
            .eq('slug', slug)
            .select()
            .single()

        if (error) {
            console.error('Error updating article:', error)
            return NextResponse.json(
                { error: 'Failed to update article' },
                { status: 500 }
            )
        }

        return NextResponse.json({ success: true, article: data })
    } catch (error) {
        console.error('Error in PUT /api/articles/[slug]:', error)
        return NextResponse.json(
            { error: 'Failed to update article' },
            { status: 500 }
        )
    }
}

// DELETE article
export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params
        const supabase = createAdminClient()

        const { error } = await supabase
            .from('articles')
            .delete()
            .eq('slug', slug)

        if (error) {
            console.error('Error deleting article:', error)
            return NextResponse.json(
                { error: 'Failed to delete article' },
                { status: 500 }
            )
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Error in DELETE /api/articles/[slug]:', error)
        return NextResponse.json(
            { error: 'Failed to delete article' },
            { status: 500 }
        )
    }
}
