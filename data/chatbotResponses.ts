// Chatbot response patterns and templates
export interface ChatResponse {
    pattern: RegExp;
    responses: string[];
    requiresData?: boolean;
}

// Common queries and responses
export const chatbotResponses: ChatResponse[] = [
    // Greetings
    {
        pattern: /(halo|hai|hello|hi|selamat)/i,
        responses: [
            'Halo! Selamat datang di Cahaya Cargo Express. Ada yang bisa saya bantu?',
            'Hai! Saya Cahaya-Bot, asisten virtual Cahaya Cargo. Bagaimana saya bisa membantu Anda?',
        ],
    },

    // Pricing Queries
    {
        pattern: /(harga|tarif|biaya|ongkir|ongkos)/i,
        responses: [
            'Untuk cek harga pengiriman, saya perlukan informasi:\n\n1️⃣ Rute (contoh: Surabaya - Makassar)\n2️⃣ Jenis barang\n3️⃣ Berat/volume\n\nAtau gunakan Kalkulator Cargo kami untuk estimasi otomatis: /track',
            'Tarif kami mulai dari:\n\n📦 Surabaya-Makassar: Rp 250.000/CBM\n📦 Surabaya-Bitung: Rp 350.000/CBM\n📦 Surabaya-Manado: Rp 400.000/CBM\n\nHarga sudah termasuk handling dan asuransi dasar.',
        ],
    },

    // Schedule Queries
    {
        pattern: /(jadwal|schedule|kapal|berangkat|sailing)/i,
        responses: [
            'Jadwal Keberangkatan Reguler:\n\n🚢 Surabaya-Makassar: Senin, Rabu, Jumat\n🚢 Surabaya-Bitung: Selasa, Kamis, Sabtu\n🚢 Surabaya-Manado: Senin, Kamis\n\nWaktu transit 3-5 hari tergantung rute.',
        ],
    },

    // Tracking
    {
        pattern: /(lacak|track|cek|resi|status)/i,
        responses: [
            'Untuk melacak kiriman, masukkan nomor resi Anda di halaman tracking: /track\n\nContoh nomor resi: CCE2025001',
        ],
    },

    // Vehicle Shipping
    {
        pattern: /(motor|mobil|kendaraan|vehicle)/i,
        responses: [
            'Kami melayani pengiriman kendaraan (motor & mobil) dengan layanan:\n\n✅ Loading ahli\n✅ Asuransi all-risk\n✅ Door-to-door available\n\nHarga motor mulai Rp 800.000 (Surabaya-Makassar).\n\nHub: 0812-3456-7890 (WA)',
        ],
    },

    // Container/FCL/LCL
    {
        pattern: /(container|fcl|lcl|kontainer)/i,
        responses: [
            'Layanan Container:\n\n📦 LCL (Less Container Load) - untuk kargo kecil\n📦 FCL (Full Container Load) - sewa kontainer utuh\n\n20ft Container: mulai Rp 8.000.000\n40ft Container: mulai Rp 14.000.000\n\nSudah termasuk trucking dan handling.',
        ],
    },

    // Contact
    {
        pattern: /(kontak|hubungi|telepon|whatsapp|email)/i,
        responses: [
            'Hubungi kami:\n\n📱 WhatsApp: 0812-3456-7890\n📧 Email: info@cahayacargo.com\n📍 Kantor: Terminal Tanjung Perak, Surabaya\n\n⏰ Customer Service 24/7',
        ],
    },

    // Transit Time
    {
        pattern: /(lama|durasi|berapa hari|estimasi|sampai)/i,
        responses: [
            'Estimasi waktu transit:\n\n⏱ Surabaya-Makassar: 3-4 hari\n⏱ Surabaya-Bitung: 4-5 hari\n⏱ Surabaya-Manado: 5-6 hari\n⏱ Surabaya-Kendari: 4-5 hari\n\nSudah termasuk loading & unloading.',
        ],
    },

    // B2B/Partnership
    {
        pattern: /(b2b|partnership|kerjasama|partner|kontrak)/i,
        responses: [
            'Program B2B Partnership:\n\n💼 Harga kontrak khusus\n💼 Dashboard analytics\n💼 Dedicated account manager\n💼 Credit term tersedia\n\nDaftar via /dashboard atau hubungi tim sales kami.',
        ],
    },

    // Default Fallback
    {
        pattern: /.*/,
        responses: [
            'Maaf, saya kurang memahami pertanyaan Anda. Coba tanyakan tentang:\n\n• Harga & tarif\n• Jadwal kapal\n• Tracking kiriman\n• Pengiriman kendaraan\n• Layanan container\n\nAtau langsung chat via WA: 0812-3456-7890',
        ],
    },
];

// Get response for user message
export function getChatbotResponse(userMessage: string): string {
    for (const item of chatbotResponses) {
        if (item.pattern.test(userMessage)) {
            const responses = item.responses;
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }
    return 'Maaf, saya kurang paham. Ada yang bisa saya bantu?';
}

// Quick action suggestions
export const quickActions = [
    { label: '💰 Cek Harga', query: 'Berapa harga kirim ke Makassar?' },
    { label: '📅 Jadwal Kapal', query: 'Jadwal kapal minggu ini' },
    { label: '🚢 Lacak Kiriman', query: 'Lacak kiriman saya' },
    { label: '🏍️ Kirim Motor', query: 'Biaya kirim motor' },
];
