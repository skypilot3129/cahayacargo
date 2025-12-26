import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { marked } from 'marked';
import { BlogCard } from '../../components/BlogCard';
import styles from './article.module.css';
import { notFound } from 'next/navigation';

// Configure marked for better markdown rendering
marked.setOptions({
    gfm: true, // GitHub Flavored Markdown
    breaks: true, // Convert \n to <br>
});

interface ArticlePageProps {
    params: Promise<{
        category: string;
        slug: string;
    }>;
}

// Force dynamic rendering
export const dynamic = 'force-dynamic';

// Fetch article from API
async function getArticle(slug: string) {
    try {
        const res = await fetch(`http://localhost:3000/api/articles/${slug}`, {
            cache: 'no-store'
        });

        if (!res.ok) return null;

        const data = await res.json();
        return data.article;
    } catch (error) {
        console.error('Error fetching article:', error);
        return null;
    }
}

// Fetch related articles
async function getRelatedArticles(category: string, currentSlug: string) {
    try {
        const res = await fetch(`http://localhost:3000/api/articles?category=${category}`, {
            cache: 'no-store'
        });

        if (!res.ok) return [];

        const data = await res.json();
        return (data.articles || [])
            .filter((a: any) => a.slug !== currentSlug)
            .slice(0, 3);
    } catch (error) {
        console.error('Error fetching related articles:', error);
        return [];
    }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = await getArticle(slug);

    if (!article) {
        return {
            title: 'Article Not Found',
        };
    }

    return {
        title: article.seo.metaTitle,
        description: article.seo.metaDescription,
        keywords: article.seo.keywords,
        openGraph: {
            title: article.seo.metaTitle,
            description: article.seo.metaDescription,
            type: 'article',
            publishedTime: article.publishedAt,
            authors: [article.author.name],
            tags: article.tags,
        },
    };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { slug, category } = await params;
    const article = await getArticle(slug);

    if (!article) {
        notFound();
    }

    const relatedArticles = await getRelatedArticles(article.category, slug);

    return (
        <div className={styles.articlePage}>
            {/* Breadcrumbs */}
            <div className={styles.breadcrumbs}>
                <div className="container">
                    <Link href="/">Beranda</Link>
                    <span className={styles.separator}>/</span>
                    <Link href="/blog">Blog</Link>
                    <span className={styles.separator}>/</span>
                    <Link href={`/blog/${article.category}`}>{article.category.replace('-', ' ')}</Link>
                    <span className={styles.separator}>/</span>
                    <span className={styles.current}>{article.title}</span>
                </div>
            </div>

            {/* Article Header */}
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.categoryBadge}>{article.category.replace('-', ' ')}</div>
                    <h1 className={styles.title}>{article.title}</h1>

                    <div className={styles.meta}>
                        <div className={styles.author}>
                            <span className={styles.avatar}>{article.author.avatar}</span>
                            <div>
                                <div className={styles.authorName}>{article.author.name}</div>
                                <div className={styles.authorRole}>{article.author.role}</div>
                            </div>
                        </div>

                        <div className={styles.metaInfo}>
                            <span>{new Date(article.publishedAt).toLocaleDateString('id-ID', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}</span>
                            <span className={styles.separator}>•</span>
                            <span>{article.readingTime} min read</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Article Content */}
            <article className={styles.content}>
                <div className="container">
                    <div
                        className={styles.prose}
                        dangerouslySetInnerHTML={{ __html: marked(article.content) }}
                    />

                    {/* Tags */}
                    <div className={styles.tags}>
                        {article.tags.map((tag: string) => (
                            <span key={tag} className={styles.tag}>
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Share Buttons */}
                    <div className={styles.share}>
                        <h3>Bagikan Artikel Ini</h3>
                        <div className={styles.shareButtons}>
                            <a
                                href={`https://wa.me/?text=${encodeURIComponent(article.title)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.shareButton}
                            >
                                WhatsApp
                            </a>
                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://cahayacargoexpress.com/blog/${article.category}/${article.slug}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.shareButton}
                            >
                                Facebook
                            </a>
                            <a
                                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.shareButton}
                            >
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
                <section className={styles.related}>
                    <div className="container">
                        <h2 className={styles.relatedTitle}>Artikel Terkait</h2>
                        <div className={styles.relatedGrid}>
                            {relatedArticles.map((relatedArticle: any) => (
                                <BlogCard key={relatedArticle.slug} article={relatedArticle} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Siap Kirim Kargo Anda?</h2>
                        <p>Dapatkan penawaran terbaik dan konsultasi gratis dari tim ahli kami</p>
                        <a
                            href="https://wa.me/6283817523403?text=Halo,%20saya%20tertarik%20mengirim%20kargo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ctaButton}
                        >
                            Hubungi Kami Sekarang
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
