'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './TestimonialsCarousel.module.css';

interface Testimonial {
    id: number;
    name: string;
    company: string;
    role: string;
    content: string;
    rating: number;
    avatar: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Budi Santoso',
        company: 'PT Mitra Sejahtera',
        role: 'Direktur Operasional',
        content: 'Cahaya Cargo Express sangat profesional dalam handling pengiriman project cargo kami ke Makassar. Tracking real-time memudahkan monitoring, dan barang selalu sampai tepat waktu!',
        rating: 5,
        avatar: '👨‍💼'
    },
    {
        id: 2,
        name: 'Siti Nurhaliza',
        company: 'CV Berkah Jaya',
        role: 'Owner',
        content: 'Sudah 3 tahun menggunakan jasa Cahaya Cargo untuk kirim furniture ke Sulawesi. Harga kompetitif, packing rapi, dan customer service sangat responsif via WhatsApp!',
        rating: 5,
        avatar: '👩‍💼'
    },
    {
        id: 3,
        name: 'Ahmad Fauzi',
        company: 'UD Samudra Logistik',
        role: 'Manager Pengadaan',
        content: 'Pengiriman kendaraan sangat aman dengan Cahaya Cargo. Loading dan unloading profesional, dokumentasi lengkap, dan asuransi all-risk membuat kami tenang.',
        rating: 5,
        avatar: '🧑‍💼'
    },
    {
        id: 4,
        name: 'Linda Wijaya',
        company: 'Toko Elektronik Maju',
        role: 'Pemilik',
        content: 'Express logistic service mereka luar biasa! Barang urgent untuk event di Manado sampai dalam 3 hari. Tim sales sangat helpful dan harga reasonable.',
        rating: 5,
        avatar: '👩'
    },
    {
        id: 5,
        name: 'Rizky Pratama',
        company: 'PT Konstruksi Nusantara',
        role: 'Project Manager',
        content: 'Untuk pengiriman material project ke Palu, Cahaya Cargo adalah pilihan terbaik. Konsultasi gratis, custom shipping solution, dan tracking yang akurat. Highly recommended!',
        rating: 5,
        avatar: '👨'
    }
];

const companyLogos = [
    { name: 'PT Mitra Sejahtera', icon: '🏢' },
    { name: 'CV Berkah Jaya', icon: '🏭' },
    { name: 'UD Samudra', icon: '⚓' },
    { name: 'Toko Elektronik', icon: '🔌' },
    { name: 'PT Konstruksi', icon: '🏗️' },
    { name: 'CV Global Trade', icon: '🌏' },
    { name: 'UD Makmur', icon: '📦' },
    { name: 'PT Logistics Pro', icon: '🚛' }
];

export const TestimonialsCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    // Trust metrics with animation
    const [metricsVisible, setMetricsVisible] = useState(false);
    const [animatedMetrics, setAnimatedMetrics] = useState({
        reviews: 0,
        rating: 0,
        satisfaction: 0
    });

    useEffect(() => {
        setMetricsVisible(true);

        // Animate counters
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        let step = 0;
        const counter = setInterval(() => {
            step++;
            const progress = step / steps;

            setAnimatedMetrics({
                reviews: Math.floor(2500 * progress),
                rating: Math.min(4.9, 4.9 * progress),
                satisfaction: Math.floor(98 * progress)
            });

            if (step >= steps) clearInterval(counter);
        }, interval);

        return () => clearInterval(counter);
    }, []);

    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlay]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

        setMousePosition({ x, y });
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setMousePosition({ x: 0, y: 0 });
        setIsHovering(false);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlay(false);
        setTimeout(() => setIsAutoPlay(true), 10000);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAutoPlay(false);
        setTimeout(() => setIsAutoPlay(true), 10000);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAutoPlay(false);
        setTimeout(() => setIsAutoPlay(true), 10000);
    };

    const cardStyle = {
        transform: isHovering
            ? `perspective(1000px) rotateX(${-mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg) scale(1.02)`
            : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
    };

    return (
        <div className={styles.testimonialsWrapper}>
            {/* Animated Background */}
            <div className={styles.animatedBackground}>
                <div className={styles.orb} style={{ '--delay': '0s' } as React.CSSProperties}></div>
                <div className={styles.orb} style={{ '--delay': '2s' } as React.CSSProperties}></div>
                <div className={styles.orb} style={{ '--delay': '4s' } as React.CSSProperties}></div>
            </div>

            {/* Trust Metrics Bar */}
            <div className={`${styles.trustMetrics} ${metricsVisible ? styles.visible : ''}`}>
                <div className={styles.metric}>
                    <div className={styles.metricNumber}>{animatedMetrics.reviews.toLocaleString()}+</div>
                    <div className={styles.metricLabel}>Total Reviews</div>
                </div>
                <div className={styles.metricDivider}></div>
                <div className={styles.metric}>
                    <div className={styles.metricNumber}>{animatedMetrics.rating.toFixed(1)}/5</div>
                    <div className={styles.metricLabel}>Average Rating</div>
                </div>
                <div className={styles.metricDivider}></div>
                <div className={styles.metric}>
                    <div className={styles.metricNumber}>{animatedMetrics.satisfaction}%</div>
                    <div className={styles.metricLabel}>Satisfaction Rate</div>
                </div>
            </div>

            {/* Carousel */}
            <div className={styles.carouselContainer}>
                <div className={styles.carouselWrapper}>
                    <div
                        className={styles.carouselTrack}
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className={styles.testimonialCard}
                                ref={cardRef}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                style={cardStyle}
                            >
                                <div className={styles.cardGlow}></div>
                                <div className={styles.quoteIcon}>&ldquo;</div>
                                <p className={styles.content}>{testimonial.content}</p>
                                <div className={styles.rating}>
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <span
                                            key={i}
                                            className={i < testimonial.rating ? styles.starFilled : styles.starEmpty}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                                <div className={styles.author}>
                                    <div className={styles.avatar}>{testimonial.avatar}</div>
                                    <div className={styles.authorInfo}>
                                        <div className={styles.authorName}>{testimonial.name}</div>
                                        <div className={styles.authorRole}>{testimonial.role}</div>
                                        <div className={styles.company}>{testimonial.company}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className={`${styles.navButton} ${styles.navButtonPrev}`}
                    onClick={prevSlide}
                    aria-label="Previous testimonial"
                >
                    ‹
                </button>
                <button
                    className={`${styles.navButton} ${styles.navButtonNext}`}
                    onClick={nextSlide}
                    aria-label="Next testimonial"
                >
                    ›
                </button>

                <div className={styles.dotsContainer}>
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Company Logos */}
            <div className={styles.companyLogos}>
                <div className={styles.logosTitle}>Dipercaya oleh 500+ Perusahaan</div>
                <div className={styles.logosGrid}>
                    {companyLogos.map((logo, index) => (
                        <div key={index} className={styles.logoItem}>
                            <span className={styles.logoIcon}>{logo.icon}</span>
                            <span className={styles.logoName}>{logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
