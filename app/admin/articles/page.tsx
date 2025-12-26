'use client';

import Link from 'next/link';
import { articles } from '@/data/articles';
import { categoryNames } from '@/data/articles/types';
import styles from './articles.module.css';

export default function ArticlesListPage() {
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
                        <div>{categoryNames[article.category]}</div>
                        <div>{article.publishedAt}</div>
                        <div className={styles.actions}>
                            <Link href={`/blog/${article.category}/${article.slug}`} target="_blank">
                                👁️
                            </Link>
                            <Link href={`/admin/articles/edit/${article.slug}`}>
                                ✏️
                            </Link>
                            <button
                                onClick={async () => {
                                    if (confirm(`Hapus artikel "${article.title}"?`)) {
                                        try {
                                            const res = await fetch(`/api/articles/${article.slug}`, {
                                                method: 'DELETE',
                                            });

                                            if (res.ok) {
                                                alert('Artikel berhasil dihapus!');
                                                // Add delay to allow file system write to complete
                                                setTimeout(() => window.location.reload(), 800);
                                            } else {
                                                const data = await res.json();
                                                alert(`Error: ${data.error || 'Gagal menghapus artikel'}`);
                                            }
                                        } catch (error) {
                                            alert('Terjadi kesalahan saat menghapus artikel');
                                            console.error(error);
                                        }
                                    }
                                }}
                                className={styles.deleteButton}
                            >
                                🗑️
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
