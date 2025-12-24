import { getShipmentByTrackingNumber, type ShipmentStatus } from '@/data/mockShipments';

// Mock tracking service
export async function trackShipment(
    trackingNumber: string
): Promise<ShipmentStatus | null> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Return mock data
    return getShipmentByTrackingNumber(trackingNumber);
}

// Status label mapping
export const statusLabels: Record<string, string> = {
    processing: 'Diproses',
    'picked-up': 'Sudah Dipickup',
    'in-transit': 'Dalam Perjalanan',
    'arrived-port': 'Tiba di Pelabuhan',
    'on-vessel': 'Dalam Kapal',
    delivered: 'Terkirim',
};

// Status colors
export const statusColors: Record<string, string> = {
    processing: '#F59E0B',
    'picked-up': '#3B82F6',
    'in-transit': '#8B5CF6',
    'arrived-port': '#06B6D4',
    'on-vessel': '#0066FF',
    delivered: '#10B981',
};
