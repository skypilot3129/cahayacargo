'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { categoryNames } from '@/data/articles/types';
import styles from './articles.module.css';

interface Article {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    publishedAt: string;
}

export default function ArticlesListPage() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch articles from API
    useEffect(() => {
        async function fetchArticles() {
            try {
                const res = await fetch('/api/articles');
                if (!res.ok) throw new Error('Failed to fetch articles');

                const data = await res.json();
                setArticles(data.articles || []);
            } catch (err: any) {
                setError(err.message);
                console.error('Error fetching articles:', err);
            } finally {
                setLoading(false);
            }
        }

        fetchArticles();
    }, []);

    const handleDelete = async (slug: string, title: string) => {
        if (!confirm(`Hapus artikel "${title}"?`)) return;

        try {
            const res = await fetch(`/api/articles/${slug}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                alert('Artikel berhasil dihapus!');
                // Remove from state immediately (real-time update!)
                setArticles(articles.filter(a => a.slug !== slug));
            } else {
                const data = await res.json();
                alert(`Error: ${data.error || 'Gagal menghapus artikel'}`);
            }
        } catch (error) {
            alert('Terjadi kesalahan saat menghapus artikel');
            console.error(error);
        }
    };

    if (loading) {
        return (
            <div className={styles.container}>
                <div style={{ textAlign: 'center', padding: '4rem' }}>
                    <p>Loading articles...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.container}>
                <div style={{ textAlign: 'center', padding: '4rem', color: 'red' }}>
                    <p>Error: {error}</p>
                    <button onClick={() => window.location.reload()}>Retry</button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <h1>Kelola Artikel</h1>
                    <p>{articles.length} artikel total</p>
                </div>
                <Link href="/admin/articles/new" className={styles.newButton}>
                    ✍️ Buat Artikel Baru
                </Link>
            </header>

            {articles.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '4rem' }}>
                    <p>Belum ada artikel. Buat artikel pertama Anda!</p>
                    <Link href="/admin/articles/new" className={styles.newButton} style={{ marginTop: '1rem', display: 'inline-block' }}>
                        ✍️ Buat Artikel Baru
                    </Link>
                </div>
            ) : (
                <div className={styles.table}>
                    <div className={styles.tableHeader}>
                        <div>Judul</div>
                        <div>Kategori</div>
                        <div>Tanggal</div>
                        <div>Aksi</div>
                    </div>

                    {articles.map((article) => (
                        <div key={article.slug} className={styles.tableRow}>
                            <div className={styles.titleCell}>
                                <h3>{article.title}</h3>
                                <p>{article.excerpt.substring(0, 100)}...</p>
                            </div>
                            <div>{categoryNames[article.category as keyof typeof categoryNames]}</div>
                            <div>{new Date(article.publishedAt).toLocaleDateString('id-ID')}</div>
                            <div className={styles.actions}>
                                <Link href={`/blog/${article.category}/${article.slug}`} target="_blank">
                                    👁️
                                </Link>
                                <Link href={`/admin/articles/edit/${article.slug}`}>
                                    ✏️
                                </Link>
                                <button
                                    onClick={() => handleDelete(article.slug, article.title)}
                                    className={styles.deleteButton}
                                >
                                    🗑️
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
