import { NextRequest, NextResponse } from 'next/server';
import { uploadArticleImage } from '@/lib/supabase/storage';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;
        const articleSlug = formData.get('articleSlug') as string;

        if (!file) {
            return NextResponse.json(
                { error: 'No file provided' },
                { status: 400 }
            );
        }

        if (!articleSlug) {
            return NextResponse.json(
                { error: 'Article slug is required' },
                { status: 400 }
            );
        }

        // Upload to Supabase Storage
        const result = await uploadArticleImage(file, articleSlug);

        if (!result.success) {
            return NextResponse.json(
                { error: result.error || 'Upload failed' },
                { status: 500 }
            );
        }

        return NextResponse.json({ url: result.url });
    } catch (error: any) {
        console.error('Image upload error:', error);
        return NextResponse.json(
            { error: error.message || 'Internal server error' },
            { status: 500 }
        );
    }
}
