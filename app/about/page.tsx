import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui';
import styles from './about.module.css';

export default function AboutPage() {
    return (
        <main className={styles.aboutPage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <div className={styles.heroOrb}></div>
                    <div className={styles.heroOrb}></div>
                    <div className={styles.heroOrb}></div>
                </div>

                <div className="container">
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>
                            Lebih dari Sekadar <br />
                            <span className="gradient-text">Pengiriman Kargo</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Kami adalah mitra terpercaya yang menghubungkan bisnis Anda
                            ke seluruh Sulawesi dengan dedikasi penuh sejak 2010
                        </p>

                        {/* Quick Stats */}
                        <div className={styles.quickStats}>
                            <div className={styles.statBadge}>
                                <div className={styles.statValue}>14+</div>
                                <div className={styles.statLabel}>Tahun Pengalaman</div>
                            </div>
                            <div className={styles.statBadge}>
                                <div className={styles.statValue}>10K+</div>
                                <div className={styles.statLabel}>Pengiriman</div>
                            </div>
                            <div className={styles.statBadge}>
                                <div className={styles.statValue}>500+</div>
                                <div className={styles.statLabel}>Client</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Story */}
            <section className={styles.story}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>
                        Perjalanan <span className="gradient-text">Kami</span>
                    </h2>

                    <div className={styles.timeline}>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineYear}>2010</div>
                            <div className={styles.timelineContent}>
                                <h3>Awal Mula</h3>
                                <p>
                                    Cahaya Cargo Express didirikan dengan visi menjadi solusi pengiriman
                                    terpercaya untuk mendukung pertumbuhan bisnis di Indonesia Timur
                                </p>
                            </div>
                            <div className={styles.timelineIcon}>🌟</div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineYear}>2015</div>
                            <div className={styles.timelineContent}>
                                <h3>Ekspansi Armada</h3>
                                <p>
                                    Memperluas jangkauan dengan armada modern dan membuka kantor cabang
                                    di Bandung dan Surabaya untuk pelayanan lebih optimal
                                </p>
                            </div>
                            <div className={styles.timelineIcon}>🚛</div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineYear}>2020</div>
                            <div className={styles.timelineContent}>
                                <h3>Transformasi Digital</h3>
                                <p>
                                    Mengimplementasikan sistem tracking modern dan customer portal
                                    untuk transparansi penuh dalam setiap pengiriman
                                </p>
                            </div>
                            <div className={styles.timelineIcon}>📱</div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineYear}>2024</div>
                            <div className={styles.timelineContent}>
                                <h3>Masa Depan Cerah</h3>
                                <p>
                                    Terus berinovasi dengan teknologi terkini dan komitmen memberikan
                                    layanan terbaik untuk pertumbuhan bisnis pelanggan
                                </p>
                            </div>
                            <div className={styles.timelineIcon}>🚀</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className={styles.missionVision}>
                <div className="container">
                    <div className={styles.mvGrid}>
                        <div className={styles.mvCard}>
                            <div className={styles.mvIcon}>🎯</div>
                            <h3 className={styles.mvTitle}>Misi Kami</h3>
                            <p className={styles.mvDesc}>
                                Menyediakan solusi logistik maritim yang andal, efisien, dan terjangkau
                                untuk menghubungkan pelaku bisnis di seluruh Indonesia dengan fokus
                                khusus ke wilayah Sulawesi, mendukung pertumbuhan ekonomi lokal melalui
                                layanan berkualitas tinggi
                            </p>
                        </div>

                        <div className={styles.mvCard}>
                            <div className={styles.mvIcon}>🔮</div>
                            <h3 className={styles.mvTitle}>Visi Kami</h3>
                            <p className={styles.mvDesc}>
                                Menjadi perusahaan logistik maritim terdepan dan paling dipercaya di
                                Indonesia Timur, dikenal dengan inovasi teknologi, komitmen terhadap
                                kepuasan pelanggan, dan kontribusi nyata terhadap pembangunan konektivitas
                                ekonomi nasional
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className={styles.values}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>
                        Nilai-Nilai <span className="gradient-text">Kami</span>
                    </h2>

                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>🤝</div>
                            <h3>Integritas</h3>
                            <p>Kejujuran dan transparansi dalam setiap transaksi dan layanan</p>
                        </div>

                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>⚡</div>
                            <h3>Kecepatan</h3>
                            <p>Komitmen delivery tepat waktu tanpa mengorbankan keamanan</p>
                        </div>

                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>💎</div>
                            <h3>Kualitas</h3>
                            <p>Standar tinggi dalam setiap aspek pelayanan dan operasional</p>
                        </div>

                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>🌱</div>
                            <h3>Inovasi</h3>
                            <p>Terus berkembang dengan teknologi dan metode terkini</p>
                        </div>

                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>❤️</div>
                            <h3>Kepedulian</h3>
                            <p>Mengutamakan kepuasan dan kebutuhan pelanggan</p>
                        </div>

                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>🌍</div>
                            <h3>Keberlanjutan</h3>
                            <p>Beroperasi dengan tanggung jawab terhadap lingkungan</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className={styles.certifications}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>
                        Sertifikasi & <span className="gradient-text">Penghargaan</span>
                    </h2>

                    <div className={styles.certGrid}>
                        <div className={styles.certCard}>
                            <div className={styles.certBadge}>🏆</div>
                            <h4>ISO 9001:2015</h4>
                            <p>Sistem Manajemen Mutu</p>
                        </div>

                        <div className={styles.certCard}>
                            <div className={styles.certBadge}>🛡️</div>
                            <h4>Asuransi All-Risk</h4>
                            <p>Perlindungan Penuh</p>
                        </div>

                        <div className={styles.certCard}>
                            <div className={styles.certBadge}>✅</div>
                            <h4>Verified Partner</h4>
                            <p>Partner Resmi Pelindo</p>
                        </div>

                        <div className={styles.certCard}>
                            <div className={styles.certBadge}>⭐</div>
                            <h4>Best Service 2023</h4>
                            <p>Penghargaan Industri</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>
                            Siap Bekerja Sama <span className="gradient-text">Dengan Kami?</span>
                        </h2>
                        <p className={styles.ctaDesc}>
                            Bergabunglah dengan ratusan perusahaan yang telah mempercayai
                            Cahaya Cargo Express untuk kebutuhan logistik mereka
                        </p>

                        <div className={styles.ctaButtons}>
                            <a
                                href="https://wa.me/628132974097?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20layanan%20Cahaya%20Cargo"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="primary" size="lg">
                                    💬 Hubungi Kami
                                </Button>
                            </a>
                            <Link href="/#services">
                                <Button variant="outline" size="lg">
                                    Lihat Layanan
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
