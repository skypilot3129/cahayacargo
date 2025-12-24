import React from 'react';
import styles from './LoadingSpinner.module.css';

export const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({
    size = 'md',
}) => {
    return (
        <div className={`${styles.spinner} ${styles[size]}`}>
            <div className={styles.circle}></div>
        </div>
    );
};
