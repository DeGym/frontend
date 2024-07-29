"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from '../../styles/pages/Search.module.css';
import FilterModal from './FilterModal';
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
        <main className={styles.main}>
            <div className={styles.sidebar}>
                <div className={styles.filters}>
                    <input
                        type="text"
                        placeholder="Busque uma academia ou localização"
                        value={filters.text}
                        onChange={(e) => handleFilterChange('text', e.target.value)}
                        className={styles.searchInput}
                    />
                    <div className={styles.filterButtonsContainer}>
                        {['plan', 'distance', 'activities', 'amenities'].map((filterType) => (
                            <button key={filterType} onClick={() => toggleModal(filterType)} className={styles.filterButton}>
                                {filterType === 'plan' ? 'Filtre por plano' :
                                 filterType === 'distance' ? 'Distância' :
                                 filterType === 'activities' ? 'Modalidades' : 'Comodidades'}
                            </button>
                        ))}
                    </div>
                </div>
                <div className={styles.academiesList}>
                    <p className={styles.resultsCount}>Foram encontradas {filteredAcademies.length} academias</p>
                    {filteredAcademies.map((academy, index) => (
                        <div key={index} className={styles.academyCard}>
                            <img src={academy.image} alt={academy.name} className={styles.academyImage} />
                            <div className={styles.academyDetails}>
                                <h3>{academy.name}</h3>
                                <p>{academy.address}</p>
                                <p className={styles.distance}>{academy.distance} m</p>
                                <p className={styles.availability}>Disponível a partir do TP 1</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.map}>
                <Map
                    academies={filteredAcademies}
                    center={filteredAcademies.length > 0 ? [filteredAcademies[0].latitude, filteredAcademies[0].longitude] : null}
                    radius={filters.distance}
                />
            </div>
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