// Port data for Sulawesi routing
export interface Port {
    id: string;
    name: string;
    city: string;
    coordinates: { x: number; y: number };
    capacity: number;
    services: string[];
    contact: {
        name: string;
        phone: string;
        email: string;
    };
    averageTransitDays: Record<string, number>;
}

export const ports: Port[] = [
    {
        id: 'bitung',
        name: 'Pelabuhan Bitung',
        city: 'Bitung',
        coordinates: { x: 75, y: 15 },
        capacity: 5000,
        services: ['Container', 'Bulk', 'Vehicles', 'General Cargo'],
        contact: {
            name: 'Agent Bitung',
            phone: '+62 438-12345',
            email: 'bitung@cahayacargo.com',
        },
        averageTransitDays: {
            surabaya: 4,
            makassar: 2,
            manado: 1,
        },
    },
    {
        id: 'makassar',
        name: 'Pelabuhan Makassar',
        city: 'Makassar',
        coordinates: { x: 40, y: 60 },
        capacity: 8000,
        services: ['Container', 'Bulk', 'Vehicles', 'General Cargo', 'Ro-Ro'],
        contact: {
            name: 'Agent Makassar',
            phone: '+62 411-54321',
            email: 'makassar@cahayacargo.com',
        },
        averageTransitDays: {
            surabaya: 3,
            bitung: 2,
            kendari: 1,
        },
    },
    {
        id: 'manado',
        name: 'Pelabuhan Manado',
        city: 'Manado',
        coordinates: { x: 80, y: 10 },
        capacity: 4000,
        services: ['Container', 'Vehicles', 'General Cargo'],
        contact: {
            name: 'Agent Manado',
            phone: '+62 431-98765',
            email: 'manado@cahayacargo.com',
        },
        averageTransitDays: {
            surabaya: 5,
            makassar: 3,
            bitung: 1,
        },
    },
    {
        id: 'kendari',
        name: 'Pelabuhan Kendari',
        city: 'Kendari',
        coordinates: { x: 55, y: 70 },
        capacity: 3500,
        services: ['Container', 'Bulk', 'General Cargo'],
        contact: {
            name: 'Agent Kendari',
            phone: '+62 401-11223',
            email: 'kendari@cahayacargo.com',
        },
        averageTransitDays: {
            surabaya: 4,
            makassar: 1,
            bitung: 3,
        },
    },
    {
        id: 'palu',
        name: 'Pelabuhan Pantoloan (Palu)',
        city: 'Palu',
        coordinates: { x: 35, y: 45 },
        capacity: 3000,
        services: ['Container', 'General Cargo'],
        contact: {
            name: 'Agent Palu',
            phone: '+62 451-33445',
            email: 'palu@cahayacargo.com',
        },
        averageTransitDays: {
            surabaya: 4,
            makassar: 2,
            bitung: 3,
        },
    },
];
