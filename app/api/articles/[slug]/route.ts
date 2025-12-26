import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { articles, getArticleBySlug } from '@/data/articles';

// Helper function to generate TypeScript code
function generateArticlesCode(articlesArray: any[]) {
    const articlesCode = articlesArray.map(article => {
        const contentEscaped = article.content.replace(/`/g, '\\`').replace(/\$/g, '\\$');

        return `  {
    slug: '${article.slug}',
    title: '${article.title.replace(/'/g, "\\'")}',
    excerpt: '${article.excerpt.replace(/'/g, "\\'")}',
    content: \`${contentEscaped}\`,
    category: '${article.category}',
    tags: ${JSON.stringify(article.tags)},
    author: {
      name: '${article.author.name}',
      role: '${article.author.role}',
      avatar: '${article.author.avatar}',
    },
    publishedAt: '${article.publishedAt}',
    ${article.updatedAt ? `updatedAt: '${article.updatedAt}',` : ''}
    featuredImage: '${article.featuredImage}',
    readingTime: ${article.readingTime},
    seo: {
      metaTitle: '${article.seo.metaTitle.replace(/'/g, "\\'")}',
      metaDescription: '${article.seo.metaDescription.replace(/'/g, "\\'")}',
      keywords: ${JSON.stringify(article.seo.keywords)},
    },
  }`;
    }).join(',\n');

    return `import { Article } from './types';

export const articles: Article[] = [
${articlesCode}
];

// Helper functions
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}

export function getArticlesByCategory(category: Article['category']): Article[] {
  return articles.filter(article => article.category === category);
}

export function getRelatedArticles(currentSlug: string, limit: number = 3): Article[] {
  const current = getArticleBySlug(currentSlug);
  if (!current) return [];

  return articles
    .filter(article => 
      article.slug !== currentSlug && 
      article.category === current.category
    )
    .slice(0, limit);
}

export function searchArticles(query: string): Article[] {
  const lowerQuery = query.toLowerCase();
  return articles.filter(article =>
    article.title.toLowerCase().includes(lowerQuery) ||
    article.excerpt.toLowerCase().includes(lowerQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}
`;
}

// GET single article
export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;
        const article = getArticleBySlug(slug);

        if (!article) {
            return NextResponse.json(
                { error: 'Article not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ article });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch article' },
            { status: 500 }
        );
    }
}

// PUT update article
export async function PUT(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const updates = await request.json();
        const { slug } = await params;
        const articleIndex = articles.findIndex(a => a.slug === slug);

        if (articleIndex === -1) {
            return NextResponse.json(
                { error: 'Article not found' },
                { status: 404 }
            );
        }

        // Update article with timestamp
        const updatedArticles = [...articles];
        updatedArticles[articleIndex] = {
            ...updatedArticles[articleIndex],
            ...updates,
            updatedAt: new Date().toISOString().split('T')[0],
        };

        // Write to file
        const filePath = join(process.cwd(), 'data', 'articles', 'index.ts');
        const fileContent = generateArticlesCode(updatedArticles);
        await writeFile(filePath, fileContent, 'utf-8');

        return NextResponse.json({
            success: true,
            article: updatedArticles[articleIndex]
        });

    } catch (error) {
        console.error('Error updating article:', error);
        return NextResponse.json(
            { error: 'Failed to update article' },
            { status: 500 }
        );
    }
}

// DELETE article  
export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;
        const articleIndex = articles.findIndex(a => a.slug === slug);

        if (articleIndex === -1) {
            return NextResponse.json(
                { error: 'Article not found' },
                { status: 404 }
            );
        }

        // Remove article
        const updatedArticles = articles.filter(a => a.slug !== slug);

        // Write to file
        const filePath = join(process.cwd(), 'data', 'articles', 'index.ts');
        const fileContent = generateArticlesCode(updatedArticles);
        await writeFile(filePath, fileContent, 'utf-8');

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Error deleting article:', error);
        return NextResponse.json(
            { error: 'Failed to delete article' },
            { status: 500 }
        );
    }
}
