import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import SearchBar from '@/components/search/SearchBar';
import GymList from '@/components/search/GymList';
import FilterModal from '@/components/search/FilterModal';
import MobileFilterModal from '@/components/search/MobileFilterModal';
import styles from '@/styles/pages/Search.module.css';

// Import the dynamic map component without SSR
const Map = dynamic(() => import('@/components/search/Map'), { ssr: false });

interface Gym {
    id: string;
    name: string;
    address: string;
    rating: number;
    image: string;
    lat: number;
    lng: number;
    tier: number;
    activities: string[];
    amenities: string[];
}

interface Filters {
    distance: number;
    tier: number | null;
    activities: string[];
    amenities: string[];
}

const SearchPage: React.FC = () => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [gyms, setGyms] = useState<Gym[]>([]);
    const [selectedGym, setSelectedGym] = useState<Gym | null>(null);
    const [filters, setFilters] = useState<Filters>({
        distance: 5,
        tier: null,
        activities: [],
        amenities: []
    });
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [isMobileFilterModalOpen, setIsMobileFilterModalOpen] = useState(false);
    const [currentFilterType, setCurrentFilterType] = useState<'tier' | 'activities' | 'amenities'>('tier');
    const [userLocation, setUserLocation] = useState<[number, number] | null>(null);

    useEffect(() => {
        // Fetch user's location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation([position.coords.latitude, position.coords.longitude]);
                },
                (error) => {
                    console.error("Error getting user location:", error);
                }
            );
        }

        // Fetch gyms based on search query and filters
        const fetchGyms = async () => {
            // Simulating API call
            const response = await fetch('/api/gyms');
            const data = await response.json();
            setGyms(data);
        };

        fetchGyms();
    }, [searchQuery, filters]);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        router.push(`/search?q=${query}`, undefined, { shallow: true });
    };

    const handleFilterChange = (filterName: keyof Filters, value: any) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterName]: value
        }));
    };

    const handleGymSelect = (gym: Gym) => {
        setSelectedGym(gym);
    };

    const openFilterModal = (filterType: 'tier' | 'activities' | 'amenities') => {
        setCurrentFilterType(filterType);
        setIsFilterModalOpen(true);
    };

    return (
        <div className={styles.searchPage}>
            <div className={styles.sidebar}>
                <SearchBar onSearch={handleSearch} initialQuery={searchQuery} />
                <div className={styles.filterButtons}>
                    <button onClick={() => openFilterModal('tier')}>Tier</button>
                    <button onClick={() => openFilterModal('activities')}>Activities</button>
                    <button onClick={() => openFilterModal('amenities')}>Amenities</button>
                    <button onClick={() => setIsMobileFilterModalOpen(true)} className={styles.mobileFilterButton}>
                        Filters
                    </button>
                </div>
                <GymList gyms={gyms} onGymSelect={handleGymSelect} />
            </div>
            <div className={styles.mapContainer}>
                <Map gyms={gyms} selectedGym={selectedGym} searchRadius={filters.distance} userLocation={userLocation} />
            </div>

            <FilterModal
                isOpen={isFilterModalOpen}
                onClose={() => setIsFilterModalOpen(false)}
                title={currentFilterType === 'tier' ? 'Tier' : currentFilterType === 'activities' ? 'Activities' : 'Amenities'}
                options={
                    currentFilterType === 'tier'
                        ? ['Basic', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Black', 'Personalized']
                        : currentFilterType === 'activities'
                            ? ['Weightlifting', 'Yoga', 'Fighting', 'Dances', 'Pilates', 'Cross training', 'Swimming']
                            : ['Parking', 'Showers', 'Lockers', 'Snack Bar', 'Wi-Fi']
                }
                selectedOptions={currentFilterType === 'tier' ? (filters.tier ? [filters.tier.toString()] : null) : filters[currentFilterType]}
                onChange={(value) => handleFilterChange(currentFilterType, value)}
                type={currentFilterType === 'tier' ? 'radio' : 'checkbox'}
            />

            <MobileFilterModal
                isOpen={isMobileFilterModalOpen}
                onClose={() => setIsMobileFilterModalOpen(false)}
                filters={filters}
                handleFilterChange={handleFilterChange}
            />
        </div>
    );
};

export default SearchPage;