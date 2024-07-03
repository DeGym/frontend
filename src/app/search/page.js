"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from '../../styles/pages/Search.module.css';

// Import the dynamic map component without SSR
const Map = dynamic(() => import('../../components/Map'), { ssr: false });

const Search = () => {
    const [gyms, setGyms] = useState([]);
    const [filters, setFilters] = useState({
        text: '',
        tier: '',
        distance: 5,
        activity: ''
    });

    useEffect(() => {
        // Mocked gym locations
        const mockedGyms = [
            {
                name: 'Gym One',
                address: '123 Main St, New York, NY',
                description: 'A great place to workout',
                tier: '1',
                distance: 3,
                activities: ['yoga', 'workout'],
                latitude: 40.73061,
                longitude: -73.935242,
                image: '/path/to/image1.jpg' // replace with actual path
            },
            {
                name: 'Gym Two',
                address: '456 Central Ave, Brooklyn, NY',
                description: 'Crossfit and more',
                tier: '2',
                distance: 8,
                activities: ['crossfit', 'swimming'],
                latitude: 40.650002,
                longitude: -73.949997,
                image: '/path/to/image2.jpg' // replace with actual path
            },
            {
                name: 'Gym Three',
                address: '789 Broadway, New York, NY',
                description: 'All in one fitness center',
                tier: '3',
                distance: 12,
                activities: ['yoga', 'swimming', 'workout'],
                latitude: 40.73061,
                longitude: -73.935242,
                image: '/path/to/image3.jpg' // replace with actual path
            }
        ];
        setGyms(mockedGyms);
    }, []);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
    };

    const filteredGyms = gyms.filter(gym => {
        return (
            (filters.text ? gym.name.toLowerCase().includes(filters.text.toLowerCase()) || gym.address.toLowerCase().includes(filters.text.toLowerCase()) : true) &&
            (filters.tier ? gym.tier === filters.tier : true) &&
            (filters.distance ? gym.distance <= filters.distance : true) &&
            (filters.activity ? gym.activities.includes(filters.activity) : true)
        );
    });

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.filters}>
                    <h2>Search Gyms</h2>
                    <label>
                        Search by Title/Location:
                        <input
                            type="text"
                            name="text"
                            value={filters.text}
                            onChange={handleFilterChange}
                        />
                    </label>
                    <label>
                        Gym Tier:
                        <select name="tier" onChange={handleFilterChange}>
                            <option value="">All</option>
                            <option value="1">Tier 1</option>
                            <option value="2">Tier 2</option>
                            <option value="3">Tier 3</option>
                        </select>
                    </label>
                    <label>
                        Distance Radius: {filters.distance} km
                        <input
                            type="range"
                            name="distance"
                            min="1"
                            max="15"
                            value={filters.distance}
                            onChange={handleFilterChange}
                        />
                    </label>
                    <label>
                        Fitness Activity:
                        <select name="activity" onChange={handleFilterChange}>
                            <option value="">All</option>
                            <option value="yoga">Yoga</option>
                            <option value="workout">Workout</option>
                            <option value="crossfit">Crossfit</option>
                            <option value="swimming">Swimming</option>
                        </select>
                    </label>
                </div>
                <div className={styles.gymsList}>
                    {filteredGyms.map((gym, index) => (
                        <div key={index} className={styles.gymCard}>
                            <img src={gym.image} alt={gym.name} className={styles.gymImage} />
                            <div className={styles.gymDetails}>
                                <h3>{gym.name}</h3>
                                <p>{gym.address}</p>
                                <p>Distance: {gym.distance} km</p>
                                <p>Tier: {gym.tier}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Map gyms={filteredGyms} center={[40.73061, -73.935242]} radius={filters.distance} />
        </div>
    );
};

export default Search;
