"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import FilterModal from './FilterModal';
import MobileFilterModal from './MobileFilterModal';
import MobileAcademiesModal from './MobileAcademiesModal';

// Import the dynamic map component without SSR
const Map = dynamic(() => import('./Map'), { ssr: false });

const Search = () => {
    const [academies, setAcademies] = useState([]);
    const [filters, setFilters] = useState({
        text: '',
        plan: [],
        distance: 5,
        activities: [],
        amenities: []
    });
    const [activeModal, setActiveModal] = useState(null);
    const [mobileModalOpen, setMobileModalOpen] = useState(null);

    useEffect(() => {
        fetch('/search_academies.json')
            .then(response => response.json())
            .then(data => {
                console.log('Loaded academies:', data);
                setAcademies(data);
            })
            .catch(error => console.error('Error fetching academy data:', error));
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

    const filteredAcademies = academies.filter(academy => {
        return (
            (filters.text ? academy.name.toLowerCase().includes(filters.text.toLowerCase()) || academy.address.toLowerCase().includes(filters.text.toLowerCase()) : true) &&
            (filters.plan.length ? filters.plan.some(plan => academy.plans.includes(plan)) : true) &&
            (filters.distance ? academy.distance <= filters.distance : true) &&
            (filters.activities.length ? filters.activities.some(activity => academy.activities.includes(activity)) : true) &&
            (filters.amenities.length ? filters.amenities.every(amenity => academy.amenities.includes(amenity)) : true)
        );
    });

    return (
        <main className="flex flex-col md:flex-row items-start relative min-h-screen">
            <div className="hidden md:block w-1/3 bg-[var(--color-dark)] border-r border-[var(--color-accent)] h-[calc(100vh-85px)] overflow-y-auto mt-[85px] p-5">
                <div className="mb-5">
                    <input
                        type="text"
                        placeholder="Busque uma academia ou localização"
                        value={filters.text}
                        onChange={(e) => handleFilterChange('text', e.target.value)}
                        className="w-full p-2 border border-[var(--color-accent)] rounded-md mb-3 bg-[var(--color-dark)] text-[var(--color-light)]"
                    />
                    <div className="flex flex-wrap gap-2">
                        {['plan', 'distance', 'activities', 'amenities'].map((filterType) => (
                            <button 
                                key={filterType} 
                                onClick={() => toggleModal(filterType)} 
                                className="px-3 py-1 bg-[var(--color-primary)] text-[var(--color-dark)] rounded-md text-sm hover:bg-hoverButton hover:text-[var(--color-light)]"
                            >
                                {filterType === 'plan' ? 'Filtre por plano' :
                                 filterType === 'distance' ? 'Distância' :
                                 filterType === 'activities' ? 'Modalidades' : 'Comodidades'}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <p className="font-bold mb-3">Foram encontradas {filteredAcademies.length} academias</p>
                    {filteredAcademies.map((academy, index) => (
                        <div key={index} className="mb-4 p-3 bg-black border border-[var(--color-primary)] rounded-md shadow-sm">
                            <img src={academy.image} alt={academy.name} className="w-20 h-20 rounded-md object-cover float-left mr-3" />
                            <div>
                                <h3 className="font-semibold">{academy.name}</h3>
                                <p className="text-sm">{academy.address}</p>
                                <p className="text-sm text-[var(--color-primary)]">{academy.distance} m</p>
                                <p className="text-sm font-bold text-blue-500">Disponível a partir do TP 1</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="md:hidden fixed top-[111.75px] left-0 right-0 flex justify-between p-3 bg-[var(--color-dark)] bg-opacity-50 z-20 shadow-md">
                <button onClick={() => toggleMobileModal('filters')} className="px-4 py-2 bg-[var(--color-primary)] text-[var(--color-dark)] rounded-md text-sm hover:bg-hoverButton">Filtros</button>
                <button onClick={() => toggleMobileModal('academies')} className="px-4 py-2 bg-[var(--color-primary)] text-[var(--color-dark)] rounded-md text-sm hover:bg-hoverButton">Ver Academias</button>
            </div>
            <div className="w-full md:w-2/3 h-[calc(100vh-80px)] md:h-[calc(100vh-85px)] mt-20 md:mt-[85px] z-0">
                <Map
                    academies={filteredAcademies}
                    center={filteredAcademies.length > 0 ? [filteredAcademies[0].latitude, filteredAcademies[0].longitude] : null}
                    radius={filters.distance}
                />
            </div>
            <MobileFilterModal
                isOpen={mobileModalOpen === 'filters'}
                onClose={() => setMobileModalOpen(null)}
                filters={filters}
                handleFilterChange={handleFilterChange}
            />
            <MobileAcademiesModal
                isOpen={mobileModalOpen === 'academies'}
                onClose={() => setMobileModalOpen(null)}
                academies={filteredAcademies}
            />
            {['plan', 'distance', 'activities', 'amenities'].map((filterType) => (
                <FilterModal
                    key={filterType}
                    isOpen={activeModal === filterType}
                    onClose={() => toggleModal(filterType)}
                    title={filterType === 'plan' ? 'Filtre por plano' :
                           filterType === 'distance' ? 'Distância' :
                           filterType === 'activities' ? 'Modalidades' : 'Comodidades'}
                    options={filterType === 'plan' ? ['Básico', 'Intermediário', 'Premium'] :
                             filterType === 'activities' ? ['Musculação', 'Yoga', 'Pilates', 'Crossfit', 'Natação'] :
                             filterType === 'amenities' ? ['Estacionamento', 'Chuveiros', 'Armários', 'Lanchonete', 'Wi-Fi'] : []}
                    selectedOptions={filters[filterType]}
                    onChange={(value) => handleFilterChange(filterType, value)}
                    type={filterType === 'distance' ? 'range' : 'checkbox'}
                    min={filterType === 'distance' ? 1 : undefined}
                    max={filterType === 'distance' ? 15 : undefined}
                    value={filterType === 'distance' ? filters.distance : undefined}
                />
            ))}
        </main>
    );
};

export default Search;