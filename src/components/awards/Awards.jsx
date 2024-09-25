'use client'
// Import Swiper React components
import { useLayoutEffect, useState } from 'react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HalvarEng, SinHala, StadMitte } from '../../app/font';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import useWindowWidth from '../../hooks/useWindowWidth';
import 'swiper/scss';
import 'swiper/css/pagination';


const Awards = ({ noGap }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const windowWidth = useWindowWidth()

    const handleHover = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    }

    useLayoutEffect(() => {

        const getAwardsdata = () => {

            fetch('https://digitalgraphiks.co.uk/demo/alpago-properties-cms/api/page/awards', {
                cache: 'no-store'
            }).then(async (resp) => {
                let jsonData = await resp.json()
                setData(jsonData)
                setLoading(false)
            }).catch((err) => {
                setLoading(false)
                console.log(err)
            })
        }
        getAwardsdata()
    }, [])



    return (
        <>
            <section>
                <div className={`awards white ${noGap ? 'awards-gap' : ''}`}>


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

                                data?.data?.awards?.map((item, i) =>
                                (
                                    <SwiperSlide key={i} className="swiper-slide">
                                        <div
                                            className={`award-card ${activeIndex === i ? 'active' : ''}`}
                                            onMouseEnter={windowWidth > 767 ? () => handleHover(i) : undefined}
                                            onMouseLeave={windowWidth > 767 ? () => undefined : undefined}
                                            onClick={windowWidth < 767 ? () => handleHover(i) : undefined}
                                        >

                                            <div className="card-sizer"></div>
                                            <div className="card-content">
                                                <div className="card-image">
                                                    <img alt="Award Image" src={`${item.card_img}`} />
                                                </div>

                                                <div className="card-bottom">
                                                    <p className="my-0 text--color-small leading-trim">2014</p>
                                                    <p className={`${HalvarEng.className} my-0 leading-trim`}>AWARDS</p>
                                                </div>
                                            </div>
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

                                        </div>
                                    </SwiperSlide>
                                ))

                            }
                        </Swiper>

                    </div>
                </div>
            </section>

        </>
    )
}


export default Awards