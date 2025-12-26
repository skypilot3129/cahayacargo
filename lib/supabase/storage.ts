import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const BUCKET_NAME = 'article-images';
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

/**
 * Validate image file before upload
 */
export function validateImageFile(file: File): { valid: boolean; error?: string } {
    // Check file type
    if (!ALLOWED_TYPES.includes(file.type)) {
        return {
            valid: false,
            error: 'Invalid file type. Please upload JPG, PNG, WebP, or GIF.'
        };
    }

    // Check file size
    if (file.size > MAX_FILE_SIZE) {
        return {
            valid: false,
            error: 'File size too large. Maximum size is 5MB.'
        };
    }

    return { valid: true };
}

/**
 * Upload article image to Supabase Storage
 */
export async function uploadArticleImage(
    file: File,
    articleSlug: string
): Promise<{ success: boolean; url?: string; error?: string }> {
    try {
        // Validate file
        const validation = validateImageFile(file);
        if (!validation.valid) {
            return { success: false, error: validation.error };
        }

        // Generate unique filename
        const timestamp = Date.now();
        const fileExt = file.name.split('.').pop();
        const fileName = `${articleSlug}-${timestamp}.${fileExt}`;
        const filePath = fileName;

        // Upload to Supabase Storage
        const { data, error } = await supabase.storage
            .from(BUCKET_NAME)
            .upload(filePath, file, {
                cacheControl: '3600',
                upsert: false
            });

        if (error) {
            console.error('Upload error:', error);
            return { success: false, error: error.message };
        }

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
            .from(BUCKET_NAME)
            .getPublicUrl(filePath);

        return { success: true, url: publicUrl };
    } catch (error: any) {
        console.error('Upload exception:', error);
        return { success: false, error: error.message || 'Upload failed' };
    }
}

/**
 * Delete article image from Supabase Storage
 */
export async function deleteArticleImage(
    imageUrl: string
): Promise<{ success: boolean; error?: string }> {
    try {
        // Extract file path from URL
        const url = new URL(imageUrl);
        const pathParts = url.pathname.split('/');
        const filePath = pathParts[pathParts.length - 1];

        const { error } = await supabase.storage
            .from(BUCKET_NAME)
            .remove([filePath]);

        if (error) {
            console.error('Delete error:', error);
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (error: any) {
        console.error('Delete exception:', error);
        return { success: false, error: error.message || 'Delete failed' };
    }
}

/**
 * Get public URL for an image path
 */
export function getPublicUrl(filePath: string): string {
    const { data: { publicUrl } } = supabase.storage
        .from(BUCKET_NAME)
        .getPublicUrl(filePath);

    return publicUrl;
}
