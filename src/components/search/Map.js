"use client";

import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import styles from '@/styles/components/search/Map.module.css';

const gymIcon = new L.Icon({
    iconUrl: '/img/marker-gym.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [1, -34],
    shadowSize: [80, 80]
});

const Map = ({ gyms, selectedGym, searchRadius, userLocation }) => {
    const center = selectedGym ? [selectedGym.lat, selectedGym.lng] : userLocation || [40.7128, -74.0060];

    const mapOptions = {
        center: center,
        zoom: 13,
    };

    return (
        <MapContainer
            {...mapOptions}
            style={{ height: '100%', width: '100%' }}
            className={styles.map}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {userLocation && (
                <>
                    <Marker position={userLocation}>
                        <Popup>You are here</Popup>
                    </Marker>
                    <Circle
                        center={userLocation}
                        pathOptions={{
                            fillColor: 'blue',
                            fillOpacity: 0.1,
                            color: 'blue',
                            radius: searchRadius * 1000 // Convert km to meters
                        }}
                    />
                </>
            )}
            {gyms.map((gym) => (
                <Marker
                    key={gym.id}
                    position={[gym.lat, gym.lng]}
                    icon={gymIcon}
                >
                    <Popup>
                        <div>
                            <h3>{gym.name}</h3>
                            <p>{gym.address}</p>
                            <p>Rating: {gym.rating}/5</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;