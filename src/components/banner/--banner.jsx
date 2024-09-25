'use client'
import React, { useRef, useState, useEffect } from 'react'
import ScrollButton from '../common/ScrollButton';
import CircleAnimation from '../../hooks/CircleAnimation'
import { SinHala, Rufo } from '../../app/font';
import TextAnimation from '../../hooks/TextAnimation';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Navigation, EffectFade, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import 'swiper/scss';
import 'swiper/scss/effect-fade';
import Link from 'next/link';




const BannerHome = () => {
    const container = useRef();
    const [currentSlide, setCurrentSlide] = useState(1);
    const [totalSlides, setTotalSlides] = useState(0);
    const [showTitle, setShowTitle] = useState(true)

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
    const [showOverlay, setShowOverlay] = useState(false);
    const [activeIndex, setActiveIndex] = useState(1); // State to track active slide index
    const videoRefs = {
        video1: useRef(null),
        video2: useRef(null),
        video3: useRef(null)
    };
    const [activeVideo, setActiveVideo] = useState('video1'); // Track which video is active
    const [videoProgress, setVideoProgress] = useState(0);
    const swiper = useRef(null);


    const handleVideoEnd = (slideIndex) => {
        // Slide to the next slide when video ends\
        setShowOverlay(true);
        setShowTitle(false)
        // Automatically hide overlay after 2 seconds
        const timeout = setTimeout(() => {
            // setShowOverlay(false);
            // setShowTitle(true)

            if (swiper.current !== null && swiper.current.swiper) {
                swiper.current.swiper.slideNext();
            }

        }, 2000);

        // Clean up timeout on unmount or dependency change
        return () => clearTimeout(timeout);
    };



    const handleSliderChange = (swiper,) => {
        setActiveIndex(swiper.realIndex);
        setActiveVideo(`video${swiper.realIndex + 1}`)
        // Pause all videos except the current active slide
        swiper.slides?.forEach((slide, index) => {
            const video = slide.querySelector('video');
            setShowOverlay(true);
 
            
            if (video) {
                if (index === swiper.activeIndex) {
                    const timeout = setTimeout(() => {
                        setVideoProgress(0)
                        setShowOverlay(false);
                        video.play().catch(error => {
                            // Handle play promise rejection (e.g., already playing)
                            console.error('Failed to start video playback:', error);
                        });

                    }, 2000);
                

                    return () => clearTimeout(timeout);
                } else {
                    video.currentTime = 0
                    video.pause();
                }
            }
        });
    }



    // Function to handle slide change
    const handleSlideChange = () => {
    };



    const updateProgress = () => {
        const video = videoRefs[activeVideo].current;
    
        if (video) {
            const currentTime = video.currentTime;
            const duration = video.duration;
            let progress = (currentTime / duration) * 100;
            progress = Math.min(100, Math.max(0, progress)); // Clamp progress between 0 and 100
            setVideoProgress(progress);
        }
    };


    useEffect(() => {

        if (swiper.current && swiper.current.swiper) {
            // Initialize total slides count
            setTotalSlides(swiper.current.swiper.slides.length);

            // Update current slide index on slide change
            swiper.current.swiper.on('slideChange', () => {
                setCurrentSlide(swiper.current.swiper.realIndex + 1);
            });

            // Set initial slide index
            setCurrentSlide(swiper.current.swiper.realIndex + 1);
        }


        // Attach timeupdate listener to update progress
        const video = videoRefs[activeVideo].current;


        if (video) {
            video.addEventListener('timeupdate', updateProgress);
        }

        return () => {
            // Clean up event listener on component unmount
            if (video) {
                video.removeEventListener('timeupdate', updateProgress);
            }
        };
    }, [videoRefs]); // Empty dependency array ensures effect runs only on mount and unmount



    return (
        <>
            <div className='banner-wrapper main-banner'>
                <div ref={container} className='banner-black bg-black'>

                    <div className={`relative animated-overlay d-none d-lg-block ${showOverlay ? 'show' : ''}`}>

                    </div>
                    <div className='count-wrapper-main d-md-block d-none'>
                        <CircleAnimation videoProgress={videoProgress} />
                        <div className='pagination-wrapper'>
                            <div className='banner-pag-cur-wrapper'>
                                <span className={`banner-pagination-current ${Rufo.className}`}>
                                    {currentSlide}
                                </span>
                                <span className={`banner-pagination-current ${Rufo.className}`}>
                                    {currentSlide}
                                </span>
                            </div>
                            <span className={`banner-pagination  ${Rufo.className}`}>
                                / {totalSlides}
                            </span>


                            <button className="banner-next next-dexktop">
                                <img src="/assets/icons/arrow-right-long.svg" alt="Arrow Right" />
                            </button>

                        </div>
                    </div>
                    <div className='video-wrapper'>
                        <motion.div style={{ y, width: '100%', height: '100%' }} className='relative'>
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation, Autoplay, EffectFade, Pagination]}
                                spaceBetween={0}
                                slidesPerView={1}
                                autoHeight={true}
                                effect={'fade'}
                                ref={swiper}
                                loop={true}
                                navigation={{
                                    nextEl: '.banner-next',
                                    prevEl: '.banner-prev',
                                }}
                                onSlideChange={(swiper) => handleSliderChange(swiper)}
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
                                <SwiperSlide className="swiper-slide">
                                    <div className='video-inner'>
                                        <video muted playsInline width='100%'
                                            src={`/assets/video/intro_1.mp4`}
                                            ref={videoRefs.video1}
                                            onPlay={handleSlideChange}
                                            onEnded={() => handleVideoEnd(0)}
                                            preload="none">
                                        </video>
                                    </div>
                                    <div className='banner--content'>
                                        <div className='container-fluid h-container'>
                                            <div className='row'>
                                                <div className='col-lg-6 p-0'>
                                                    {
                                                        showTitle ?
                                                            <>
                                                                <div className='banner-heading'>
                                                                    <h1 className={` ${Rufo.className}`}>
                                                                        <TextAnimation text={'REDEFINING LUXURY'} />
                                                                    </h1>
                                                                    <h1 className={` ${Rufo.className}`}>
                                                                        <TextAnimation text={'LIVING'} />
                                                                    </h1>
                                                                </div>
                                                                <div className='dicover-btn'>
                                                                    <Link href='#'>
                                                                        <p className={` ${SinHala.className}`}>
                                                                            DISCOVER MORE
                                                                            <span className='d-inline-block'>
                                                                                <img src="/assets/icons/discover-btn-arrow.svg" alt="Arrow Right" />
                                                                            </span>
                                                                        </p>
                                                                    </Link>
                                                                </div>
                                                            </>
                                                            :
                                                            <>
                                                            </>
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className='video-inner'>
                                        <video muted playsInline
                                            ref={videoRefs.video2}
                                            src={'/assets/video/intro_2.mp4'}
                                            onPlay={handleSlideChange}
                                            onEnded={() => handleVideoEnd(1)}
                                            width='100%'
                                            preload='none'
                                            type="video/mp4">
                                        </video>
                                    </div>

                                    <div className='banner--content'>
                                        <div className='container-fluid h-container'>
                                            <div className='row'>
                                                <div className='col-lg-6 p-0'>

                                                    {
                                                        showTitle ?
                                                            <>
                                                                <div className='banner-heading'>
                                                                    <h1 className={`${Rufo.className}`}>
                                                                        <TextAnimation text={'BEACHFRONT'} />
                                                                    </h1>
                                                                    <h1 className={`${Rufo.className}`}>
                                                                        <TextAnimation text={'SIGNATURE VILLAS'} />
                                                                    </h1>
                                                                </div>
                                                                <div className='dicover-btn'>
                                                                    <Link href='#'>
                                                                        <p className={` ${SinHala.className}`}>
                                                                            DISCOVER MORE
                                                                            <span className='d-inline-block'>
                                                                                <img src="/assets/icons/discover-btn-arrow.svg" alt="Arrow Right" />
                                                                            </span>
                                                                        </p>
                                                                    </Link>
                                                                </div>
                                                            </>

                                                            :

                                                            <>
                                                            </>
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className='video-inner'>
                                        <video muted playsInline
                                            ref={videoRefs.video3}
                                            style={{
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                            src={'/assets/video/intro_3.mp4'}
                                            onPlay={handleSlideChange}
                                            onEnded={() => handleVideoEnd(2)}
                                            width='100%'
                                            preload='none'
                                            type="video/mp4">
                                        </video>
                                    </div>

                                    <div className='banner--content'>
                                        <div className='container-fluid h-container'>
                                            <div className='row'>
                                                <div className='col-lg-6 p-0'>
                                                    {
                                                        showTitle ?
                                                            <>
                                                                <div className='banner-heading'>
                                                                    <h1 className={`${Rufo.className}`}>
                                                                        <TextAnimation text={'PALM FLOWER'} />
                                                                    </h1>
                                                                </div>
                                                                <div className='dicover-btn'>
                                                                    <Link href='#'>
                                                                        <p className={` ${SinHala.className}`}>
                                                                            DISCOVER MORE
                                                                            <span className='d-inline-block'>
                                                                                <img src="/assets/icons/discover-btn-arrow.svg" alt="Arrow Right" />
                                                                            </span>
                                                                        </p>
                                                                    </Link>
                                                                </div>
                                                            </>

                                                            :

                                                            <>

                                                            </>
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className='banner-mobile-arrow d-md-none'>
                                <div className="al-slider-arrow col-lg-4 p-0 d-flex">
                                    <button className="banner-prev"><BsArrowLeft /> </button>
                                    <button className="banner-next"><BsArrowRight /> </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )

}


export default BannerHome