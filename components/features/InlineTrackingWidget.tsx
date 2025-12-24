'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './InlineTrackingWidget.module.css';

export const InlineTrackingWidget: React.FC = () => {
    const [trackingNumber, setTrackingNumber] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (trackingNumber.trim()) {
            router.push(`/track?resi=${trackingNumber.trim()}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.widget}>
            <input
                type="text"
                placeholder="[Masukkan No. Resi]"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className={styles.input}
            />
            <button type="submit" className={styles.button}>
                Cari
            </button>
        </form>
    );
};
