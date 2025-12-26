import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { FloatingCTA } from '@/components/features/FloatingCTA'
import { ChatBot } from '@/components/features/ChatBot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://cahayacargoexpress.com'),
  title: 'Cahaya Cargo Express - Pengiriman Kargo Terpercaya ke Sulawesi',
  description: 'Layanan pengiriman kargo maritim profesional ke seluruh Sulawesi. Harga kompetitif, tracking real-time, dan pelayanan 24/7. Dari Surabaya, Bandung, Jakarta ke Makassar, Manado, Palu, dan kota lainnya.',
  keywords: ['cargo', 'pengiriman', 'sulawesi', 'makassar', 'manado', 'palu', 'kargo maritim', 'logistik', 'freight'],
  authors: [{ name: 'Cahaya Cargo Express' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: { url: '/icon.png', sizes: '180x180', type: 'image/png' },
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Cahaya Cargo Express - Pengiriman Kargo Terpercaya ke Sulawesi',
    description: 'Layanan pengiriman kargo maritim profesional ke seluruh Sulawesi dengan harga kompetitif',
    url: 'https://cahayacargoexpress.com',
    siteName: 'Cahaya Cargo Express',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'Cahaya Cargo Express Logo',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Cahaya Cargo Express - Pengiriman Kargo Terpercaya ke Sulawesi',
    description: 'Layanan pengiriman kargo maritim profesional ke seluruh Sulawesi',
    images: ['/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/images/logo.png" as="image" />
        <link rel="preload" href="/images/hero-cargo-ship.png" as="image" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
        <ChatBot />
      </body>
    </html>
  )
}
