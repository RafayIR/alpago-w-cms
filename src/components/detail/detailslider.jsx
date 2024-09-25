'use client'
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import 'swiper/scss';
import { StadMitte } from '../../app/font';
import { useData } from '../../hooks/useGetData';


const DetailSlider = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const data = useData()
    const detailSliderData = data?.data?.detailSlide?.projectAmenities?.detail_amenities


    const handleSlideChange = (swiper) => {
        setActiveSlideIndex(swiper.realIndex); // Update active slide index on slide change
    };



    const projectAmenitiesTitle = detailSliderData[activeSlideIndex]?.detail_amenities_title;



    // const projectAmenities = [
    //     `Swimming Pools`,
    //     'Private Beach Access',
    //     'In Room Dining',
    //     'Luxurious Rooms and Suites',
    //     'Valet Parking',
    // ]

    return (
        <>
            <section className="detail-slider-wrapper white">
                <div className="container-fluid p-0">
                    <div className="d-flex slider-row">
                        <div className="col-lg-4 col-md-4 col-12 p-0">
                            <div className="arrow-wrapper">
                                <div className='amenities-wrapper'>
                                    <ul>
                                        <li className={StadMitte.className}>
                                            {projectAmenitiesTitle}
                                        </li>
                                    </ul>
                                </div>

                                <div className="al-slider-arrow col-lg-4 p-0 d-flex">
                                    <button className="test-prev"><BsArrowLeft /> </button>
                                    <button className="test-next"><BsArrowRight /> </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-12 p-0">
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation, Autoplay, Pagination]}
                                speed={1200}
                                spaceBetween={0}
                                slidesPerView={1}
                                autoplay={false}
                                loop={true}
                                navigation={{
                                    nextEl: '.test-next',
                                    prevEl: '.test-prev',
                                }}
                                pagination={{ clickable: true, type: 'fraction', el: '.pagination' }}
                                scrollbar={{ draggable: false }}
                                onSlideChange={(swiper) => handleSlideChange(swiper)}
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
                                    detailSliderData?.map((item, i) => (
                                        <SwiperSlide key={i} className="swiper-slide">
                                            <div className='img-wrapper'>
                                                <img src={process.env.NEXT_PUBLIC_BASE_URL_LIVE + item.detail_amenities_gallery_img || `/assets/img/project-detail/detail-slider/slider-img-2.webp`} alt="Detail Image" />
                                            </div>
                                        </SwiperSlide>

                                    ))
                                }
                            </Swiper>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}



export default DetailSlider