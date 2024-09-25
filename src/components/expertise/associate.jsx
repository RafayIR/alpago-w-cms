'use client'
import { HalvarEng, Rufo, SinHala, StadMitte } from '../../app/font'
import React, { useState, useEffect } from 'react';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import TextAnimation from '../../hooks/TextAnimation';
// Import Swiper React components
import { Navigation, Autoplay, Pagination, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/css/pagination';


const Associate = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveSlideIndex(swiper.realIndex); // Update active slide index on slide change
    };

    // Array of paragraphs corresponding to each slide
    const paragraphs = [
        "Driven by a dynamic team of celebrated architects since 1986, the award-winning South African firm is renowned for its pursuit of architectural excellence and innovative design. They have also collaborated with us on numerous concept designs, bringing visionary ideas and refined aesthetics to our developments such as Casa Del Sole, Kural Vista and Riva Del Lusso",
        "Founded by Norman Foster in 1967, the British company is a global leader in sustainable architecture, urbanism, engineering, and design. Their pioneering expertise and strategic direction were instrumental in bringing the Palm Flower to life, transforming it into an iconic development project on Palm Jumeirah, Dubai",
        "Established by Massimo Castagna in 1986, the Italian studio is famous for its innovative approach in creating cohesive and immersive spatial experiences. Their designs emphasize harmony between form and function, resulting in spaces that are luxurious and practical such as our own Riva Del Lusso.",
        "Since 1999, the firm's eccentric design process – an amalgamation of various ideas, concepts and approaches – has driven its popularity to be an established leader in their field. Partnering with us, they crafted Sole Mare and Serene Versante, both masterpieces that exemplifies their ability to craft innovative, high-quality solutions, delivering truly exceptional, elegant living spaces worldwide",
        "Emre Arolat Architecture: Co-founded by Emre Arolat and GoncaPasolar in 2004, it has grown into one of the largest architectural offices in Turkey, and has a strong global presence. Collaborating with us on Framed Allure – their debut project in the UAE – the villa’s architecture reflects their meticulous attention to detail and commitment to creating unique and captivating living experiences",
        "Renowned for its Italian style and innovation, the group has been a global leader in designing unique customer experiences through creativity and technology since 1930. With a legacy of delivering visionary architecture, they have crafted sustainable architectural beauty for our projects, a perfect blend of tradition and modernity."
    ];

    const heading = [
        "SAOTA",
        "Foster Partners",
        "AD Architettura",
        "LW Design Group",
        "EAA",
        "Pininfarina"
    ]

    return (
        <>
            <section>
                <div className="associate-wrapper white associate-right">
                    <div className='arrow-wrapper'>

                        <div className="al-slider-arrow col-lg-4 p-0 d-flex">
                            <button className="aso-prev"><BsArrowLeft /> </button>
                            <button className="m-0 aso-next"><BsArrowRight /> </button>
                        </div>

                        <span className={`${Rufo.className} as-pagination`}>

                        </span>
                    </div>

                    <div className="container-fluid p-0">
                        <div className="row associate-right-row">

                            <div className="col-lg-6 col-md-6">
                                <div className='as-desc'>
                                    <div className="as-header">
                                        <h5 className={` ${StadMitte.className}`} >
                                            DESIGN PARTNERS
                                        </h5>
                                        <h3 className={` ${StadMitte.className}`}>
                                            {heading[activeSlideIndex]}
                                        </h3>
                                    </div>
                                    <div className='as-para'>
                                        <p className={SinHala.className}>{paragraphs[activeSlideIndex]}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <Swiper
                                    // install Swiper modules
                                    modules={[Navigation, Autoplay, Pagination]}
                                    speed={1500}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    loop={true}
                                    navigation={{
                                        nextEl: '.aso-next',
                                        prevEl: '.aso-prev',
                                    }}
                                    pagination={{
                                        clickable: true,
                                        el: '.as-pagination',
                                        type: 'fraction',

                                    }}
                                    onSlideChange={(swiper) => handleSlideChange(swiper)}
                                    scrollbar={{ draggable: true }}
                                    breakpoints={{
                                        1024: {
                                            slidesPerView: 1,
                                        },
                                        768: {
                                            slidesPerView: 1,
                                        },
                                        640: {
                                            slidesPerView: 1,
                                        },
                                        480: {
                                            slidesPerView: 1,
                                            autoplay: true
                                        },
                                        0: {
                                            slidesPerView: 1
                                        }
                                    }}
                                    className="swiper-container tp-service-active">

                                    <SwiperSlide >
                                        <div className="img-wrapper">
                                            <img src="/assets/img/partners/ck-interiors.png" alt="partner" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <div className="img-wrapper">
                                            <img src="/assets/img/partners/emre.png" alt="partner" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <div className="img-wrapper">
                                            <img src="/assets/img/partners/foster.png" alt="partner" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <div className="img-wrapper">
                                            <img src="/assets/img/partners/LW.png" alt="partner" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <div className="img-wrapper">
                                            <img src="/assets/img/partners/massimo.png" alt="partner" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <div className="img-wrapper">
                                            <img src="/assets/img/partners/SAOTA.png" alt="partner" />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}

export default Associate