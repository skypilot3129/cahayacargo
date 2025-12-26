'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ArticleForm from '../../../components/ArticleForm';

export default function EditArticlePage() {
    const params = useParams();
    const slug = params.slug as string;
    const [article, setArticle] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchArticle() {
            try {
                const res = await fetch(`/api/articles/${slug}`);
                if (res.ok) {
                    const data = await res.json();
                    setArticle(data.article);
                } else {
                    setError('Article not found');
                }
            } catch (err) {
                setError('Failed to load article');
            } finally {
                setLoading(false);
            }
        }

        if (slug) {
            fetchArticle();
        }
    }, [slug]);

    if (loading) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h2>Loading...</h2>
            </div>
        );
    }

    if (error || !article) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h2>❌ {error || 'Article not found'}</h2>
                <a href="/admin/articles" style={{ color: '#f4c542' }}>← Back to Articles</a>
            </div>
        );
    }

    return <ArticleForm initialData={article} isEdit={true} />;
}
