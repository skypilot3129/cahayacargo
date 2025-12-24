import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { FloatingCTA } from '@/components/features/FloatingCTA'
import { ChatBot } from '@/components/features/ChatBot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cahaya Cargo Express - Pengiriman Kargo Terpercaya ke Sulawesi',
  description: 'Layanan pengiriman kargo maritim profesional ke seluruh Sulawesi. Harga kompetitif, tracking real-time, dan pelayanan 24/7. Dari Surabaya, Bandung, Jakarta ke Makassar, Manado, Palu, dan kota lainnya.',
  keywords: ['cargo', 'pengiriman', 'sulawesi', 'makassar', 'manado', 'palu', 'kargo maritim', 'logistik', 'freight'],
  authors: [{ name: 'Cahaya Cargo Express' }],
  openGraph: {
    title: 'Cahaya Cargo Express - Pengiriman Kargo Terpercaya ke Sulawesi',
    description: 'Layanan pengiriman kargo maritim profesional ke seluruh Sulawesi dengan harga kompetitif',
    type: 'website',
    locale: 'id_ID',
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
