// Customer testimonials
export interface Testimonial {
    id: string;
    name: string;
    company: string;
    role: string;
    content: string;
    rating: number;
    image?: string;
    route: string;
}

export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Budi Santoso',
        company: 'PT Mebel Jaya',
        role: 'Direktur Operasional',
        content:
            'Cahaya Cargo Express sangat membantu bisnis kami. Pengiriman furniture dari Surabaya ke Makassar selalu tepat waktu dan barang sampai dengan aman. Sistem tracking real-time mereka luar biasa!',
        rating: 5,
        route: 'Surabaya - Makassar',
    },
    {
        id: '2',
        name: 'Siti Aminah',
        company: 'CV Elektronik Nusantara',
        role: 'Manager Logistik',
        content:
            'Sudah 2 tahun kami menggunakan jasa Cahaya Cargo untuk distribusi produk elektronik ke seluruh Sulawesi. Pelayanan profesional, harga kompetitif, dan tim yang responsif  24/7.',
        rating: 5,
        route: 'Surabaya - Bitung',
    },
    {
        id: '3',
        name: 'Ahmad Hidayat',
        company: 'Dealer Motor Manado',
        role: 'Owner',
        content:
            'Pengiriman motor dari Jawa ke Manado tidak pernah semudah ini. Proses booking online sangat praktis, dan tim lapangan sangat hati-hati dalam handling. Highly recommended!',
        rating: 5,
        route: 'Surabaya - Manado',
    },
    {
        id: '4',
        name: 'Dewi Lestari',
        company: 'Toko Material Kendari',
        role: 'Pemilik',
        content:
            'Harga transparan, tidak ada biaya tersembunyi. Cahaya Cargo solusi terbaik untuk pengiriman material bangunan kami. Dashboard B2B mereka memudahkan tracking semua shipment.',
        rating: 5,
        route: 'Surabaya - Kendari',
    },
];
