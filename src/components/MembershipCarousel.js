'use client'

import React from 'react';
import Slider from 'react-slick';
import MembershipCard from './MembershipCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MembershipCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            <MembershipCard tier="Basic" durability="Monthly" />
            <MembershipCard tier="Silver" durability="Yearly" />
            <MembershipCard tier="Gold" durability="Weekly" />
        </Slider>
    );
};

export default MembershipCarousel;
