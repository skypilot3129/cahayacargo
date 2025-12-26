'use client';

import Link from 'next/link';
import { articles } from '@/data/articles';
import styles from './admin.module.css';

export default function AdminDashboard() {
    const stats = {
        totalArticles: articles.length,
        totalCategories: new Set(articles.map(a => a.category)).size,
        totalTags: new Set(articles.flatMap(a => a.tags)).size,
        recentArticles: articles.slice(0, 5),
    };

    const handleLogout = async () => {
        await fetch('/api/auth/login', { method: 'DELETE' });
        window.location.href = '/admin/login';
    };

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
                        <div className={styles.articleList}>
                            {stats.recentArticles.map((article) => (
                                <Link
                                    key={article.slug}
                                    href={`/admin/articles/edit/${article.slug}`}
                                    className={styles.articleItem}
                                >
                                    <div>
                                        <h3>{article.title}</h3>
                                        <p className={styles.articleMeta}>
                                            {article.category} • {article.publishedAt}
                                        </p>
                                    </div>
                                    <span className={styles.editButton}>Edit →</span>
                                </Link>
                            ))}
                        </div>

                        <Link href="/admin/articles" className={styles.viewAllButton}>
                            Lihat Semua Artikel →
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
