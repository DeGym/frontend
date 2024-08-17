import { NextApiRequest, NextApiResponse } from 'next';

interface Gym {
    id: string;
    name: string;
    address: string;
    rating: number;
    image: string;
    lat: number;
    lng: number;
}

const gyms: Gym[] = [
    { id: '1', name: 'Fitness First', address: '123 Main St', rating: 4.5, image: '/images/gym1.jpg', lat: 40.7128, lng: -74.0060 },
    { id: '2', name: 'Gold\'s Gym', address: '456 Elm St', rating: 4.2, image: '/images/gym2.jpg', lat: 40.7282, lng: -73.9942 },
    { id: '3', name: 'Planet Fitness', address: '789 Oak Ave', rating: 4.0, image: '/images/gym3.jpg', lat: 40.7300, lng: -74.0100 },
    { id: '4', name: 'Equinox', address: '101 Pine Blvd', rating: 4.8, image: '/images/gym4.jpg', lat: 40.7200, lng: -73.9900 },
    // Add more dummy data as needed
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { q, lat, lng, radius } = req.query;

    let filteredGyms = gyms;

    // Filter by search query
    if (q) {
        const searchQuery = (q as string).toLowerCase();
        filteredGyms = filteredGyms.filter(gym =>
            gym.name.toLowerCase().includes(searchQuery) ||
            gym.address.toLowerCase().includes(searchQuery)
        );
    }

    // Filter by location and radius
    if (lat && lng && radius) {
        const userLat = Number(lat);
        const userLng = Number(lng);
        const searchRadius = Number(radius);

        filteredGyms = filteredGyms.filter(gym => {
            const distance = calculateDistance(userLat, userLng, gym.lat, gym.lng);
            return distance <= searchRadius;
        });
    }

    res.status(200).json(filteredGyms);
}

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
}

function deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
}