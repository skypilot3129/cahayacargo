import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerGrid}>
                    {/* Company Info */}
                    <div className={styles.footerSection}>
                        <h3 className={styles.footerTitle}>
                            <span className="gradient-text">Cahaya Cargo Express</span>
                        </h3>
                        <p className={styles.footerDescription}>
                            Solusi pengiriman terpercaya untuk rute Sulawesi. Aman, cepat, dan
                            profesional sejak 2010.
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="https://wa.me/6283817523403" target="_blank" rel="noopener noreferrer">
                                WhatsApp
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                Instagram
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                Facebook
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div className={styles.footerSection}>
                        <h4 className={styles.footerTitle}>Layanan</h4>
                        <ul className={styles.footerLinks}>
                            <li>
                                <Link href="/#services">Pengiriman Kargo</Link>
                            </li>
                            <li>
                                <Link href="/#services">Pengiriman Kendaraan</Link>
                            </li>
                            <li>
                                <Link href="/#services">Container (LCL/FCL)</Link>
                            </li>
                            <li>
                                <Link href="/#services">Bulk Cargo</Link>
                            </li>
                            <li>
                                <Link href="/dashboard">B2B Partnership</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Routes */}
                    <div className={styles.footerSection}>
                        <h4 className={styles.footerTitle}>Rute Utama</h4>
                        <ul className={styles.footerLinks}>
                            <li>
                                <Link href="/#routes">Surabaya - Makassar</Link>
                            </li>
                            <li>
                                <Link href="/#routes">Surabaya - Bitung</Link>
                            </li>
                            <li>
                                <Link href="/#routes">Surabaya - Manado</Link>
                            </li>
                            <li>
                                <Link href="/#routes">Surabaya - Kendari</Link>
                            </li>
                            <li>
                                <Link href="/#routes">Makassar - Bitung</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className={styles.footerSection}>
                        <h4 className={styles.footerTitle}>Kontak</h4>
                        <ul className={styles.footerLinks}>
                            <li>
                                <a href="tel:+6283817523403">📞 0838-1752-3403</a>
                            </li>
                            <li>📧 info@cahayacargo.com</li>
                            <li>📍 Tanjung Perak, Surabaya</li>
                            <li>
                                <Link href="/track">Lacak Kiriman</Link>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/6283817523403?text=Halo,%20saya%20ingin%20bertanya%20tentang%20layanan%20Cahaya%20Cargo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    💬 WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className={styles.footerBottom}>
                    <p>&copy; 2025 Cahaya Cargo Express. All rights reserved.</p>
                    <div className={styles.footerLegal}>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
