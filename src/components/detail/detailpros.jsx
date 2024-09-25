import { Rufo, StadMitte } from "../../app/font";
import { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { detailData } from './detaildata'
import useWindowWidth from "../../hooks/useWindowWidth";
// Import Swiper React components
import { Navigation, Autoplay, Pagination, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/css/pagination';


const Detailpros = () => {
    const mobileWidth = useWindowWidth()
    const [activeKey, setActiveKey] = useState(null);

    const handleMouseEnter = (key) => {
        setActiveKey(key);
    };

    const handleMouseLeave = () => {
        setActiveKey(null);
    };

    const handleHover = (index) => {
        setActiveKey(prevIndex => (prevIndex === index ? null : index));
    }

    return (
        <>
            <section>
                <div className="pros-wrapper">
                    <div className="container-fluid p-0">
                        {
                            detailData.map((item, i) => (
                                <Accordion key={i} activeKey={activeKey}>
                                    <Accordion.Item eventKey={i}
                                        onMouseEnter={mobileWidth > 767 ? () => handleMouseEnter(i) : undefined}
                                        onMouseLeave={mobileWidth > 767 ? handleMouseLeave : undefined}
                                        onClick={mobileWidth < 767 ? () => handleHover(i) : undefined}
                                    >
                                        <div className="pros">
                                            <Accordion.Header>
                                                <div className="col-lg-4 col-md-4 col-1">
                                                    <div className="header-count">
                                                        <h3 className={Rufo.className}>
                                                            {item.header_count}
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 col-md-8 col-11">
                                                    <div className="pros-heading">
                                                        <h3 className={StadMitte.className}>
                                                            {item.heading}
                                                        </h3>
                                                    </div>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-4">

                                                    </div>

                                                    <div className="col-lg-8 col-md-8">
                                                        <Swiper
                                                            // install Swiper modules
                                                            modules={[Navigation, Autoplay]}
                                                            autoplay={true}
                                                            speed={1000}
                                                            spaceBetween={0}
                                                            slidesPerView={1}
                                                            loop={true}
                                                            navigation={{
                                                                nextEl: '.aso-next',
                                                                prevEl: '.aso-prev',
                                                            }}

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
                                                                },
                                                                0: {
                                                                    slidesPerView: 1
                                                                }
                                                            }}
                                                            className="swiper-container">
                                                            {item.image?.map((imgObj, i) => (
                                                                <SwiperSlide key={i}>
                                                                    <div className="img-wrapper">
                                                                        <img src={imgObj} alt="Palm Image" />
                                                                    </div>
                                                                </SwiperSlide>
                                                            ))}
                                                        </Swiper>


                                                        <div className="pros-para">
                                                            <p>
                                                                {item.para}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Accordion.Body>
                                        </div>
                                    </Accordion.Item>
                                </Accordion>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

const AccordionItem = ({ heading, count, detail, isOpen, onMouseEnter }) => {
    const contentHeight = useRef();
    const imgRef = useRef();
    return (
        <div className={`wrapper ${isOpen ? "active" : ""}`} onMouseEnter={onMouseEnter}>
            <div className={`acc-wrapper d-flex ${isOpen ? 'active' : ''}`}>
                <span className={`${SinHala.className} accordion-count ${isOpen ? 'active' : ''} `}>
                    {count}
                </span>
                <button
                    className={`question-container`}

                >
                    <h4 className={`${SinHala.className} question-content`}>{heading}</h4>
                    <span className={`arrow-icon  ${isOpen ? "active" : ""}`}>

                    </span>
                </button>
            </div>


            <div
                ref={contentHeight}
                className={`answer`}
                style={{
                    height: isOpen
                        ? `${contentHeight?.current?.scrollHeight + contentHeight.current?.clientHeight + contentHeight.current?.clientHeight + 40}px`
                        : "0px",
                    overflow: "hidden"
                }}
            >
                <p className={`${SinHala.className} answer-content`}>{detail}</p>
            </div>
        </div>
    );
};

export default Detailpros;