import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Card } from '@/components/ui';
import { InlineTrackingWidget } from '@/components/features/InlineTrackingWidget';
import { VideoPhone } from '@/components/features/VideoPhone';
import { TestimonialsCarousel } from '@/components/features/TestimonialsCarousel';
import { OfficeLocations } from '@/components/features/OfficeLocations';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      {/* Hero Section - Advanced Design with Full-Width Background */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="/images/hero-cargo-ship.png"
            alt="Cargo Ship Background"
            fill
            priority
            quality={85}
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center right',
            }}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdBLAh/9k="
          />
        </div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.waveOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <div className={styles.headlineContainer}>
              <h1 className={`${styles.heroTitle} animate-fade-in-up`}>
                PENGIRIMAN<br />
                <span className="gradient-text">TERPERCAYA</span> &<br />
                TERMURAH KE<br />
                SULAWESI
              </h1>
              <div className={styles.promoBadge}>
                <span className={styles.promoLabel}>PROMO AKHIR TAHUN</span>
                <span className={styles.promoPrice}>Rp 2.500/kg</span>
                <span className={styles.promoDiscount}>DISC 20%</span>
              </div>
            </div>
            <p className={styles.heroDescription}>
              Solusi kargo maritim profesional dengan tracking real-time, harga
              transparan, dan layanan 24/7. Dari Surabaya ke Makassar, Bitung,
              Manado, Kendari, dan Palu.
            </p>

            {/* Urgency Message */}
            <p className={styles.urgencyText}>
              ⚡ Konsultasi Gratis & Jemput Barang Sekarang!
            </p>

            {/* Dual WhatsApp CTAs */}
            <div className={styles.heroCTA}>
              <a
                href="https://wa.me/6281357979159?text=Halo,%20saya%20mau%20tanya%20tentang%20pengiriman%20cargo%20ke%20Sulawesi"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappButton}
              >
                <svg className={styles.whatsappIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <div className={styles.buttonContent}>
                  <span className={styles.buttonLabel}>Hubungi Sales 1</span>
                  <span className={styles.buttonNumber}>0813-5797-9159</span>
                </div>
              </a>

              <a
                href="https://wa.me/6283817523403?text=Halo,%20saya%20mau%20tanya%20tentang%20pengiriman%20cargo%20ke%20Sulawesi"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappButton}
              >
                <svg className={styles.whatsappIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <div className={styles.buttonContent}>
                  <span className={styles.buttonLabel}>Hubungi Sales 2</span>
                  <span className={styles.buttonNumber}>0838-1752-3403</span>
                </div>
              </a>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <div className={styles.statIcon}>⏳</div>
                <div className={styles.statContent}>
                  <div className={styles.statNumber}>15+</div>
                  <div className={styles.statLabel}>Tahun Berpengalaman</div>
                </div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statIcon}>📦</div>
                <div className={styles.statContent}>
                  <div className={styles.statNumber}>50K+</div>
                  <div className={styles.statLabel}>Pengiriman Sukses</div>
                </div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statIcon}>👍</div>
                <div className={styles.statContent}>
                  <div className={styles.statNumber}>98%</div>
                  <div className={styles.statLabel}>Kepuasan Pelanggan</div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Phone Mockup */}
          <VideoPhone />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.services}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            Layanan <span className="gradient-text">Kami</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Solusi logistik lengkap untuk semua kebutuhan pengiriman Anda
          </p>
          <div className={styles.servicesGrid}>
            <Card className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🚛</div>
              <h3>Layanan Pengiriman Trucking</h3>
              <p>
                Pengiriman kargo dengan armada truk profesional untuk volume besar,
                aman dan tepat waktu ke seluruh Sulawesi.
              </p>
              <a
                href="https://wa.me/6283817523403?text=Halo,%20saya%20ingin%20tanya%20tentang%20Layanan%20Pengiriman%20Trucking"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.serviceWaButton}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Tanya via WhatsApp
              </a>
            </Card>

            <Card className={styles.serviceCard}>
              <div className={styles.serviceIcon}>📦</div>
              <h3>Layanan Pengiriman Cargo Retail & Project</h3>
              <p>
                Solusi pengiriman retail dan project cargo untuk kebutuhan bisnis
                dengan handling khusus dan dokumentasi lengkap.
              </p>
              <a
                href="https://wa.me/6283817523403?text=Halo,%20saya%20ingin%20tanya%20tentang%20Layanan%20Cargo%20Retail%20%26%20Project"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.serviceWaButton}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Tanya via WhatsApp
              </a>
            </Card>

            <Card className={styles.serviceCard}>
              <div className={styles.serviceIcon}>📋</div>
              <h3>Jasa Packing</h3>
              <p>
                Layanan packing profesional dengan material berk qualitas untuk
                melindungi barang Anda selama pengiriman.
              </p>
              <a
                href="https://wa.me/6283817523403?text=Halo,%20saya%20ingin%20tanya%20tentang%20Jasa%20Packing"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.serviceWaButton}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Tanya via WhatsApp
              </a>
            </Card>

            <Card className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🏠</div>
              <h3>Jasa Pindahan</h3>
              <p>
                Layanan pindahan rumah atau kantor yang aman dan terorganisir,
                termasuk packing, loading, dan unpacking.
              </p>
              <a
                href="https://wa.me/6283817523403?text=Halo,%20saya%20ingin%20tanya%20tentang%20Jasa%20Pindahan"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.serviceWaButton}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Tanya via WhatsApp
              </a>
            </Card>

            <Card className={styles.serviceCard}>
              <div className={styles.serviceIcon}>⚡</div>
              <h3>Express Logistic</h3>
              <p>
                Pengiriman express untuk kebutuhan urgent dengan prioritas tinggi,
                delivery cepat dan reliable.
              </p>
              <a
                href="https://wa.me/6283817523403?text=Halo,%20saya%20ingin%20tanya%20tentang%20Express%20Logistic"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.serviceWaButton}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Tanya via WhatsApp
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Coverage Areas Section */}
      <section id="coverage" className={styles.coverage}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            Jangkauan <span className="gradient-text">Layanan</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Melayani pengiriman ke seluruh Sulawesi dengan jangkauan luas
          </p>

          <div className={styles.coverageGrid}>
            {/* From Section */}
            <div className={styles.coverageCard}>
              <div className={styles.coverageIcon}>📤</div>
              <h3 className={styles.coverageTitle}>Dari</h3>
              <div className={styles.cityList}>
                <div className={styles.cityItem}>
                  <span className={styles.cityDot}></span>
                  <span>Bandung</span>
                </div>
                <div className={styles.cityItem}>
                  <span className={styles.cityDot}></span>
                  <span>Surabaya</span>
                </div>
                <div className={styles.cityItem}>
                  <span className={styles.cityDot}></span>
                  <span>Jakarta</span>
                </div>
                <div className={styles.cityItem}>
                  <span className={styles.cityDot}></span>
                  <span>Semarang</span>
                </div>
              </div>
            </div>

            {/* Arrow Connector */}
            <div className={styles.coverageArrow}>
              <span className={styles.arrowIcon}>✈️</span>
              <div className={styles.arrowLine}></div>
            </div>

            {/* To Section */}
            <div className={styles.coverageCard}>
              <div className={styles.coverageIcon}>📥</div>
              <h3 className={styles.coverageTitle}>Ke Seluruh Sulawesi</h3>
              <div className={styles.cityList}>
                <div className={styles.cityItem}>
                  <span className={styles.cityDot} style={{ background: 'var(--color-primary)' }}></span>
                  <span>Makassar</span>
                </div>
                <div className={styles.cityItem}>
                  <span className={styles.cityDot} style={{ background: 'var(--color-primary)' }}></span>
                  <span>Manado</span>
                </div>
                <div className={styles.cityItem}>
                  <span className={styles.cityDot} style={{ background: 'var(--color-primary)' }}></span>
                  <span>Palu</span>
                </div>
                <div className={styles.cityItem}>
                  <span className={styles.cityDot} style={{ background: 'var(--color-primary)' }}></span>
                  <span>Kendari</span>
                </div>
                <div className={styles.cityItem}>
                  <span className={styles.cityDot} style={{ background: 'var(--color-primary)' }}></span>
                  <span>Bitung</span>
                </div>
                <div className={styles.cityItem}>
                  <span className={styles.cityDot} style={{ background: 'var(--color-primary)' }}></span>
                  <span>Dan kota lainnya</span>
                </div>
              </div>
            </div>
          </div>

          {/* Info Banner */}
          <div className={styles.coverageInfo}>
            <div className={styles.infoIcon}>💬</div>
            <div className={styles.infoContent}>
              <p className={styles.infoText}>
                Untuk informasi detail rute, jadwal keberangkatan, dan harga terkini
              </p>
              <a
                href="https://wa.me/6283817523403?text=Halo,%20saya%20ingin%20tanya%20tentang%20rute%20dan%20harga%20pengiriman"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.infoButton}
              >
                Hubungi Kami via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className={styles.whyChooseUs}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            Mengapa Memilih <span className="gradient-text">Kami</span>?
          </h2>
          <p className={styles.sectionSubtitle}>
            Solusi pengiriman terpercaya dengan standar profesional
          </p>

          <div className={styles.advantagesGrid}>
            {/* Advantage 1 */}
            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>
                <span className={styles.iconEmoji}>🏆</span>
              </div>
              <h3 className={styles.advantageTitle}>Pengalaman 10+ Tahun</h3>
              <p className={styles.advantageDesc}>
                Berpengalaman melayani ribuan pengiriman ke seluruh Sulawesi dengan track record sempurna
              </p>
            </div>

            {/* Advantage 2 */}
            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>
                <span className={styles.iconEmoji}>🚛</span>
              </div>
              <h3 className={styles.advantageTitle}>Armada Modern & Terawat</h3>
              <p className={styles.advantageDesc}>
                Kendaraan dan kapal dalam kondisi prima, dilengkapi GPS tracking dan monitoring 24/7
              </p>
            </div>

            {/* Advantage 3 */}
            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>
                <span className={styles.iconEmoji}>🛡️</span>
              </div>
              <h3 className={styles.advantageTitle}>Asuransi All-Risk</h3>
              <p className={styles.advantageDesc}>
                Barang Anda terlindungi dengan asuransi komprehensif untuk keamanan maksimal
              </p>
            </div>

            {/* Advantage 4 */}
            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>
                <span className={styles.iconEmoji}>👥</span>
              </div>
              <h3 className={styles.advantageTitle}>Tim Profesional 24/7</h3>
              <p className={styles.advantageDesc}>
                Customer service responsif siap membantu Anda kapanpun via WhatsApp dan telepon
              </p>
            </div>

            {/* Advantage 5 */}
            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>
                <span className={styles.iconEmoji}>💰</span>
              </div>
              <h3 className={styles.advantageTitle}>Harga Kompetitif</h3>
              <p className={styles.advantageDesc}>
                Tarif transparan tanpa biaya tersembunyi, dengan berbagai promo menarik setiap bulan
              </p>
            </div>

            {/* Advantage 6 */}
            <div className={styles.advantageCard}>
              <div className={styles.advantageIcon}>
                <span className={styles.iconEmoji}>📦</span>
              </div>
              <h3 className={styles.advantageTitle}>Layanan Door-to-Door</h3>
              <p className={styles.advantageDesc}>
                Gratis jemput barang dan antar ke alamat tujuan untuk kemudahan maksimal
              </p>
            </div>
          </div>

          {/* Trust Stats */}
          <div className={styles.trustStats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>10K+</div>
              <div className={styles.statLabel}>Pengiriman Sukses</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Client Aktif</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>4.9/5</div>
              <div className={styles.statLabel}>Rating Pelanggan</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>99%</div>
              <div className={styles.statLabel}>On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className={styles.howItWorks}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            Cara Kerja <span className="gradient-text">Kami</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Proses pengiriman yang mudah, cepat, dan transparan
          </p>

          <div className={styles.stepsTimeline}>
            {/* Step 1 */}
            <div className={styles.stepItem}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Konsultasi & Quote Gratis</h3>
                <p className={styles.stepDesc}>
                  Hubungi kami via WhatsApp untuk konsultasi dan dapatkan penawaran harga terbaik sesuai kebutuhan Anda
                </p>
              </div>
              <div className={styles.stepIcon}>💬</div>
            </div>

            {/* Connector */}
            <div className={styles.stepConnector}></div>

            {/* Step 2 */}
            <div className={styles.stepItem}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Penjemputan Barang</h3>
                <p className={styles.stepDesc}>
                  Tim kami akan datang ke lokasi Anda untuk menjemput barang sesuai jadwal yang telah disepakati
                </p>
              </div>
              <div className={styles.stepIcon}>🚛</div>
            </div>

            {/* Connector */}
            <div className={styles.stepConnector}></div>

            {/* Step 3 */}
            <div className={styles.stepItem}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Packing & Dokumentasi</h3>
                <p className={styles.stepDesc}>
                  Barang dikemas dengan standar profesional dan didokumentasikan lengkap untuk keamanan maksimal
                </p>
              </div>
              <div className={styles.stepIcon}>📦</div>
            </div>

            {/* Connector */}
            <div className={styles.stepConnector}></div>

            {/* Step 4 */}
            <div className={styles.stepItem}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Pengiriman Aman</h3>
                <p className={styles.stepDesc}>
                  Barang dikirim dengan armada terpercaya dilengkapi asuransi all-risk untuk perlindungan penuh
                </p>
              </div>
              <div className={styles.stepIcon}>⛴️</div>
            </div>

            {/* Connector */}
            <div className={styles.stepConnector}></div>

            {/* Step 5 */}
            <div className={styles.stepItem}>
              <div className={styles.stepNumber}>5</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Update Status Real-time</h3>
                <p className={styles.stepDesc}>
                  Dapatkan informasi terkini tentang posisi dan status pengiriman barang Anda secara berkala
                </p>
              </div>
              <div className={styles.stepIcon}>📱</div>
            </div>

            {/* Connector */}
            <div className={styles.stepConnector}></div>

            {/* Step 6 */}
            <div className={styles.stepItem}>
              <div className={styles.stepNumber}>6</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Delivered!</h3>
                <p className={styles.stepDesc}>
                  Barang sampai dengan aman di tujuan, lengkap dengan bukti penerimaan (POD) untuk dokumentasi Anda
                </p>
              </div>
              <div className={styles.stepIcon}>✅</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className={styles.howItWorksCTA}>
            <a
              href="https://wa.me/6283817523403?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20pengiriman"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaWhatsapp}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Mulai Konsultasi Gratis
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={styles.testimonials}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            Testimoni <span className="gradient-text">Pelanggan</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Dipercaya oleh ratusan perusahaan di seluruh Indonesia
          </p>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Office Locations Section */}
      <section id="locations" className={styles.locations}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            Kantor <span className="gradient-text">Kami</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Melayani pengiriman ke seluruh Sulawesi dari 3 kota besar
          </p>
          <OfficeLocations />
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container text-center">
          <h2 className={styles.ctaTitle}>
            Siap Kirim Kargo Anda?
          </h2>
          <p className={styles.ctaDescription}>
            Dapatkan penawaran harga terbaik dan konsultasi gratis dari tim
            expert kami
          </p>
          <div className={styles.ctaButtons}>
            <a
              href="https://wa.me/6283817523403?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20pengiriman%20kargo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="lg">
                💬 WhatsApp Kami
              </Button>
            </a>
            <Link href="/#services">
              <Button variant="primary" size="lg">
                Lihat Layanan
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
