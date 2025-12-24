import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui';
import styles from './track.module.css';

export default function TrackPage() {
    return (
        <main className={styles.trackPage}>
            {/* Animated Background */}
            <div className={styles.backgroundAnimated}>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
            </div>

            <div className={styles.trackContainer}>
                {/* Main Content */}
                <div className={styles.trackContent}>
                    {/* Status Badge */}
                    <div className={styles.statusBadge}>
                        <span className={styles.statusDot}></span>
                        In Development
                    </div>

                    {/* Icon with Animation */}
                    <div className={styles.iconContainer}>
                        <div className={styles.iconCircle}>
                            <span className={styles.mainIcon}>📦</span>
                        </div>
                        <div className={styles.orbitingIcons}>
                            <span className={styles.orbitIcon} style={{ '--delay': '0s' } as React.CSSProperties}>📍</span>
                            <span className={styles.orbitIcon} style={{ '--delay': '1s' } as React.CSSProperties}>🚛</span>
                            <span className={styles.orbitIcon} style={{ '--delay': '2s' } as React.CSSProperties}>✈️</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className={styles.trackTitle}>
                        Sistem Tracking <br />
                        <span className="gradient-text">Coming Soon</span>
                    </h1>

                    {/* Description */}
                    <p className={styles.trackDescription}>
                        Kami sedang mengembangkan sistem tracking real-time yang akan memberikan
                        <strong> transparansi penuh</strong> terhadap lokasi dan status pengiriman Anda.
                    </p>

                    {/* Features Grid */}
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIconBox}>📍</div>
                            <h3>Live GPS Tracking</h3>
                            <p>Pantau posisi kargo secara real-time</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIconBox}>🔔</div>
                            <h3>Smart Notifications</h3>
                            <p>Update otomatis via WhatsApp & Email</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIconBox}>📱</div>
                            <h3>Mobile App</h3>
                            <p>Akses mudah dari smartphone</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIconBox}>📊</div>
                            <h3>Detailed Reports</h3>
                            <p>Riwayat lengkap setiap pengiriman</p>
                        </div>
                    </div>

                    {/* Timeline Preview */}
                    <div className={styles.timelinePreview}>
                        <div className={styles.timelineTitle}>Preview Timeline Tracking:</div>
                        <div className={styles.timelineSteps}>
                            <div className={styles.timelineStep}>
                                <div className={styles.stepIcon}>✓</div>
                                <div className={styles.stepContent}>
                                    <div className={styles.stepLabel}>Pickup Confirmed</div>
                                    <div className={styles.stepTime}>Real-time update</div>
                                </div>
                            </div>
                            <div className={styles.timelineStep}>
                                <div className={styles.stepIcon}>⏳</div>
                                <div className={styles.stepContent}>
                                    <div className={styles.stepLabel}>In Transit</div>
                                    <div className={styles.stepTime}>GPS location</div>
                                </div>
                            </div>
                            <div className={styles.timelineStep}>
                                <div className={styles.stepIcon}>📦</div>
                                <div className={styles.stepContent}>
                                    <div className={styles.stepLabel}>Arrived at Port</div>
                                    <div className={styles.stepTime}>Port updates</div>
                                </div>
                            </div>
                            <div className={styles.timelineStep}>
                                <div className={styles.stepIcon}>✅</div>
                                <div className={styles.stepContent}>
                                    <div className={styles.stepLabel}>Delivered</div>
                                    <div className={styles.stepTime}>POD available</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className={styles.ctaSection}>
                        <div className={styles.ctaButtons}>
                            <Link href="/">
                                <Button variant="primary" size="lg">
                                    ← Kembali ke Beranda
                                </Button>
                            </Link>
                            <a
                                href="https://wa.me/6283817523403?text=Halo,%20saya%20ingin%20bertanya%20tentang%20status%20pengiriman"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="outline" size="lg">
                                    💬 Tanya Status Kiriman
                                </Button>
                            </a>
                        </div>

                        {/* Contact Info Card */}
                        <div className={styles.contactCard}>
                            <div className={styles.contactIcon}>📞</div>
                            <div className={styles.contactInfo}>
                                <div className={styles.contactLabel}>Butuh bantuan sekarang?</div>
                                <a href="https://wa.me/6283817523403" className={styles.contactNumber}>
                                    0838-1752-3403 (WhatsApp)
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Launch Estimate */}
                    <div className={styles.launchBadge}>
                        <span className={styles.rocketIcon}>🚀</span>
                        Estimasi: Q1 2025
                    </div>
                </div>
            </div>
        </main>
    );
}
