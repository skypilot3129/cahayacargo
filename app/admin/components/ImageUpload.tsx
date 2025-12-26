'use client';

import { useState, useRef } from 'react';
import styles from './image-upload.module.css';

interface ImageUploadProps {
    currentImage?: string;
    onImageChange: (imageUrl: string | null) => void;
    articleSlug: string;
}

export function ImageUpload({ currentImage, onImageChange, articleSlug }: ImageUploadProps) {
    const [preview, setPreview] = useState<string | null>(currentImage || null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setError(null);
        setUploading(true);

        try {
            // Create preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);

            // Upload to Supabase
            const formData = new FormData();
            formData.append('file', file);
            formData.append('articleSlug', articleSlug);

            const response = await fetch('/api/upload-image', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Upload failed');
            }

            onImageChange(data.url);
        } catch (err: any) {
            setError(err.message);
            setPreview(currentImage || null);
        } finally {
            setUploading(false);
        }
    };

    const handleRemove = () => {
        setPreview(null);
        onImageChange(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className={styles.container}>
            <label className={styles.label}>
                Gambar Unggulan
                <span className={styles.optional}>(Optional)</span>
            </label>

            {preview ? (
                <div className={styles.preview}>
                    <img src={preview} alt="Preview" className={styles.previewImage} />
                    <div className={styles.previewActions}>
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className={styles.changeButton}
                            disabled={uploading}
                        >
                            Ganti Gambar
                        </button>
                        <button
                            type="button"
                            onClick={handleRemove}
                            className={styles.removeButton}
                            disabled={uploading}
                        >
                            Hapus
                        </button>
                    </div>
                </div>
            ) : (
                <div className={styles.uploadArea}>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/jpeg,image/png,image/webp,image/gif"
                        onChange={handleFileSelect}
                        className={styles.fileInput}
                        disabled={uploading}
                    />
                    <div className={styles.uploadPrompt}>
                        <span className={styles.uploadIcon}>📸</span>
                        <p className={styles.uploadText}>
                            {uploading ? 'Mengunggah...' : 'Klik atau seret gambar ke sini'}
                        </p>
                        <p className={styles.uploadHint}>
                            JPG, PNG, WebP, or GIF (max 5MB)
                        </p>
                    </div>
                </div>
            )}

            {error && (
                <div className={styles.error}>
                    ⚠️ {error}
                </div>
            )}

            {uploading && (
                <div className={styles.uploading}>
                    <div className={styles.spinner}></div>
                    <span>Mengunggah gambar...</span>
                </div>
            )}
        </div>
    );
}
