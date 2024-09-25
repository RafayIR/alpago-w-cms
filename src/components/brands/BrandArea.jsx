"use client";
import React from 'react';
import brand_1 from "../../../public/assets/img/brand/brand-b1.png";
import brand_2 from "../../../public/assets/img/brand/brand-b2.png";
import brand_3 from "../../../public/assets/img/brand/brand-b3.png";
import brand_4 from "../../../public/assets/img/brand/brand-b4.png";
import brand_5 from "../../../public/assets/img/brand/brand-b5.png";
import brand_6 from "../../../public/assets/img/brand/brand-b6.png";
import brand_7 from "../../../public/assets/img/brand/brand-b7.png";
import brand_8 from "../../../public/assets/img/brand/brand-b8.png";
import brand_9 from "../../../public/assets/img/brand/brand-b9.png";
import brand_10 from "../../../public/assets/img/brand/brand-b10.png";
import brand_11 from "../../../public/assets/img/brand/brand-b11.png";
import brand_12 from "../../../public/assets/img/brand/brand-b12.png";
import brand_13 from "../../../public/assets/img/brand/brand-b13.png";
import brand_14 from "../../../public/assets/img/brand/brand-b14.png";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { StadMitte } from '../../app/font';


const brands = [
    brand_1,
    brand_2,
    brand_3,
    brand_4,
    brand_5,
    brand_6,
    brand_7,
    brand_8,
    brand_9,
    brand_10,
    brand_11,
    brand_12,
    brand_13,
    brand_14,
]

const BrandArea = () => {


    return (
        <>
            <div className={`al-brand-area`}>
                <div className='company-title'>
                    <h2 className={`${StadMitte.className}`}>Our Associated Brands</h2>
                </div>
                <div className="p-0 container-fluid">
                    <div className="tp-brand-wrap theme-bg">
                        <div className="grid">
                            {/* <div className="col-xl-12">
                                <div className="tp-brand-wrapper">
                                    <Swiper
                                        speed={5000}
                                        loop={true}
                                        freeMode={{
                                            enabled: true,
                                            sticky: true,
                                        }}
                                        slidesPerView={4}
                                        grabCursor={true}
                                        allowTouchMove={false}
                                        autoplay={{ delay: 0, disableOnInteraction: false }}
                                        spaceBetween={20}
                                        modules={[Autoplay]}
                                        breakpoints={{
                                            "1400": {
                                                slidesPerView: 4,
                                            },
                                            "1200": {
                                                slidesPerView: 3,
                                            },
                                            "992": {
                                                slidesPerView: 3,
                                            },
                                            "768": {
                                                slidesPerView: 3,
                                            },
                                            "576": {
                                                slidesPerView: 2,
                                            },
                                            "0": {
                                                slidesPerView: 1,
                                            },
                                        }}
                                        className="swiper-container">
                                        {brands.map((item, i) => (
                                            <SwiperSlide key={i} className="swiper-slide">
                                                <div style={{ width: '200px', margin: '0 auto' }} className="tp-brand-item text-center">
                                                    <Image src={item} width={500} height={500} style={{ width: '100%', height: '100%' }} alt="Brand Logo" />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div> */}
                            {
                                brands.map((item, i) => (
                                    <div className='grid-items' key={i}>
                                        <div className="tp-brand-item text-center">
                                            <Image src={item} width={500} height={500} style={{ width: '100%', height: '100%' }} alt="Brand Logo" />
                                        </div>
                                    </div>
                                ))
                            }
                            {
                                brands.map((item, i) => (
                                    <div className='grid-items' key={i}>
                                        <div className="tp-brand-item text-center">
                                            <Image src={item} width={500} height={500} style={{ width: '100%', height: '100%' }} alt="Brand Logo" />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrandArea;
