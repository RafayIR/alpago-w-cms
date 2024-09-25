'use client'
import React, { useRef, useState, useEffect } from 'react'
import CircleAnimation from '../../hooks/CircleAnimation'
import { SinHala, Rufo } from '../../app/font';
import TextAnimation from '../../hooks/TextAnimation';
import { useScroll, useTransform, motion } from 'framer-motion';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
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
    const [swiperSlide, setSwiperSlide] = useState('')
    const [currentNewSlide, setSlideNewCurrent] = useState(0)
    const [disable, setDisable] = useState(false)

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

    const handleMobilePrev = () => {
        if (swiper.current !== null && swiper.current.swiper) {
            swiper.current.swiper.slidePrev();

        }
    }


    const handleMobileNext = () => {
        if (swiper.current !== null && swiper.current.swiper) {
            swiper.current.swiper.slideNext();
        }
    }


    const handleVideoEnd = (slideIndex) => {
        setVideoProgress(0)

        setShowOverlay(true)
        if (swiper.current !== null && swiper.current.swiper) {

            setTimeout(() => {
                swiper.current.swiper.slideNext();
            }, 1500);
        }

    }


    const handleSlideChangeButton = () => {
        setDisable(true)

        setShowOverlay(true)

        setTimeout(() => {

            const video = currentNewSlide.querySelector('video')

            setDisable(false)

            swiperSlide.slides?.forEach((slide, index) => {
                setShowOverlay(false)
                const currentVideo = slide.querySelector('video');
                video.currentTime = 0;
                currentVideo.pause();
            })
            swiper.current.swiper.slideNext();
            video.play();

        }, 2000)

    }



    const handleSliderChange = (swiper) => {


        setActiveIndex(swiper.realIndex);
        setActiveVideo(`video${swiper.realIndex + 1}`)
        setSwiperSlide(swiper)

        // console.log('current', currentNewSlide)

        // setShowOverlay(true)

        // // // Pause all videos except the current active slide
        setShowOverlay(false)

        swiper.slides?.forEach((slide, index) => {
            const video = slide.querySelector('video');

            if (video) {
                if (index === swiper.activeIndex) {
                    video.play().catch(error => {
                        // Handle play promise rejection (e.g., already playing)
                        console.error('Failed to start video playback:', error);
                    });
                } else {
                    video.currentTime = 0
                    video.pause();
                }
            }


        });
    }



    // Function to handle slide change
    const handleSlideChange = () => {
        // setShowOverlay(false);
        setShowTitle(false)
        // Automatically hide overlay after 2 seconds
        const timeout = setTimeout(() => {
            // setShowOverlay(false);
            setShowTitle(true)
        }, 1000);

        // Clean up timeout on unmount or dependency change
        return () => clearTimeout(timeout);
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

    const getCurrentSlide = (swiper) => {
        const currentIndex = swiper.activeIndex;
        const totalSlides = swiper.slides.length;

        // Calculate the next index
        const nextIndex = (currentIndex + 1) % totalSlides;

        const currentSlide = swiper.slides[nextIndex];

        setSlideNewCurrent(currentSlide)


        // console.log('CurrentSlide', currentSlide)
    }


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


                            <button onClick={handleSlideChangeButton} disabled={disable} className="banner-next next-dexktop">
                                <img src="/assets/icons/arrow-right-long.svg" alt="Arrow Right" />
                            </button>

                        </div>
                    </div>
                    <div className='video-wrapper'>
                        <motion.div style={{ y, width: '100%', height: '100%' }} className='relative'>
                            <Swiper
                                // install Swiper modules
                                modules={[Autoplay, EffectFade, Pagination]}
                                spaceBetween={0}
                                slidesPerView={1}
                                effect={'fade'}
                                ref={swiper}
                                allowTouchMove={false}
                                loop={true}
                                onInit={(swiper) => getCurrentSlide(swiper)}
                                onSlideChange={(swiper) => { getCurrentSlide(swiper); handleSliderChange(swiper) }}
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
                                        <video muted autoPlay playsInline width='100%'
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
                                                                    <h1 style={{ textTransform: 'uppercase' }} className={Rufo.className}>
                                                                        <TextAnimation text={'PURSUIT OF PERFECTION'} />
                                                                    </h1>
                                                                    <h1 style={{ textTransform: 'uppercase' }} className={Rufo.className}>

                                                                    </h1>
                                                                </div>
                                                                {/* <div className='dicover-btn'>
                                                                    <Link href='#'>
                                                                        <p className={` ${SinHala.className}`}>
                                                                            DISCOVER MORE
                                                                            <span className='d-inline-block'>
                                                                                <img src="/assets/icons/discover-btn-arrow.svg" alt="Arrow Right" />
                                                                            </span>
                                                                        </p>
                                                                    </Link>
                                                                </div> */}
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
                                        <video muted autoPlay playsInline
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
                                                                    <h1 style={{ textTransform: 'uppercase' }} className={Rufo.className}>
                                                                        <TextAnimation text={'Create Exceptional'} />
                                                                    </h1>
                                                                    <h1 style={{ textTransform: 'uppercase' }} className={`${Rufo.className}`}>
                                                                        <TextAnimation text={'Experiences'} />
                                                                    </h1>
                                                                </div>
                                                                {/* <div className='dicover-btn'>
                                                                    <Link href='#'>
                                                                        <p className={` ${SinHala.className}`}>
                                                                            DISCOVER MORE
                                                                            <span className='d-inline-block'>
                                                                                <img src="/assets/icons/discover-btn-arrow.svg" alt="Arrow Right" />
                                                                            </span>
                                                                        </p>
                                                                    </Link>
                                                                </div> */}
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
                                        <video muted autoPlay playsInline
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
                                                                    <h1 style={{ textTransform: 'uppercase' }} className={`${Rufo.className}`}>
                                                                        <TextAnimation text={'PALM FLOWER'} />
                                                                    </h1>
                                                                </div>
                                                                {/* <div className='dicover-btn'>
                                                                    <Link href='#'>
                                                                        <p className={` ${SinHala.className}`}>
                                                                            DISCOVER MORE
                                                                            <span className='d-inline-block'>
                                                                                <img src="/assets/icons/discover-btn-arrow.svg" alt="Arrow Right" />
                                                                            </span>
                                                                        </p>
                                                                    </Link>
                                                                </div> */}
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
                                    <button onClick={handleMobilePrev} className="banner-prev"><BsArrowLeft /> </button>
                                    <button onClick={handleMobileNext} className="banner-next"><BsArrowRight /> </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div >
        </>
    )

}


export default BannerHome