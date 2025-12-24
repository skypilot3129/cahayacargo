'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navigation.module.css';
import { Button } from './ui';

export const Navigation: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navContainer}`}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/images/logo.png"
                        alt="Cahaya Cargo Express"
                        width={50}
                        height={50}
                        priority
                        quality={75}
                        className={styles.logoImage}
                    />
                    <span className={styles.logoText}>
                        Cahaya <span className="gradient-text">Cargo</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <ul className={styles.navLinks}>
                    <li>
                        <Link href="/#services">Layanan</Link>
                    </li>
                    <li>
                        <Link href="/about">Tentang</Link>
                    </li>
                    <li>
                        <Link href="/track">Lacak Kiriman</Link>
                    </li>
                    <li>
                        <Link href="https://wa.me/6283817523403" target="_blank" rel="noopener noreferrer">Hubungi</Link>
                    </li>
                </ul>

                {/* CTA Buttons */}
                <div className={styles.navActions}>
                    <Link href="/dashboard">
                        <Button variant="ghost" size="sm">
                            B2B Portal
                        </Button>
                    </Link>
                    <Link href="/track">
                        <Button variant="primary" size="sm">
                            🔍 Cek Tarif
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={styles.mobileMenuToggle}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <Link href="/#services" onClick={() => setMobileMenuOpen(false)}>
                        Layanan
                    </Link>
                    <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
                        Tentang
                    </Link>
                    <Link href="/track" onClick={() => setMobileMenuOpen(false)}>
                        Lacak Kiriman
                    </Link>
                    <Link href="https://wa.me/6283817523403" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                        Hubungi
                    </Link>
                    <div className={styles.mobileCTA}>
                        <Link href="/dashboard">
                            <Button variant="outline" size="md">
                                B2B Portal
                            </Button>
                        </Link>
                        <Link href="/track">
                            <Button variant="primary" size="md">
                                Cek Tarif
                            </Button>
                        </Link>
                    </div>
                    {/* Mobile Contact Info */}
                    <div className={styles.mobileContact}>
                        <a href="https://wa.me/6281357979159" className={styles.contactLink}>
                            📱 WhatsApp: 0813-5797-9159
                        </a>
                        <a href="https://wa.me/6283817523403" className={styles.contactLink}>
                            📱 WhatsApp: 0838-1752-3403
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};
