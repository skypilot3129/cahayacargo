'use client';

import React from 'react';
import Link from 'next/link';
import styles from './FloatingCTA.module.css';

export const FloatingCTA: React.FC = () => {
    return (
        <div className={styles.floatingCTA}>
            <Link href="/track" className={styles.ctaButton}>
                <span className={styles.ctaIcon}>💰</span>
                <span className={styles.ctaText}>Cek Tarif</span>
            </Link>
        </div>
    );
};
