"use client";

import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import FilterModal from './FilterModal';
import MobileFilterModal from './MobileFilterModal';
import MobileGymsModal from './MobileGymsModal';
import haversineDistance from '@/utils/haversineDistance';

// Import the dynamic map component without SSR
const Map = dynamic(() => import('./Map'), { ssr: false });

const Search = () => {
    const [gyms, setGyms] = useState([]);
    const [filters, setFilters] = useState({
        text: '',
        tier: null,
        distance: 5,
        activities: [],
        amenities: []
    });
    const [activeModal, setActiveModal] = useState(null);
    const [mobileModalOpen, setMobileModalOpen] = useState(null);
    const [userLocation, setUserLocation] = useState(null);
    const [mapCenter, setMapCenter] = useState(null);
    const prevUserLocation = useRef(null);

    useEffect(() => {
        fetch('data/search_gyms.json')
            .then(response => response.json())
            .then(data => {
                console.log('Loaded gyms:', data);
                setGyms(data);
            })
            .catch(error => console.error('Error fetching gym data:', error));

        const handlePositionChange = (position) => {
            const newLocation = [position.coords.latitude, position.coords.longitude];
            setUserLocation(newLocation);

            if (!prevUserLocation.current || haversineDistance(prevUserLocation.current, newLocation) > 0.1) {
                setMapCenter(newLocation);
                prevUserLocation.current = newLocation;
            }
        };

        const geolocationWatcher = navigator.geolocation.watchPosition(
            handlePositionChange,
            (error) => {
                console.error('Error getting user location:', error);
            }
        );

        return () => {
            navigator.geolocation.clearWatch(geolocationWatcher);
        };
    }, []);

    const handleFilterChange = (filterName, value) => {
        setFilters(prevFilters => ({ ...prevFilters, [filterName]: value }));
    };

    const toggleModal = (modalName) => {
        setActiveModal(activeModal === modalName ? null : modalName);
    };

    const toggleMobileModal = (modalName) => {
        setMobileModalOpen(mobileModalOpen === modalName ? null : modalName);
    };

    const filteredGyms = gyms
        .map((gym) => ({
            ...gym,
            distance: userLocation ? haversineDistance(userLocation, [gym.latitude, gym.longitude]) : null,
        }))
        .filter(gym => {
            return (
                (filters.text ? gym.name.toLowerCase().includes(filters.text.toLowerCase()) || gym.address.toLowerCase().includes(filters.text.toLowerCase()) : true) &&
                (filters.distance ? gym.distance <= filters.distance : true) &&
                (filters.activities.length ? filters.activities.some(activity => gym.activities.includes(activity)) : true) &&
                (filters.amenities.length ? filters.amenities.every(amenity => gym.amenities.includes(amenity)) : true) &&
                (filters.tier === null ? true : gym.tier <= filters.tier)
            );
        });

    return (
        <main className="flex flex-col md:flex-row items-start relative min-h-screen">
            <div className="hidden md:block w-1/3 bg-dark border-r border-accent h-[calc(100vh-85px)] overflow-y-auto mt-[85px] p-5">
                <div className="mb-5">
                    <input
                        type="text"
                        placeholder="Search for gym or location"
                        value={filters.text}
                        onChange={(e) => handleFilterChange('text', e.target.value)}
                        className="w-full p-2 border border-accent rounded-md mb-3 bg-dark text-light"
                    />
                    <div className="flex flex-row flex-wrap gap-0">
                        {['tier', 'activities', 'amenities'].map((filterType) => (
                            <button
                                key={filterType}
                                onClick={() => toggleModal(filterType)}
                                className="w-1/3 px-3 py-1 bg-primary text-dark rounded-md text-sm hover:bg-hoverButton hover:text-light"
                            >
                                {filterType === 'tier' ? 'Tier' :
                                    filterType === 'activities' ? 'Modalities' : 'Amenities'}
                            </button>
                        ))}
                    </div>
                    <div className="mt-4">
                        <label className="block text-white mb-2">Distance</label>
                        <input
                            type="range"
                            min={1}
                            max={15}
                            value={filters.distance}
                            onChange={(e) => handleFilterChange('distance', Number(e.target.value))}
                            className="w-full mb-2"
                        />
                        <span className="block text-white">up to {filters.distance} km</span>
                    </div>
                </div>
                <div>
                    <p className="font-bold mb-3">{filteredGyms.length} gyms found</p>
                    {filteredGyms.map((gym, index) => (
                        <div key={index} className="mb-4 p-3 bg-black border border-primary rounded-md shadow-sm">
                            <img src={gym.image} alt={gym.name} className="w-20 h-20 rounded-md object-cover float-left mr-3" />
                            <div>
                                <h3 className="font-semibold">{gym.name}</h3>
                                <p className="text-sm">{gym.address}</p>
                                <p className="text-sm text-primary">{gym.distance ? gym.distance.toFixed(2) : 'N/A'} km</p>
                                <p className="text-sm font-bold text-green-500">Available from DG {gym.tier}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="md:hidden fixed top-[111.75px] left-0 right-0 flex justify-between p-3 bg-dark bg-opacity-50 z-20 shadow-md">
                <button onClick={() => toggleMobileModal('filters')} className="px-4 py-2 bg-primary text-dark rounded-md text-sm hover:bg-hoverButton">Filtros</button>
                <button onClick={() => toggleMobileModal('gyms')} className="px-4 py-2 bg-primary text-dark rounded-md text-sm hover:bg-hoverButton">Ver Academias</button>
            </div>
            <div className="w-full md:w-2/3 h-[calc(100vh-80px)] md:h-[calc(100vh-85px)] mt-20 md:mt-[85px] z-0">
                <Map
                    gyms={filteredGyms}
                    center={mapCenter || [0, 0]}
                    radius={filters.distance}
                />
            </div>
            <MobileFilterModal
                isOpen={mobileModalOpen === 'filters'}
                onClose={() => setMobileModalOpen(null)}
                filters={filters}
                handleFilterChange={handleFilterChange}
            />
            <MobileGymsModal
                isOpen={mobileModalOpen === 'gyms'}
                onClose={() => setMobileModalOpen(null)}
                gyms={filteredGyms}
            />
            {['tier', 'activities', 'amenities'].map((filterType) => (
                <FilterModal
                    key={filterType}
                    isOpen={activeModal === filterType}
                    onClose={() => toggleModal(filterType)}
                    title={filterType === 'tier' ? 'Tier' :
                        filterType === 'activities' ? 'Modalities' : 'Amenities'}
                    options={filterType === 'tier' ? ['All', 'Basic', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Black', 'Personalized'] :
                        filterType === 'activities' ? ['Weightlifting', 'Yoga', 'Fighting', 'Dances', 'Pilates', 'Cross training', 'Swimming'] :
                            filterType === 'amenities' ? ['Parking', 'Showers', 'Lockers', 'Snack Bar', 'Wi-Fi'] : []}
                    selectedOptions={filters[filterType]}
                    onChange={(value) => handleFilterChange(filterType, value)}
                    type={'checkbox'}
                />
            ))}
        </main>
    );
};

export default Search;
