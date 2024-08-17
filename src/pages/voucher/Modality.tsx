import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';
import styles from '@/styles/components/voucher/Modality.module.css';

const Modality: React.FC = () => {
    const modalities = [
        {
            title: 'Yoga',
            description: 'Find your inner peace with our yoga classes, designed to improve flexibility and balance.',
            image: '/images/voucher/yoga.jpg',
        },
        {
            title: 'Cardio',
            description: 'Get your heart rate pumping with our high-intensity cardio classes, perfect for burning calories and improving cardiovascular health.',
            image: '/images/voucher/cardio.jpg',
        },
        {
            title: 'Strength Training',
            description: 'Build strength and muscle mass with our strength training classes, tailored to suit your fitness goals.',
            image: '/images/voucher/strength.jpg',
        },
        {
            title: 'Functional Training',
            description: 'Improve your overall fitness and coordination with our functional training classes, designed to mimic real-life movements.',
            image: '/images/voucher/functional.jpg',
        },
        {
            title: 'Group Fitness',
            description: 'Join our group fitness classes and experience the energy and motivation of working out with like-minded individuals.',
            image: '/images/voucher/group.jpg',
        },
    ];

    return (
        <section className={styles.section}>
            <h3 className={styles.title}>Modalities</h3>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className={styles.swiper}
            >
                {modalities.map((modality, index) => (
                    <SwiperSlide key={index} className={styles.slide}>
                        <div className={styles.imageContainer}>
                            <Image src={modality.image} alt={modality.title} layout="fill" objectFit="cover" />
                        </div>
                        <div className={styles.content}>
                            <h4 className={styles.modalityTitle}>{modality.title}</h4>
                            <p className={styles.modalityDescription}>{modality.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Modality;