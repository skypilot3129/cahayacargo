'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './admin.module.css';

interface ArticleStats {
    totalArticles: number;
    totalCategories: number;
    totalTags: number;
    recentArticles: any[];
}

export default function AdminDashboard() {
    const [stats, setStats] = useState<ArticleStats>({
        totalArticles: 0,
        totalCategories: 0,
        totalTags: 0,
        recentArticles: [],
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchStats() {
            try {
                const res = await fetch('/api/articles');
                if (!res.ok) throw new Error('Failed to fetch');

                const data = await res.json();
                const articles = data.articles || [];

                setStats({
                    totalArticles: articles.length,
                    totalCategories: new Set(articles.map((a: any) => a.category)).size,
                    totalTags: new Set(articles.flatMap((a: any) => a.tags)).size,
                    recentArticles: articles.slice(0, 5),
                });
            } catch (error) {
                console.error('Error fetching stats:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchStats();
    }, []);

    const handleLogout = async () => {
        await fetch('/api/auth/login', { method: 'DELETE' });
        window.location.href = '/admin/login';
    };

    if (loading) {
        return (
            <div className={styles.dashboard}>
                <div style={{ textAlign: 'center', padding: '4rem' }}>
                    Loading dashboard...
                </div>
            </div>
        );
    }

    return (
        <div className={styles.dashboard}>
            <header className={styles.header}>
                <div className="container">
                    <h1>Admin Dashboard</h1>
                    <nav className={styles.nav}>
                        <Link href="/admin/articles">Kelola Artikel</Link>
                        <Link href="/admin/articles/new" className={styles.primaryButton}>
                            ✍️ Buat Artikel Baru
                        </Link>
                        <Link href="/blog">Lihat Blog</Link>
                        <button onClick={handleLogout} className={styles.logoutButton}>
                            Logout
                        </button>
                    </nav>
                </div>
            </header>

            <main className={styles.main}>
                <div className="container">
                    <div className={styles.stats}>
                        <div className={styles.statCard}>
                            <div className={styles.statIcon}>📝</div>
                            <div className={styles.statInfo}>
                                <div className={styles.statNumber}>{stats.totalArticles}</div>
                                <div className={styles.statLabel}>Total Artikel</div>
                            </div>
                        </div>

                        <div className={styles.statCard}>
                            <div className={styles.statIcon}>📁</div>
                            <div className={styles.statInfo}>
                                <div className={styles.statNumber}>{stats.totalCategories}</div>
                                <div className={styles.statLabel}>Kategori</div>
                            </div>
                        </div>

                        <div className={styles.statCard}>
                            <div className={styles.statIcon}>🏷️</div>
                            <div className={styles.statInfo}>
                                <div className={styles.statNumber}>{stats.totalTags}</div>
                                <div className={styles.statLabel}>Total Tags</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.recentArticles}>
                        <h2>Artikel Terbaru</h2>
                        {stats.recentArticles.length === 0 ? (
                            <p style={{ textAlign: 'center', padding: '2rem' }}>
                                Belum ada artikel. Buat artikel pertama Anda!
                            </p>
                        ) : (
                            <>
                                <div className={styles.articleList}>
                                    {stats.recentArticles.map((article: any) => (
                                        <Link
                                            key={article.slug}
                                            href={`/admin/articles/edit/${article.slug}`}
                                            className={styles.articleItem}
                                        >
                                            <div>
                                                <h3>{article.title}</h3>
                                                <p className={styles.articleMeta}>
                                                    {article.category} • {new Date(article.publishedAt).toLocaleDateString('id-ID')}
                                                </p>
                                            </div>
                                            <span className={styles.editButton}>Edit →</span>
                                        </Link>
                                    ))}
                                </div>

                                <Link href="/admin/articles" className={styles.viewAllButton}>
                                    Lihat Semua Artikel →
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
