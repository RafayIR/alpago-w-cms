'use client'
import { Rufo, SinHala, StadMitte } from '../../../app/font'
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import TextAnimation from '../../../hooks/TextAnimation';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { useData } from '../../../hooks/useGetData';

const OurValue = () => {
    const data = useData()
    const ourValue = data?.data?.content?.values


    return (
        <>
            <section className="value-wrapper">
                <div className="value-bg bg-black">
                    <div className="container">
                        <div className="value-header">
                            <div className='al-about-arrow'>
                                <div className="al-slider-arrow col-lg-12 p-0 d-flex align-items-center">
                                    <button className="value-prev"><BsArrowLeft /> </button>
                                    <button className="m-0 value-next"><BsArrowRight /> </button>
                                </div>

                                <span className={`${Rufo.className} pagination`}></span>
                            </div>
                            <h2 className={`${StadMitte.className} val-heading`}>
                                <TextAnimation text={'VALUES'} />
                            </h2>
                        </div>
                        <div className='our-value-content'>
                            <div className='row'>
                                <div className='col-lg-6'>

                                </div>
                                <div className='col-lg-6'>
                                    <Swiper
                                        // install Swiper modules
                                        modules={[Navigation, Autoplay, Pagination]}
                                        speed={1200}
                                        spaceBetween={0}
                                        slidesPerView={1}
                                        navigation={{
                                            nextEl: '.value-next',
                                            prevEl: '.value-prev',
                                        }}

                                        pagination={{
                                            clickable: true,
                                            type: 'fraction',
                                            el: '.pagination'
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
                                        {
                                            ourValue?.map((value, i) => (
                                                <SwiperSlide key={i}>
                                                    <div className='content-para'>
                                                        <p className={`${SinHala.className}`}>
                                                            <span className='text-white'> {value.valuesPara1} </span>
                                                            {value.valuesPara2}
                                                        </p>
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurValue