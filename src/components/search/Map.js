"use client";

import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const gymIcon = new L.Icon({
    iconUrl: '/img/marker-gym.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [1, -34],
    shadowSize: [80, 80]
});
const userIcon = new L.Icon({
    iconUrl: '/img/marker-user.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    shadowSize: [80, 80]
});


const UpdateMapCenter = ({ center }) => {
    const map = useMap();
    const prevCenter = useRef(center);

    useEffect(() => {
        if (center && (prevCenter.current[0] !== center[0] || prevCenter.current[1] !== center[1])) {
            map.setView(center, map.getZoom());
            prevCenter.current = center;
        }
    }, [center, map]);

    return null;
};

const Map = ({ gyms, center, radius }) => {
    return (
        <MapContainer className="w-full h-full" center={center} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

            />
            <Marker
                key={0}
                position={center}
                icon={userIcon}
            >
            </Marker>
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
            {gyms.map((gym, index) => (
                <Marker
                    key={index}
                    position={[gym.latitude, gym.longitude]}
                    icon={gymIcon}
                >
                    <Popup>
                        <b>{gym.name}</b><br />{gym.address}
                    </Popup>
                </Marker>
            ))}
            <UpdateMapCenter center={center} />
        </MapContainer>
    );
};

export default Map;