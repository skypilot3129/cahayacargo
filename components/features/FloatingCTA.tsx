'use client';

import React from 'react';
import styles from './FloatingCTA.module.css';

export const FloatingCTA: React.FC = () => {
    return (
        <div className={styles.floatingCTA}>
            <a
                href="https://wa.me/6283817523403?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20pengiriman%20cargo"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
            >
                <span className={styles.ctaIcon}>💬</span>
                <span className={styles.ctaText}>Konsultasi WA</span>
            </a>
        </div>
    );
};
