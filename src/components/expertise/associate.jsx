'use client'
import { Rufo, SinHala, StadMitte } from '../../app/font'
import React, { useState } from 'react';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
// Import Swiper React components
import { Navigation, Autoplay, Pagination, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useData } from '../../hooks/useGetData';

import 'swiper/scss';
import 'swiper/css/pagination';


const Associate = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveSlideIndex(swiper.realIndex); // Update active slide index on slide change
    };

    const data = useData()
    const partnerSlider = data?.data?.content?.partnerSlider

    const currentHeading = partnerSlider[activeSlideIndex]?.heading;
    const currentPara = partnerSlider[activeSlideIndex]?.paragraphs;


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
                                            {currentHeading}
                                        </h3>
                                    </div>

                                    <div className='as-para'>
                                        <p className={SinHala.className}>{currentPara}</p>
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

                                    {
                                        partnerSlider?.map((item, i) => (
                                            <SwiperSlide key={i}>
                                                <div className="img-wrapper">
                                                    <img src={item.sliderImage} alt="associate" />
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
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