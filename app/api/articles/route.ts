import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'

// GET all articles
export async function GET(request: Request) {
  try {
    const supabase = createAdminClient()
    const { searchParams } = new URL(request.url)

    const category = searchParams.get('category')
    const search = searchParams.get('search')
    const limit = searchParams.get('limit')

    let query = supabase
      .from('articles')
      .select('*')
      .order('published_at', { ascending: false })

    // Filter by category if provided
    if (category) {
      query = query.eq('category', category)
    }

    // Search if query provided
    if (search) {
      query = query.or(`title.ilike.%${search}%,excerpt.ilike.%${search}%`)
    }

    // Limit results if specified
    if (limit) {
      query = query.limit(parseInt(limit))
    }

    const { data: articles, error } = await query

    if (error) {
      console.error('Error fetching articles:', error)
      return NextResponse.json(
        { error: 'Failed to fetch articles' },
        { status: 500 }
      )
    }

    // Transform database format to application format
    const formattedArticles = articles.map(article => ({
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
    }))

    return NextResponse.json({ articles: formattedArticles })
  } catch (error) {
    console.error('Error in GET /api/articles:', error)
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    )
  }
}

// POST new article
export async function POST(request: Request) {
  try {
    const supabase = createAdminClient()
    const body = await request.json()

    // Validate required fields
    if (!body.title || !body.slug || !body.content) {
      return NextResponse.json(
        { error: 'Missing required fields: title, slug, content' },
        { status: 400 }
      )
    }

    // Check if slug already exists
    const { data: existing } = await supabase
      .from('articles')
      .select('slug')
      .eq('slug', body.slug)
      .single()

    if (existing) {
      return NextResponse.json(
        { error: 'Article with this slug already exists' },
        { status: 409 }
      )
    }

    // Transform to database format
    const article = {
      slug: body.slug,
      title: body.title,
      excerpt: body.excerpt,
      content: body.content,
      category: body.category,
      tags: body.tags,
      featured_image: body.featuredImage || '/images/blog/default.jpg',
      reading_time: body.readingTime,
      author_name: body.author.name,
      author_role: body.author.role,
      author_avatar: body.author.avatar,
      meta_title: body.seo.metaTitle,
      meta_description: body.seo.metaDescription,
      keywords: body.seo.keywords,
      published_at: body.publishedAt || new Date().toISOString(),
    }

    const { data, error } = await supabase
      .from('articles')
      .insert(article)
      .select()
      .single()

    if (error) {
      console.error('Error creating article:', error)
      return NextResponse.json(
        { error: 'Failed to create article' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, article: data },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error in POST /api/articles:', error)
    return NextResponse.json(
      { error: 'Failed to create article' },
      { status: 500 }
    )
  }
}
