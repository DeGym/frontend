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
        fetch('/data/search_gym.json')
            .then(response => response.json())
            .then(data => setGyms(data))
            .catch(error => console.error('Error fetching gym data:', error));

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
        <main className={styles.main}>
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
            <div className={styles.map}>
                <Map
                    gyms={filteredGyms}
                    center={[40.73061, -73.935242]}
                    radius={filters.distance}
                />
            </div>
        </main>
    );
};

export default Search;
