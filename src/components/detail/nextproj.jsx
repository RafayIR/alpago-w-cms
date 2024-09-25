'use client'
import { SinHala } from "../../app/font"
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { HiPlus } from 'react-icons/hi2';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";


const NewProject = () => {


    return (
        <>
            <section className="next-proj-wrapper">
                <div className="container-fluid p-0">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Autoplay]}
                        speed={1200}
                        spaceBetween={0}
                        slidesPerView={1}
                        autoplay={false}
                        loop={true}
                        navigation={{
                            nextEl: '.proj-next',
                            prevEl: '.proj-prev',
                        }}
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
                        <SwiperSlide className="swiper-slide">
                            <div className="detail-img-container">
                                <img src="/assets/img/project-detail/kural-vista.webp" alt="Project" />

                                <span className="plus-sign">
                                    <HiPlus />
                                </span>

                                <div className="al-next-proj-title">
                                    <h3 className={` ${SinHala.className}`}>
                                        KURAL VISTA
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="detail-img-container">
                                <img src="/assets/img/project-detail/kural-vista.webp" alt="Project" />


                                <span className="plus-sign">
                                    <HiPlus />
                                </span>

                                <div className="al-next-proj-title">
                                    <h3 className={` ${SinHala.className}`}>
                                        KURAL VISTA
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>


                    <div className="al-slider-arrow d-flex">
                        <button className="proj-prev"><BsArrowLeft /> </button>
                        <button className="proj-next m-0"><BsArrowRight /> </button>
                    </div>
                </div>
            </section>
        </>
    )
}


export default NewProject