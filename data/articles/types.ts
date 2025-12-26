export interface Article {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    category: 'panduan-pengiriman' | 'tips-cargo' | 'info-rute' | 'berita' | 'studi-kasus';
    tags: string[];
    author: {
        name: string;
        role: string;
        avatar: string;
    };
    publishedAt: string;
    updatedAt?: string;
    featuredImage: string;
    readingTime: number;
    seo: {
        metaTitle: string;
        metaDescription: string;
        keywords: string[];
    };
    relatedArticles?: string[];
}

export const categoryNames: Record<Article['category'], string> = {
    'panduan-pengiriman': 'Panduan Pengiriman',
    'tips-cargo': 'Tips Cargo',
    'info-rute': 'Info Rute',
    'berita': 'Berita & Update',
    'studi-kasus': 'Studi Kasus',
};

export const categoryDescriptions: Record<Article['category'], string> = {
    'panduan-pengiriman': 'Panduan lengkap tentang pengiriman cargo dan ekspedisi',
    'tips-cargo': 'Tips dan trik untuk pengiriman barang yang efisien',
    'info-rute': 'Informasi rute, jadwal, dan estimasi pengiriman',
    'berita': 'Berita terbaru dan update dari Cahaya Cargo Express',
    'studi-kasus': 'Studi kasus dan kisah sukses pengiriman kami',
};
