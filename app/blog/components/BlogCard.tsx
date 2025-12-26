'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/data/articles/types';
import styles from './BlogCard.module.css';

interface BlogCardProps {
    article: Article;
}

export const BlogCard: React.FC<BlogCardProps> = ({ article }) => {
    return (
        <Link href={`/blog/${article.category}/${article.slug}`} className={styles.card}>
            <div className={styles.imageContainer}>
                <div className={styles.categoryBadge}>{article.category.replace('-', ' ')}</div>
                {article.featuredImage && article.featuredImage !== '/images/blog/default.jpg' ? (
                    <img
                        src={article.featuredImage}
                        alt={article.title}
                        className={styles.image}
                    />
                ) : (
                    <div className={styles.imagePlaceholder}>
                        <span className={styles.imageIcon}>📰</span>
                    </div>
                )}
            </div>

            <div className={styles.content}>
                <div className={styles.meta}>
                    <span className={styles.date}>
                        {new Date(article.publishedAt).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                        })}
                    </span>
                    <span className={styles.separator}>•</span>
                    <span className={styles.readTime}>{article.readingTime} min read</span>
                </div>

                <h3 className={styles.title}>{article.title}</h3>
                <p className={styles.excerpt}>{article.excerpt}</p>

                <div className={styles.footer}>
                    <div className={styles.author}>
                        <span className={styles.avatar}>{article.author.avatar}</span>
                        <span className={styles.authorName}>{article.author.name}</span>
                    </div>

                    <div className={styles.tags}>
                        {article.tags.slice(0, 2).map((tag, index) => (
                            <span key={index} className={styles.tag}>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};
