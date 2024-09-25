'use client'
// Import Swiper React components
import { useState } from 'react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HalvarEng, SinHala, StadMitte } from '../../app/font';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import useWindowWidth from '../../hooks/useWindowWidth';
import 'swiper/scss';
import 'swiper/css/pagination';

const awardData = [
    {
        card_img: '/assets/img/award/ultimate-awards.webp',
        card_heading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        card_content: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
    {
        card_img: '/assets/img/award/euromoney.webp',
        card_heading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        card_content: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
    {
        card_img: '/assets/img/award/build-real-estate.webp',
        card_heading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        card_content: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
    {
        card_img: '/assets/img/award/euromoney.webp',
        card_heading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        card_content: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
    {
        card_img: '/assets/img/award/build-real-estate.webp',
        card_heading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        card_content: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
]


const Awards = ({ noGap }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const windowWidth = useWindowWidth()

    const handleHover = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    }

    return (
        <>
            <section className={`awards white ${noGap ? 'awards-gap' : ''}`}>
                <div className="container-fluid p-0">
                    <div className="company-awards-header d-flex align-items-center">
                        <div className='company-title col-lg-4 col-xxl-5'>
                            <h2 className={` ${StadMitte.className}`}>AWARDS</h2>
                        </div>
                        <div className="al-slider-arrow col-lg-8 col-xxl-7 p-0 d-flex  justify-content-end align-items-center">
                            <button className="awards-prev"><BsArrowLeft /> </button>
                            <button className="m-0 awards-next"><BsArrowRight /> </button>
                        </div>
                    </div>
                </div>



                <div className="container-fluid p-0">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Autoplay, Pagination]}
                        speed={1500}
                        spaceBetween={0}
                        slidesPerView={3}
                        navigation={{
                            nextEl: '.awards-next',
                            prevEl: '.awards-prev',
                        }}
                        scrollbar={{ draggable: true }}
                        breakpoints={{
                            1024: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            640: {
                                slidesPerView: 2,
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
                            awardData?.map((item, i) =>
                            (
                                <SwiperSlide key={i} className="swiper-slide">
                                    <div
                                        className={`award-card ${activeIndex === i ? 'active' : ''}`}
                                        onMouseEnter={windowWidth > 767 ? () => handleHover(i) : undefined}
                                        onMouseLeave={windowWidth > 767 ? () => undefined : undefined}
                                        onClick={windowWidth < 767 ? () => handleHover(i) : undefined}
                                    >
                                        <div className="card-sizer"></div>
                                        <div className="card-hover ui-dark">
                                            <div className="card-top">
                                                <p className={`leading-trim ${SinHala.className}`}>{item.card_heading}</p>
                                                <p className={`leading-trim text--color-small ${SinHala.className}`}>{item.card_content}</p>
                                            </div>
                                            <div className="card-bottom">
                                                <p className="my-0 text--color-small leading-trim">2014</p>
                                                <p className={`${HalvarEng.className} my-0 leading-trim`}>AWARDS</p>
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <picture className="card-image">
                                                <img alt="Award Image" src={item.card_img} />
                                            </picture>

                                            <div className="card-bottom">
                                                <p className="my-0 text--color-small leading-trim">2014</p>
                                                <p className={`${HalvarEng.className} my-0 leading-trim`}>AWARDS</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                </div>
            </section>

        </>
    )
}


export default Awards