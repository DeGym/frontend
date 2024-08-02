"use client";

import dynamic from 'next/dynamic';
import React, { useEffect, useState, useRef } from 'react';
import styles from '@/styles/components/section/GlobeSection.module.css';

// Dynamically import the Globe component with no SSR
const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

const GlobeSection = () => {
    const globeEl = useRef();
    const [arcsData, setArcsData] = useState([]);
    const [hexPolygonsData, setHexPolygonsData] = useState({ features: [] });

    useEffect(() => {
        const N = 20; // Number of arcs to generate
        const generatedArcsData = [...Array(N).keys()].map(() => ({
            startLat: (Math.random() - 0.5) * 180,
            startLng: (Math.random() - 0.5) * 360,
            endLat: (Math.random() - 0.5) * 180,
            endLng: (Math.random() - 0.5) * 360,
            color: ['#2dff73', '#ffffff']
        }));
        setArcsData(generatedArcsData);

        fetch('/json/ne_110m_admin_0_countries.geojson')
            .then(res => res.json())
            .then(setHexPolygonsData);
    }, []);

    const handleGlobeReady = () => {
        if (globeEl.current) {
            const globe = globeEl.current;
            globe.controls().autoRotate = true;
            globe.controls().autoRotateSpeed = 0.9;
        }
    };

    return (
        <div className={styles.sectionWrapper}>
            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <h2>Powered <b>by Community</b></h2>
                    <p>
                        DeGym is a cutting-edge decentralized autonomous organization transforming gym voucher through NFT and DLT powered by smart contracts.
                    </p>
                    <p>DeGym connects Gym Consumers, Gym Providers, and Stakers in a seamless ecosystem where users can access multiple gyms, providers can offer their facilities, and stakers can earn rewards.</p>
                </div>
                <Globe
                    ref={globeEl}
                    className={styles.globeContainer}
                    arcsData={arcsData}
                    arcColor={'color'}
                    arcDashLength={() => Math.random() + 0.15}
                    arcDashGap={() => Math.random()}
                    arcDashAnimateTime={3500}
                    hexPolygonsData={hexPolygonsData.features}
                    hexPolygonResolution={3}
                    hexPolygonMargin={0.5}
                    hexPolygonUseDots={true}
                    hexPolygonColor={() => `#494949`}
                    hexPolygonLabel={({ properties: d }) => `
                        <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
                        Population: <i>${d.POP_EST}</i>
                    `}
                    width={400}
                    height={400}
                    backgroundColor="#00000000"
                    bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'
                    showAtmosphere={true}
                    atmosphereColor='#2dff73'
                    onGlobeReady={handleGlobeReady}
                />
            </div>
        </div >
    );
};

export default GlobeSection;
