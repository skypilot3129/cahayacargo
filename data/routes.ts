// Shipping routes and pricing data
export interface Route {
    id: string;
    origin: string;
    destination: string;
    distance: number; // in nautical miles
    averageDays: number;
    schedules: string[]; // Day of week
    pricing: {
        perCBM: number; // Price per cubic meter
        perKG: number; // Price per kilogram
        minimum: number; // Minimum charge
    };
    services: ('LCL' | 'FCL' | 'Vehicle' | 'Bulk')[];
}

export const routes: Route[] = [
    {
        id: 'srb-mksr',
        origin: 'Surabaya',
        destination: 'Makassar',
        distance: 450,
        averageDays: 3,
        schedules: ['Senin', 'Rabu', 'Jumat'],
        pricing: {
            perCBM: 250000,
            perKG: 2500,
            minimum: 500000,
        },
        services: ['LCL', 'FCL', 'Vehicle', 'Bulk'],
    },
    {
        id: 'srb-btg',
        origin: 'Surabaya',
        destination: 'Bitung',
        distance: 780,
        averageDays: 4,
        schedules: ['Selasa', 'Kamis', 'Sabtu'],
        pricing: {
            perCBM: 350000,
            perKG: 3500,
            minimum: 750000,
        },
        services: ['LCL', 'FCL', 'Vehicle'],
    },
    {
        id: 'srb-mnd',
        origin: 'Surabaya',
        destination: 'Manado',
        distance: 850,
        averageDays: 5,
        schedules: ['Senin', 'Kamis'],
        pricing: {
            perCBM: 400000,
            perKG: 4000,
            minimum: 850000,
        },
        services: ['LCL', 'FCL', 'Vehicle'],
    },
    {
        id: 'srb-knd',
        origin: 'Surabaya',
        destination: 'Kendari',
        distance: 520,
        averageDays: 4,
        schedules: ['Selasa', 'Jumat'],
        pricing: {
            perCBM: 300000,
            perKG: 3000,
            minimum: 650000,
        },
        services: ['LCL', 'FCL', 'Bulk'],
    },
    {
        id: 'srb-plu',
        origin: 'Surabaya',
        destination: 'Palu',
        distance: 600,
        averageDays: 4,
        schedules: ['Rabu', 'Sabtu'],
        pricing: {
            perCBM: 320000,
            perKG: 3200,
            minimum: 700000,
        },
        services: ['LCL', 'FCL'],
    },
    {
        id: 'mksr-btg',
        origin: 'Makassar',
        destination: 'Bitung',
        distance: 380,
        averageDays: 2,
        schedules: ['Senin', 'Rabu', 'Jumat', 'Minggu'],
        pricing: {
            perCBM: 200000,
            perKG: 2000,
            minimum: 450000,
        },
        services: ['LCL', 'FCL', 'Vehicle'],
    },
];

// Helper function to find route
export function findRoute(origin: string, destination: string): Route | undefined {
    return routes.find(
        (r) =>
            r.origin.toLowerCase() === origin.toLowerCase() &&
            r.destination.toLowerCase() === destination.toLowerCase()
    );
}

// Helper function to calculate price
export function calculateShippingPrice(
    route: Route,
    volumeCBM: number,
    weightKG: number
): number {
    const cbmPrice = volumeCBM * route.pricing.perCBM;
    const weightPrice = weightKG * route.pricing.perKG;
    const calculatedPrice = Math.max(cbmPrice, weightPrice);
    return Math.max(calculatedPrice, route.pricing.minimum);
}
