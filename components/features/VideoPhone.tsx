'use client';

import React from 'react';
import styles from './VideoPhone.module.css';

export const VideoPhone: React.FC = () => {
    return (
        <div className={styles.heroVideo}>
            <div className={styles.phoneMockup}>
                <div className={styles.phoneFrame}>
                    <div className={styles.phoneNotch}></div>
                    <div className={styles.phoneScreen}>
                        <iframe
                            className={styles.videoFrame}
                            src="https://www.youtube.com/embed/hoNHPUoEd_Y?loop=1&playlist=hoNHPUoEd_Y&modestbranding=1&rel=0"
                            title="Cahaya Cargo Express"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <div className={styles.videoOverlay}>
                            <div className={styles.youtubeBrand}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </div>

                            <div className={styles.videoInfo}>
                                <p className={styles.videoUsername}>@cahayacargoexpress</p>
                                <p className={styles.videoCaption}>
                                    Cargo operations in 🚢📦 #cahayacargo #shipping... more
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.phoneButton}></div>
                </div>
            </div>
        </div>
    );
};
