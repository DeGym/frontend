"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import FilterModal from './FilterModal';
import MobileFilterModal from './MobileFilterModal';
import MobileGymsModal from './MobileGymsModal';

// Import the dynamic map component without SSR
const Map = dynamic(() => import('./Map'), { ssr: false });

const Search = () => {
    const [gyms, setGyms] = useState([]);
    const [filters, setFilters] = useState({
        text: '',
        tier: [],
        distance: 5,
        activities: [],
        amenities: []
    });
    const [activeModal, setActiveModal] = useState(null);
    const [mobileModalOpen, setMobileModalOpen] = useState(null);

    useEffect(() => {
        fetch('data/search_gyms.json')
            .then(response => response.json())
            .then(data => {
                console.log('Loaded gyms:', data);
                setGyms(data);
            })
            .catch(error => console.error('Error fetching gym data:', error));
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

    const filteredGyms = gyms.filter(gym => {
        return (
            (filters.text ? gym.name.toLowerCase().includes(filters.text.toLowerCase()) || gym.address.toLowerCase().includes(filters.text.toLowerCase()) : true) &&
            (filters.distance ? gym.distance <= filters.distance : true) &&
            (filters.activities.length ? filters.activities.some(activity => gym.activities.includes(activity)) : true) &&
            (filters.amenities.length ? filters.amenities.every(amenity => gym.amenities.includes(amenity)) : true) &&
            (filters.tier.length ? filters.tier.some(tier => gym.tier <= tier) : true)
        );
    });

    return (
        <main className="flex flex-col md:flex-row items-start relative min-h-screen">
            <div className="hidden md:block w-1/3 bg-[var(--color-dark)] border-r border-[var(--color-accent)] h-[calc(100vh-85px)] overflow-y-auto mt-[85px] p-5">
                <div className="mb-5">
                    <input
                        type="text"
                        placeholder="Search for gym or location"
                        value={filters.text}
                        onChange={(e) => handleFilterChange('text', e.target.value)}
                        className="w-full p-2 border border-[var(--color-accent)] rounded-md mb-3 bg-[var(--color-dark)] text-[var(--color-light)]"
                    />
                    <div className="flex flex-row flex-wrap gap-2">
                        {['tier', 'activities', 'amenities'].map((filterType) => (
                            <button
                                key={filterType}
                                onClick={() => toggleModal(filterType)}
                                className="px-3 py-1 bg-[var(--color-primary)] text-[var(--color-dark)] rounded-md text-sm hover:bg-hoverButton hover:text-[var(--color-light)]"
                            >
                                {filterType === 'tier' ? 'Tier' :
                                    filterType === 'activities' ? 'Modalidades' : 'Comodidades'}
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
                        <span className="block text-white">até {filters.distance} km</span>
                    </div>
                </div>
                <div>
                    <p className="font-bold mb-3">Foram encontradas {filteredGyms.length} gyms</p>
                    {filteredGyms.map((gym, index) => (
                        <div key={index} className="mb-4 p-3 bg-black border border-[var(--color-primary)] rounded-md shadow-sm">
                            <img src={gym.image} alt={gym.name} className="w-20 h-20 rounded-md object-cover float-left mr-3" />
                            <div>
                                <h3 className="font-semibold">{gym.name}</h3>
                                <p className="text-sm">{gym.address}</p>
                                <p className="text-sm text-[var(--color-primary)]">{gym.distance} m</p>
                                <p className="text-sm font-bold text-green-500">Disponível a partir do TP 1</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="md:hidden fixed top-[111.75px] left-0 right-0 flex justify-between p-3 bg-[var(--color-dark)] bg-opacity-50 z-20 shadow-md">
                <button onClick={() => toggleMobileModal('filters')} className="px-4 py-2 bg-[var(--color-primary)] text-[var(--color-dark)] rounded-md text-sm hover:bg-hoverButton">Filtros</button>
                <button onClick={() => toggleMobileModal('gyms')} className="px-4 py-2 bg-[var(--color-primary)] text-[var(--color-dark)] rounded-md text-sm hover:bg-hoverButton">Ver Academias</button>
            </div>
            <div className="w-full md:w-2/3 h-[calc(100vh-80px)] md:h-[calc(100vh-85px)] mt-20 md:mt-[85px] z-0">
                <Map
                    gyms={filteredGyms}
                    center={filteredGyms.length > 0 ? [filteredGyms[0].latitude, filteredGyms[0].longitude] : null}
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
                        filterType === 'activities' ? 'Modalidades' : 'Comodidades'}
                    options={filterType === 'tier' ? ['Basic', 'Silver', 'Gold'] :
                        filterType === 'activities' ? ['Musculação', 'Yoga', 'Pilates', 'Crossfit', 'Natação'] :
                            filterType === 'amenities' ? ['Estacionamento', 'Chuveiros', 'Armários', 'Lanchonete', 'Wi-Fi'] : []}
                    selectedOptions={filters[filterType]}
                    onChange={(value) => handleFilterChange(filterType, value)}
                    type={'checkbox'}
                />
            ))}
        </main>
    );
};

export default Search;
