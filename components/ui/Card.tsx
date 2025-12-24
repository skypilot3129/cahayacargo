import React from 'react';
import styles from './Card.module.css';

interface CardProps {
    children: React.ReactNode;
    variant?: 'glass' | 'solid' | 'outline';
    hover?: boolean;
    className?: string;
}

export const Card: React.FC<CardProps> = ({
    children,
    variant = 'glass',
    hover = true,
    className = '',
}) => {
    return (
        <div
            className={`${styles.card} ${styles[variant]} ${hover ? styles.hover : ''} ${className}`}
        >
            {children}
        </div>
    );
};
