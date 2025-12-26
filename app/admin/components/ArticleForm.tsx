'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { categoryNames } from '@/data/articles/types';
import { ImageUpload } from './ImageUpload';
import styles from './article-form.module.css';

interface ArticleFormProps {
    initialData?: any;
    isEdit?: boolean;
}

export default function ArticleForm({ initialData, isEdit = false }: ArticleFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        title: initialData?.title || '',
        slug: initialData?.slug || '',
        excerpt: initialData?.excerpt || '',
        content: initialData?.content || '',
        category: initialData?.category || 'panduan-pengiriman',
        tags: initialData?.tags?.join(', ') || '',
        authorName: initialData?.author?.name || 'Tim Cahaya Cargo',
        authorRole: initialData?.author?.role || 'Logistics Expert',
        authorAvatar: initialData?.author?.avatar || '📦',
        publishedAt: initialData?.publishedAt || new Date().toISOString().split('T')[0],
        featuredImage: initialData?.featuredImage || '/images/blog/default.jpg',
        readingTime: initialData?.readingTime || 5,
        metaTitle: initialData?.seo?.metaTitle || '',
        metaDescription: initialData?.seo?.metaDescription || '',
        keywords: initialData?.seo?.keywords?.join(', ') || '',
    });

    // Auto-generate slug from title
    const handleTitleChange = (title: string) => {
        setFormData(prev => ({
            ...prev,
            title,
            slug: !isEdit ? title
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, '')
                .replace(/\s+/g, '-')
                .slice(0, 60) : prev.slug
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const article = {
                slug: formData.slug,
                title: formData.title,
                excerpt: formData.excerpt,
                content: formData.content,
                category: formData.category,
                tags: formData.tags.split(',').map((t: string) => t.trim()).filter(Boolean),
                author: {
                    name: formData.authorName,
                    role: formData.authorRole,
                    avatar: formData.authorAvatar,
                },
                publishedAt: formData.publishedAt,
                featuredImage: formData.featuredImage,
                readingTime: parseInt(formData.readingTime.toString()),
                seo: {
                    metaTitle: formData.metaTitle || formData.title,
                    metaDescription: formData.metaDescription || formData.excerpt,
                    keywords: formData.keywords.split(',').map((k: string) => k.trim()).filter(Boolean),
                },
            };

            const url = isEdit ? `/api/articles/${initialData.slug}` : '/api/articles';
            const method = isEdit ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(article),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || 'Failed to save article');
            }

            router.push('/admin/articles');
            router.refresh();
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.formContainer}>
            <div className={styles.header}>
                <h1>{isEdit ? 'Edit Artikel' : 'Buat Artikel Baru'}</h1>
                <button onClick={() => router.back()} className={styles.backButton}>
                    ← Kembali
                </button>
            </div>

            {error && (
                <div className={styles.error}>
                    ⚠️ {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className={styles.form}>
                {/* Basic Info */}
                <section className={styles.section}>
                    <h2>Informasi Dasar</h2>

                    <div className={styles.field}>
                        <label htmlFor="title">Judul Artikel *</label>
                        <input
                            id="title"
                            type="text"
                            value={formData.title}
                            onChange={(e) => handleTitleChange(e.target.value)}
                            required
                            placeholder="Contoh: Panduan Lengkap Pengiriman Cargo ke Sulawesi"
                        />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="slug">URL Slug *</label>
                        <input
                            id="slug"
                            type="text"
                            value={formData.slug}
                            onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                            required
                            placeholder="panduan-lengkap-pengiriman-cargo-sulawesi"
                        />
                        <small>URL: /blog/{formData.category}/{formData.slug}</small>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="excerpt">Ringkasan (Excerpt) *</label>
                        <textarea
                            id="excerpt"
                            value={formData.excerpt}
                            onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                            required
                            maxLength={200}
                            rows={3}
                            placeholder="Ringkasan singkat 1-2 kalimat tentang artikel"
                        />
                        <small>{formData.excerpt.length}/200 karakter</small>
                    </div>
                </section>

                {/* Content */}
                <section className={styles.section}>
                    <h2>Konten Artikel</h2>

                    <div className={styles.field}>
                        <label htmlFor="content">Konten (Markdown) *</label>
                        <textarea
                            id="content"
                            value={formData.content}
                            onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                            required
                            rows={20}
                            placeholder="# Panduan Lengkap&#10;&#10;Paragraf pertama tentang topik...&#10;&#10;## Langkah-Langkah&#10;&#10;P enjelasan detail tentang langkah. Gunakan **bold** untuk emphasis.&#10;&#10;### Sub-Bagian&#10;&#10;- Bullet point 1&#10;- Bullet point 2&#10;&#10;Paragraf penutup..."
                            className={styles.contentEditor}
                        />
                        <div style={{ marginTop: '12px', padding: '12px', background: '#f3f4f6', borderRadius: '8px', fontSize: '14px', lineHeight: '1.8' }}>
                            <strong>📝 Panduan Markdown:</strong><br />
                            • Ketik <code># Judul</code> di awal baris untuk Heading 1 (Judul Besar)<br />
                            • Ketik <code>## Subjudul</code> untuk Heading 2 (Subjudul)<br />
                            • Ketik <code>### Sub-Subjudul</code> untuk Heading 3<br />
                            • Bungkus teks dengan <code>**teks**</code> untuk <strong>bold/tebal</strong><br />
                            • Bungkus teks dengan <code>*teks*</code> untuk <em>italic/miring</em><br />
                            • Ketik <code>- item</code> di awal baris untuk bullet points<br />
                            • Ketik <code>1. item</code> untuk numbered list<br />
                            • Beri 1 baris kosong antara paragraf
                        </div>
                    </div>
                </section>

                {/* Category & Tags */}
                <section className={styles.section}>
                    <h2>Kategori & Tags</h2>

                    <div className={styles.field}>
                        <label htmlFor="category">Kategori *</label>
                        <select
                            id="category"
                            value={formData.category}
                            onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                            required
                        >
                            {Object.entries(categoryNames).map(([key, name]) => (
                                <option key={key} value={key}>{name}</option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="tags">Tags (pisahkan dengan koma) *</label>
                        <input
                            id="tags"
                            type="text"
                            value={formData.tags}
                            onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                            required
                            placeholder="pengiriman cargo, sulawesi, panduan"
                        />
                    </div>
                </section>

                {/* Featured Image */}
                <section className={styles.section}>
                    <ImageUpload
                        currentImage={formData.featuredImage}
                        onImageChange={(url) => setFormData(prev => ({ ...prev, featuredImage: url || '/images/blog/default.jpg' }))}
                        articleSlug={formData.slug || 'new-article'}
                    />
                </section>

                {/* Author Info */}
                <section className={styles.section}>
                    <h2>Informasi Penulis</h2>

                    <div className={styles.fieldGrid}>
                        <div className={styles.field}>
                            <label htmlFor="authorName">Nama Penulis</label>
                            <input
                                id="authorName"
                                type="text"
                                value={formData.authorName}
                                onChange={(e) => setFormData(prev => ({ ...prev, authorName: e.target.value }))}
                            />
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="authorRole">Role/Jabatan</label>
                            <input
                                id="authorRole"
                                type="text"
                                value={formData.authorRole}
                                onChange={(e) => setFormData(prev => ({ ...prev, authorRole: e.target.value }))}
                            />
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="authorAvatar">Avatar (Emoji)</label>
                            <input
                                id="authorAvatar"
                                type="text"
                                value={formData.authorAvatar}
                                onChange={(e) => setFormData(prev => ({ ...prev, authorAvatar: e.target.value }))}
                                maxLength={2}
                            />
                        </div>
                    </div>
                </section>

                {/* Meta Data */}
                <section className={styles.section}>
                    <h2>Metadata & SEO</h2>

                    <div className={styles.fieldGrid}>
                        <div className={styles.field}>
                            <label htmlFor="publishedAt">Tanggal Publikasi</label>
                            <input
                                id="publishedAt"
                                type="date"
                                value={formData.publishedAt}
                                onChange={(e) => setFormData(prev => ({ ...prev, publishedAt: e.target.value }))}
                            />
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="readingTime">Estimasi Baca (menit)</label>
                            <input
                                id="readingTime"
                                type="number"
                                value={formData.readingTime}
                                onChange={(e) => setFormData(prev => ({ ...prev, readingTime: e.target.value }))}
                                min="1"
                            />
                        </div>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="metaTitle">Meta Title (max 60 char)</label>
                        <input
                            id="metaTitle"
                            type="text"
                            value={formData.metaTitle}
                            onChange={(e) => setFormData(prev => ({ ...prev, metaTitle: e.target.value }))}
                            maxLength={60}
                            placeholder="Judul untuk SEO (kosongkan untuk auto)"
                        />
                        <small>{formData.metaTitle.length}/60 karakter</small>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="metaDescription">Meta Description (max 155 char)</label>
                        <textarea
                            id="metaDescription"
                            value={formData.metaDescription}
                            onChange={(e) => setFormData(prev => ({ ...prev, metaDescription: e.target.value }))}
                            maxLength={155}
                            rows={2}
                            placeholder="Deskripsi untuk search results (kosongkan untuk auto)"
                        />
                        <small>{formData.metaDescription.length}/155 karakter</small>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="keywords">SEO Keywords (pisahkan dengan koma)</label>
                        <input
                            id="keywords"
                            type="text"
                            value={formData.keywords}
                            onChange={(e) => setFormData(prev => ({ ...prev, keywords: e.target.value }))}
                            placeholder="keyword1, keyword2, keyword3"
                        />
                    </div>
                </section>

                {/* Submit */}
                <div className={styles.actions}>
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className={styles.cancelButton}
                        disabled={loading}
                    >
                        Batal
                    </button>
                    <button
                        type="submit"
                        className={styles.submitButton}
                        disabled={loading}
                    >
                        {loading ? 'Menyimpan...' : isEdit ? 'Update Artikel' : 'Publikasikan Artikel'}
                    </button>
                </div>
            </form>
        </div>
    );
}
