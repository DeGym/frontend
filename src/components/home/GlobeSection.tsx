"use client";

import dynamic from 'next/dynamic';
import React, { useEffect, useState, useRef } from 'react';
import styles from '@/styles/components/home/GlobeSection.module.css';

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

interface ArcData {
    startLat: number;
    startLng: number;
    endLat: number;
    endLng: number;
    color: string[];
}

interface HexPolygonData {
    features: any[];
}

interface GlobeSize {
    width: number;
    height: number;
}

const GlobeSection: React.FC = () => {
    const globeEl = useRef<any>(null);
    const [arcsData, setArcsData] = useState<ArcData[]>([]);
    const [hexPolygonsData, setHexPolygonsData] = useState<HexPolygonData>({ features: [] });
    const [globeSize, setGlobeSize] = useState<GlobeSize>({ width: 0, height: 0 });

    useEffect(() => {
        const N = 20;
        const generatedArcsData: ArcData[] = Array.from({ length: N }, () => ({
            startLat: (Math.random() - 0.5) * 180,
            startLng: (Math.random() - 0.5) * 360,
            endLat: (Math.random() - 0.5) * 180,
            endLng: (Math.random() - 0.5) * 360,
            color: ['#2dff73', '#ffffff']
        }));
        setArcsData(generatedArcsData);

        fetch('/json/ne_110m_admin_0_countries.geojson')
            .then(res => res.json())
            .then(data => setHexPolygonsData(data));

        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            let globeWidth, globeHeight;

            if (width > 1200) {
                globeWidth = width * 2.3;
                globeHeight = height * 2.3;
            } else if (width > 768) {
                globeWidth = width * 1.2;
                globeHeight = height * 1.2;
            } else {
                globeWidth = width * 1.5;
                globeHeight = width * 1.5;
            }

            setGlobeSize({
                width: globeWidth,
                height: globeHeight
            });
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={styles.sectionWrapper}>
            <div className={styles.globeContainer}>
                <Globe
                    ref={globeEl}
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
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
                    width={globeSize.width}
                    height={globeSize.height}
                    backgroundColor="#00000000"
                    atmosphereColor='#2dff73'
                    atmosphereAltitude={0.15}
                />
                <div className={styles.globeOverlay}>|</div>
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <h2>Powered <b>by Community</b></h2>
                    <p>
                        DeGym is a cutting-edge decentralized application transforming gym membership through Non-Fungible Tokens (NFTs) and Distributed Ledger Technology (DLT) powered by smart contracts.
                    </p>
                    <p>
                        DeGym connects gym goers, gym owners and stakers in a seamless ecosystem where users can access multiple gyms, providers can offer their facilities, and stakers can earn rewards.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GlobeSection;