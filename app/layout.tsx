import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ChatBot } from '@/components/features/ChatBot';
import { FloatingCTA } from '@/components/features/FloatingCTA';

export const metadata: Metadata = {
  title: 'Cahaya Cargo Express | Pengiriman Terpercaya Rute Sulawesi',
  description:
    'Solusi pengiriman kargo profesional dari Surabaya ke seluruh Sulawesi. Tracking real-time, harga transparan, pengiriman kendaraan, container (LCL/FCL), dan bulk cargo.',
  keywords:
    'cargo surabaya makassar, pengiriman sulawesi, kirim motor manado, container bitung, ekspedisi kendari',
  authors: [{ name: 'Cahaya Cargo Express' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0066FF',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Cahaya Cargo Express | Pengiriman Terpercaya Rute Sulawesi',
    description:
      'Solusi pengiriman kargo profesional dari Surabaya ke seluruh Sulawesi',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <ChatBot />
        <FloatingCTA />
      </body>
    </html>
  );
}

