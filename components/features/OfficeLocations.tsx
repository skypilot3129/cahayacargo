'use client';

import React from 'react';
import styles from './OfficeLocations.module.css';

interface Office {
    city: string;
    address: string;
    phone: string;
    whatsapp: string;
    mapsUrl: string;
    icon: string;
    color: string;
}

const offices: Office[] = [
    {
        city: 'Bandung',
        address: 'Jl. Gandasari (PS Sentra Bisnis Warlob) G 1 Bandung',
        phone: '081-2254-777',
        whatsapp: '6281225477',
        mapsUrl: 'https://maps.google.com/?q=Jl.+Gandasari+PS+Sentra+Bisnis+Warlob+G+1+Bandung',
        icon: '🏢',
        color: 'bandung'
    },
    {
        city: 'Surabaya',
        address: 'Jl. Kalimas Baru No.62-B, RT.007/RW.01, Perak Utara, Kec. Pabean Cantikan, Surabaya, Jawa Timur 60165',
        phone: '081-357-979-159',
        whatsapp: '6281357979159',
        mapsUrl: 'https://maps.google.com/?q=Jl.+Kalimas+Baru+No.62-B+Surabaya',
        icon: '🏭',
        color: 'surabaya'
    },
    {
        city: 'Makassar',
        address: 'Jl. Irian no 245 B',
        phone: '0852-4220-9396',
        whatsapp: '6285242209396',
        mapsUrl: 'https://maps.google.com/?q=Jl.+Irian+no+245+B+Makassar',
        icon: '🏗️',
        color: 'makassar'
    }
];

export const OfficeLocations: React.FC = () => {
    return (
        <div className={styles.officesGrid}>
            {offices.map((office, index) => (
                <div
                    key={office.city}
                    className={`${styles.officeCard} ${styles[office.color]}`}
                    style={{ animationDelay: `${index * 0.15}s` }}
                >
                    <div className={styles.cardBackground}></div>

                    <div className={styles.cityBadge}>
                        <span className={styles.cityIcon}>{office.icon}</span>
                        <span className={styles.cityName}>{office.city}</span>
                    </div>

                    <div className={styles.officeContent}>
                        <div className={styles.addressSection}>
                            <div className={styles.addressIcon}>📍</div>
                            <p className={styles.address}>{office.address}</p>
                        </div>

                        <div className={styles.contactSection}>
                            <div className={styles.phoneNumber}>
                                <span className={styles.phoneIcon}>📞</span>
                                <a href={`tel:+62${office.phone.replace(/^0/, '').replace(/-/g, '')}`}>
                                    {office.phone}
                                </a>
                            </div>
                        </div>

                        <div className={styles.actionButtons}>
                            <a
                                href={office.mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.mapsButton}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                                Lihat di Maps
                            </a>

                            <a
                                href={`https://wa.me/${office.whatsapp}?text=Halo,%20saya%20ingin%20bertanya%20tentang%20kantor%20${office.city}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.whatsappButton}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
