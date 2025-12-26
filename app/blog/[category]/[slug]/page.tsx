import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { marked } from 'marked';
import { articles, getArticleBySlug, getRelatedArticles } from '@/data/articles';
import { BlogCard } from '../../components/BlogCard';
import styles from './article.module.css';

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

// Force dynamic rendering to handle new articles
export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
    return articles.map((article) => ({
        category: article.category,
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

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
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        return <div>Article not found</div>;
    }

    const relatedArticles = getRelatedArticles(article.slug);

    // Convert markdown to HTML
    const htmlContent = marked(article.content);

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
                    <div className={styles.contentGrid}>
                        <div className={styles.mainContent}>
                            <div
                                className={styles.prose}
                                dangerouslySetInnerHTML={{ __html: htmlContent }}
                            />

                            {/* Tags */}
                            <div className={styles.tags}>
                                <strong>Tags:</strong>
                                {article.tags.map((tag, index) => (
                                    <span key={index} className={styles.tag}>{tag}</span>
                                ))}
                            </div>

                            {/* Share */}
                            <div className={styles.share}>
                                <h3>Bagikan Artikel</h3>
                                <div className={styles.shareButtons}>
                                    <a
                                        href={`https://wa.me/?text=${encodeURIComponent(article.title + ' - ' + 'https://cahayacargoexpress.com/blog/' + article.category + '/' + article.slug)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.shareButton}
                                    >
                                        WhatsApp
                                    </a>
                                    <a
                                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://cahayacargoexpress.com/blog/' + article.category + '/' + article.slug)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.shareButton}
                                    >
                                        Facebook
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCard}>
                                <h3>Butuh Bantuan?</h3>
                                <p>Hubungi tim kami untuk konsultasi gratis</p>
                                <a
                                    href="https://wa.me/6283817523403?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20pengiriman%20cargo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.ctaButton}
                                >
                                    💬 Chat WhatsApp
                                </a>
                            </div>
                        </aside>
                    </div>
                </div>
            </article>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
                <section className={styles.related}>
                    <div className="container">
                        <h2 className={styles.relatedTitle}>Artikel Terkait</h2>
                        <div className={styles.relatedGrid}>
                            {relatedArticles.map((relatedArticle) => (
                                <BlogCard key={relatedArticle.slug} article={relatedArticle} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
