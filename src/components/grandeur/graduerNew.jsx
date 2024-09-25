'use client'
import { useState, useRef, useEffect } from "react";
import data from "./data";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HiArrowRight } from "react-icons/hi2";
import { SinHala, StadMitte } from "../../app/font";
import 'swiper/scss';
import 'swiper/css/pagination';
import useWindowWidth from "../../hooks/useWindowWidth";


const GranduerNew = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleHover = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };


    return (
        <>
            <div className="insight-wrapper new-granduer">
                <div className="bg-grey" style={{ background: '#1A1A1A' }}>
                    <div className="container-fluid p-0">
                        <div className="al-heading">
                            <h2 style={{ textTransform: 'uppercase' }} className={`${StadMitte.className}`}>
                                The Alpago Experience
                            </h2>
                        </div>

                        <div className="accordion-wrapper">
                            <div className="row">
                                <div className="col-lg-6 col-xl-6  d-none d-lg-block">

                                    {

                                        <div className={`img-wrapper ${activeIndex !== null ? 'active' : ''}`} >
                                            <img
                                                src={activeIndex === 0 ? '/assets/img/granduer/rarity-in-luxury.png' : activeIndex === 1 ? '/assets/img/granduer/pioneering-standards.png' : activeIndex === 2 ? '/assets/img/granduer/innovation-luxury.png' : '/assets/img/granduer/grand-img-4.png'}
                                                alt="Insight image"
                                            />
                                        </div>
                                    }

                                </div>
                                <div className="col-lg-6 col-xl-6" >
                                    {
                                        data.map((item, index) => (
                                            <AccordionItem
                                                key={index}
                                                heading={item.heading}
                                                detail={item.detail}
                                                count={item.count}
                                                image={item.image}
                                                activeIn1dex={activeIndex}
                                                isOpen={activeIndex === index}
                                                onMouseEnter={() => handleHover(index)}
                                                onClick={() => handleHover(index)}
                                            />
                                        ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

//  accordionitem component
const AccordionItem = ({ heading, detail, isOpen, image, onMouseEnter, onClick, activeIndex }) => {
    const contentHeight = useRef();
    const imgHeight = useRef();
    const [height, setHeight] = useState('0px');
    const windowWidth = useWindowWidth()


    useEffect(() => {
        if (contentHeight.current) {
            setHeight(isOpen ? `${contentHeight.current.clientHeight + (windowWidth < 767 ? null : null) + imgHeight.current.scrollHeight}px` : '0px');
        }
    }, [isOpen])

    return (
        <div className={`wrapper ${isOpen ? "active" : ""}`}
            onMouseEnter={windowWidth > 991 ? onMouseEnter : undefined}
            onClick={windowWidth < 991 ? onMouseEnter : undefined}
        >
            <div className={`acc-wrapper d-flex ${isOpen ? 'active' : ''}`}>
                <button className={`question-container`}>
                    <h4 className={`${SinHala.className} question-content`}>{heading}</h4>
                </button>
            </div>
            <div className={`answer`} style={{ height: height, overflow: 'hidden' }}>
                <p ref={contentHeight} className={`${SinHala.className} answer-content`}>{detail}</p>
                <div ref={imgHeight} className={`img-wrapper pl-0 d-lg-none d-block ${activeIndex !== null ? 'active' : ''}`} >
                    <img
                        height="400"
                        src={image}
                        alt="Insight image"
                    />
                </div>
            </div>
        </div>
    );
};

export default GranduerNew