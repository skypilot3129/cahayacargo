import { NextResponse } from 'next/server';
import { writeFile, readFile } from 'fs/promises';
import { join } from 'path';
import { articles } from '@/data/articles';

// Helper to generate TypeScript code for articles array
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

// GET all articles
export async function GET() {
    try {
        return NextResponse.json({ articles });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch articles' },
            { status: 500 }
        );
    }
}

// POST new article
export async function POST(request: Request) {
    try {
        const newArticle = await request.json();

        // Validate required fields
        if (!newArticle.title || !newArticle.slug || !newArticle.content) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Check if slug already exists
        if (articles.some(a => a.slug === newArticle.slug)) {
            return NextResponse.json(
                { error: 'Article with this slug already exists' },
                { status: 409 }
            );
        }

        // Add new article
        const updatedArticles = [...articles, newArticle];

        // Write to file
        const filePath = join(process.cwd(), 'data', 'articles', 'index.ts');
        const fileContent = generateArticlesCode(updatedArticles);
        await writeFile(filePath, fileContent, 'utf-8');

        return NextResponse.json({
            success: true,
            article: newArticle
        }, { status: 201 });

    } catch (error) {
        console.error('Error creating article:', error);
        return NextResponse.json(
            { error: 'Failed to create article' },
            { status: 500 }
        );
    }
}
