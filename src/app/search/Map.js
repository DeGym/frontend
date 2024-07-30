"use client";

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from '../../styles/components/Map.module.css';
import L from 'leaflet';

const icon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Defina uma posição padrão para o mapa
const defaultCenter = [-23.5505, -46.6333]; // São Paulo, por exemplo

const Map = ({ academies, center, radius }) => {
    // Use o centro fornecido ou o padrão se não houver academias
    const mapCenter = academies.length > 0 ? center : defaultCenter;

    return (
        <MapContainer className="w-full h-full" center={mapCenter} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {center && radius && (
                <Circle
                    center={center}
                    radius={radius * 1000}
                    fillColor="green"
                    color="green"
                    opacity={0.3}
                    fillOpacity={0.1}
                />
            )}
            {academies.map((academy, index) => (
                <Marker
                    key={index}
                    position={[academy.latitude, academy.longitude]}
                    icon={icon}
                >
                    <Popup>
                        <b>{academy.name}</b><br />{academy.address}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;