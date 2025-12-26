'use client';

import { checkAuth } from '@/lib/auth';
import ArticleForm from '../../components/ArticleForm';

export default function NewArticlePage() {
    // Note: checkAuth won't work in client component, we'll handle auth differently

    return (
        <div>
            <ArticleForm />
        </div>
    );
}
