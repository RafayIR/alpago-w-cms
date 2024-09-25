'use client'
import { useState, useEffect } from 'react';
import { SinHala, StadMitte } from '../../../app/font'
import { Navigation, Autoplay, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import 'swiper/scss';
import TextAnimation from '../../../hooks/TextAnimation';
import useWindowWidth from '../../../hooks/useWindowWidth';
import { aboutTeam } from './teamData'


const AboutTeam = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(null);
    const windowWidth = useWindowWidth()

    const handleSlideChange = (swiper) => {
        setActiveSlideIndex(swiper.realIndex); // Update active slide index on slide change
    };

    const handleHover = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    }


    const teamTitle = [
        `MURAT AYYILDIZ`,
        'RIDVAN AYYILDIZ',
        'SYED AZEEM MEHROZ'
    ]


    return (

        <>
            <section className="team">
                <div className="bg-black">
                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-0">

                                <div className='meet-team-col'>
                                    <div className='meet-team-title'>
                                        <div className='meet-team-header'>
                                            <span className={`${StadMitte.className}`}>MEET THE</span>
                                            <h4 className={`${StadMitte.className}`}>
                                                <TextAnimation text={'TEAM'} />
                                            </h4>
                                        </div>
                                    </div>
                                    <div className='al-about-arrow'>
                                        <div className="al-slider-arrow p-0 d-flex align-items-center">
                                            <button className="team-prevv"><BsArrowLeft /> </button>
                                            <button className="team-next m-0"><BsArrowRight /> </button>
                                        </div>
                                    </div>

                                    <div className='team-heading'>
                                        <h5 className={`${StadMitte.className}`}>
                                            {teamTitle[activeSlideIndex]}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-0">
                                <Swiper
                                    // install Swiper modules
                                    modules={[Navigation, Autoplay]}
                                    speed={1200}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    autoplay={false}
                                    loop={true}
                                    navigation={{
                                        nextEl: '.team-next',
                                        prevEl: '.team-prevv',
                                    }}
                                    onSlideChange={(swiper) => handleSlideChange(swiper)}
                                    pagination={{ clickable: true }}
                                    scrollbar={{ draggable: false }}
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
                                        },
                                        0: {
                                            slidesPerView: 1
                                        }
                                    }}
                                    className="swiper-container al-service-active">
                                    {
                                        aboutTeam.map((item, i) => (
                                            <SwiperSlide key={i}>
                                                <div className='content'>
                                                    <div
                                                        onMouseEnter={windowWidth > 767 ? () => handleHover(i) : undefined}
                                                        onMouseLeave={windowWidth > 767 ? () => undefined : undefined}
                                                        onClick={windowWidth < 767 ? () => handleHover(i) : undefined}
                                                        className={`team-img ${activeIndex === i ? 'active' : ''}`}>
                                                        <img src={item.teamImg} alt="Team Image" />
                                                        <div className='team-desc'>
                                                            <span className={`${SinHala.className}`}>
                                                                {item.teamTitle}
                                                            </span>
                                                        </div>
                                                        <div className='hover-content'>
                                                            <p className={SinHala.className}>
                                                                {item.teamDesc}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}


export default AboutTeam