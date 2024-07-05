"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';
import styles from '../../styles/components/Modality.module.css';

const Modality = () => {
    const modalities = [
        {
            title: 'Weightlifting',
            imgSrc: '/img/modalities/musculacao.508c7916.webp',
            alt: 'The photo is taken in a gym. A woman is doing a lower body lift exercise.',
        },
        {
            title: 'Pilates',
            imgSrc: '/img/modalities/pilates.287dc362.webp',
            alt: 'In the photo, a woman is in a pilates studio performing an exercise that also helps to stretch the legs.',
        },
        {
            title: 'Swimming',
            imgSrc: '/img/modalities/natacao.cc7a5889.webp',
            alt: 'The photo is centered on a swimmer, in the pool, doing one of the swimming modalities.',
        },
        {
            title: 'Cross Training',
            imgSrc: '/img/modalities/cross-training.84c48747.webp',
            alt: 'The photo focuses on a man in a cross-training studio. He is doing squats with the help of dumbbells and weights.',
        },
        {
            title: 'Massage',
            imgSrc: '/img/modalities/massagem.2dd254bb.webp',
            alt: 'The image focuses on a woman lying in a spa, receiving a back massage from a professional.',
        },
        {
            title: 'Fighting',
            imgSrc: '/img/modalities/lutas.3e7664ab.webp',
            alt: 'In the photo, two men are in a fighting ring, distinguished by the color of their shorts. Both are practicing kickboxing, with one attacking and the other defending.',
        },
        {
            title: 'Dances',
            imgSrc: '/img/modalities/dancas.d037df15.webp',
            alt: 'In the photo, there are four people in a dance studio simultaneously performing one of the dance steps.',
        },
        {
            title: 'Electrostimulation',
            imgSrc: '/img/modalities/eletroestimulacao.71033509.webp',
            alt: 'In the photo, there is a woman centered, squatting, stepping on a mat, doing one of the electrostimulation training exercises.',
        },
        {
            title: 'Beach Tennis',
            imgSrc: '/img/modalities/beach-tennis.7077e3c8.webp',
            alt: 'The photo was taken on a beach tennis court. A woman is practicing the modality, jumping above the net height and hitting the ball with a racket.',
        },
        {
            title: 'Volleyball',
            imgSrc: '/img/modalities/volei.5cf2a247.webp',
            alt: 'The image shows three people playing volleyball. The photo was taken in a gym, and two of the three people are blocking the ball by stretching their arms above the net.',
        },
        {
            title: 'Yoga',
            imgSrc: '/img/modalities/yoga.742193b9.webp',
            alt: 'The photo shows three women in a yoga studio. They are in a class, each lying on their own mat, stretching. There is also a ball in the background, which is an accessory used during practice.',
        },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.flexRow}>
                    <div className={styles.infoBox}>
                        <h2 className={styles.title}>More than 250 modalities</h2>
                        <a
                            className={styles.link}
                            target="_blank"
                            href="/providers"
                        >
                            <p>Find gyms</p>
                            <Image
                                alt="Icon of a right-pointing arrow"
                                width="24"
                                height="24"
                                style={{ color: 'transparent' }}
                                src="/img/modalities/black-right-arrow.8d0ed5f9.svg"
                            />
                        </a>
                    </div>
                    <div>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={10}
                            breakpoints={{
                                320: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                640: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 6,
                                    spaceBetween: 15,
                                },
                                1024: {
                                    slidesPerView: 6,
                                    spaceBetween: 20,
                                },
                                1536: {
                                    slidesPerView: 7,
                                    spaceBetween: 20,
                                },
                            }}
                            pagination={{ clickable: true }}
                            navigation={{
                                prevEl: `.${styles.prevButton}`,
                                nextEl: `.${styles.nextButton}`
                            }}
                            className={styles.swiperContainer}
                        >
                            {modalities.map((item, index) => (
                                <SwiperSlide key={index} className={styles.swiperSlide}>
                                    <div className={styles.imgContainer}>
                                        <Image
                                            alt={item.alt}
                                            width="390"
                                            height="261"
                                            className={styles.img}
                                            src={item.imgSrc}
                                        />
                                    </div>
                                    <div className={styles.textContainer}>
                                        <h3>{item.title}</h3>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className={styles.navigationButtons}>
                            <button type="button" className={`${styles.paginationButton} ${styles.prevButton}`}>
                                <Image
                                    alt="Icon of a left-pointing arrow"
                                    width="24"
                                    height="24"
                                    style={{ color: 'transparent' }}
                                    src="/img/modalities/black-left-arrow.7d412d02.svg"
                                />
                            </button>
                            <button type="button" className={`${styles.paginationButton} ${styles.nextButton}`}>
                                <Image
                                    alt="Icon of a right-pointing arrow"
                                    width="24"
                                    height="24"
                                    style={{ color: 'transparent' }}
                                    src="/img/modalities/black-right-arrow.8d0ed5f9.svg"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Modality;