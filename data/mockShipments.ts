// Mock tracking data for demonstration
export interface ShipmentStatus {
    id: string;
    trackingNumber: string;
    status: 'processing' | 'picked-up' | 'in-transit' | 'arrived-port' | 'on-vessel' | 'delivered';
    origin: string;
    destination: string;
    currentLocation: string;
    estimatedDelivery: string;
    items: {
        description: string;
        quantity: number;
        weight: number;
    }[];
    timeline: {
        status: string;
        location: string;
        timestamp: string;
        description: string;
    }[];
    documents?: {
        invoice?: string;
        shippingLabel?: string;
    };
}

export const mockShipments: Record<string, ShipmentStatus> = {
    'CCE2025001': {
        id: '1',
        trackingNumber: 'CCE2025001',
        status: 'on-vessel',
        origin: 'Surabaya',
        destination: 'Makassar',
        currentLocation: 'Kapal KM Cahaya Nusantara - En Route',
        estimatedDelivery: '2025-12-28',
        items: [
            {
                description: 'Furniture (Sofa Set)',
                quantity: 3,
                weight: 150,
            },
        ],
        timeline: [
            {
                status: 'processing',
                location: 'Warehouse Surabaya',
                timestamp: '2025-12-20 08:00',
                description: 'Dokumen diterima dan diproses',
            },
            {
                status: 'picked-up',
                location: 'Surabaya',
                timestamp: '2025-12-21 10:30',
                description: 'Barang telah dipickup dari alamat pengirim',
            },
            {
                status: 'in-transit',
                location: 'Terminal Tanjung Perak',
                timestamp: '2025-12-22 14:00',
                description: 'Barang tiba di terminal',
            },
            {
                status: 'arrived-port',
                location: 'Pelabuhan Tanjung Perak',
                timestamp: '2025-12-23 09:00',
                description: 'Loading ke kapal',
            },
            {
                status: 'on-vessel',
                location: 'KM Cahaya Nusantara',
                timestamp: '2025-12-23 16:00',
                description: 'Kapal berlayar menuju Makassar',
            },
        ],
        documents: {
            invoice: '#INV-2025-001',
            shippingLabel: '#SL-2025-001',
        },
    },
    'CCE2025002': {
        id: '2',
        trackingNumber: 'CCE2025002',
        status: 'delivered',
        origin: 'Surabaya',
        destination: 'Manado',
        currentLocation: 'Delivered',
        estimatedDelivery: '2025-12-22',
        items: [
            {
                description: 'Motor Honda Vario',
                quantity: 2,
                weight: 220,
            },
        ],
        timeline: [
            {
                status: 'processing',
                location: 'Warehouse Surabaya',
                timestamp: '2025-12-15 09:00',
                description: 'Dokumen diterima dan diproses',
            },
            {
                status: 'picked-up',
                location: 'Surabaya',
                timestamp: '2025-12-16 11:00',
                description: 'Kendaraan dipickup',
            },
            {
                status: 'in-transit',
                location: 'Terminal Tanjung Perak',
                timestamp: '2025-12-17 08:00',
                description: 'Barang tiba di terminal',
            },
            {
                status: 'on-vessel',
                location: 'KM Sulawesi Express',
                timestamp: '2025-12-18 10:00',
                description: 'Kapal berlayar menuju Manado',
            },
            {
                status: 'arrived-port',
                location: 'Pelabuhan Manado',
                timestamp: '2025-12-22 14:00',
                description: 'Tiba di pelabuhan tujuan',
            },
            {
                status: 'delivered',
                location: 'Manado',
                timestamp: '2025-12-22 17:30',
                description: 'Barang telah diterima penerima',
            },
        ],
    },
    'CCE2025003': {
        id: '3',
        trackingNumber: 'CCE2025003',
        status: 'in-transit',
        origin: 'Makassar',
        destination: 'Bitung',
        currentLocation: 'Pelabuhan Makassar',
        estimatedDelivery: '2025-12-25',
        items: [
            {
                description: 'Electronics (TV LCD 50")',
                quantity: 5,
                weight: 125,
            },
        ],
        timeline: [
            {
                status: 'processing',
                location: 'Makassar',
                timestamp: '2025-12-22 10:00',
                description: 'Dokumen diterima',
            },
            {
                status: 'in-transit',
                location: 'Warehouse Makassar',
                timestamp: '2025-12-23 08:00',
                description: 'Barang sedang diproses di warehouse',
            },
        ],
    },
};

// Function to get shipment by tracking number
export function getShipmentByTrackingNumber(
    trackingNumber: string
): ShipmentStatus | null {
    return mockShipments[trackingNumber] || null;
}
