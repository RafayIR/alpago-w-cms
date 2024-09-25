'use client'
import { useState } from 'react';
import { Rufo, SinHala, StadMitte } from '../../../app/font'
import Accordion from 'react-bootstrap/Accordion';
// import Reveal
import { gsap, ScrollTrigger } from "gsap/all"
import { useLayoutEffect, useRef } from "react";
import { useInView } from 'react-intersection-observer';


const AboutVision = () => {
    const [activeKey, setActiveKey] = useState("0");

    const handleAccordionClick = (eventKey) => {
        setActiveKey(eventKey === activeKey ? null : eventKey);
    };
    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: false,
        rootMargin: '0px 0px -50% 0px'
    });
    const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: false,
        rootMargin: '0px 0px -50% 0px'
    });
    // const component = useRef();
    // const slider = useRef()

    // useLayoutEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger)
    //     // Ensure both refs have current values
    //     if (!component.current || !slider.current) return;

    //     let paragraphs = gsap.utils.toArray(".al-content-wrapper"); // Select panels using gsap.utils.toArray if they are ".depart-img-wrapper"
    //     let panels = gsap.utils.toArray(".img-wrapper");// Create a context for the animation using gsap.context

    //     const totalHeight = (panels.length - 1) * panels[0].clientHeight;
    //     console.log(totalHeight)

    //     let ctx = gsap.context(() => {
    //         gsap.to(panels, {
    //             // yPercent: -70 * (panels.length),
    //             yPercent: -100 * (panels.length - 1),
    //             ease: 'none',
    //             scrollTrigger: {
    //                 trigger: component.current,
    //                 pin: true,
    //                 scrub: 1,
    //                 snap: 1 / panels.length,
    //                 start: 'top 40', // pin the element when its top reaches 80px from the top of the viewport
    //                 // end: () => "+=70%"  ,
    //                 end: () => `+=${totalHeight}`, // End the scroll when the panels end
    //                 onUpdate: (self) => {
    //                     panels.forEach((panel, index) => {
    //                         if (self.progress >= index / panels.length && self.progress < (index + 1) / panels.length) {
    //                             paragraphs[index].classList.add('active');
    //                         } else {
    //                             // Hide other paragraphs with fading effect
    //                             paragraphs[index].classList.remove('active')
    //                         }
    //                     });
    //                 }
    //             },
    //         });
    //     }, component.current);

    //     // Clean up GSAP context on unmount
    //     return () => ctx.revert();

    // }, []);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        // Ensure both refs have current values
        // if (!component.current || !slider.current) return;

        // let paragraphs = gsap.utils.toArray(".al-content-wrapper"); // Select panels using gsap.utils.toArray if they are ".depart-img-wrapper"
        // let panels = gsap.utils.toArray(".img-wrapper");// Create a context for the animation using gsap.context

        // const panelHeight = panels[0].clientHeight;
        // const totalHeight = (panels.length - 1) * panelHeight; 
        // Correct calculation

        // let ctx = gsap.context(() => {
        //     gsap.to(panels, {
        //         yPercent: -100 * (paragraphs.length),
        //         ease: 'none',
        //         scrollTrigger: {
        //             trigger: component.current,
        //             pin: true,
        //             scrub: 1,
        //             // snap: 1 / panels.length,
        //             start: 'top 40', // pin the element when its top reaches 80px from the top of the viewport
        //             end: () => `+=${totalHeight}`,
        //             // end: () => "+50%",
        //             onUpdate: (self) => {
        //                 panels.forEach((panel, index) => {
        //                     if (self.progress >= index / panels.length && self.progress < (index + 1) / panels.length) {
        //                         paragraphs[index].classList.add('active');
        //                     } else {
        //                         // Hide other paragraphs with fading effect
        //                         paragraphs[index].classList.remove('active')
        //                     }
        //                 });
        //             }

        //             // onUpdate: (self) => {
        //             //     panels.forEach((panel, index) => {
        //             //         const panelTop = panel.getBoundingClientRect().top;
        //             //         const panelBottom = panel.getBoundingClientRect().bottom;
        //             //         const viewportHeight = window.innerHeight;

        //             //         if (panelTop >= 0 && panelBottom <= viewportHeight) {
        //             //             paragraphs[index].classList.add('active');
        //             //         } else {
        //             //             paragraphs[index].classList.remove('active');
        //             //         }
        //             //     });
        //             // }

        //             // onUpdate: (self) => {
        //             //     panels.forEach((panel, index) => {
        //             //         const panelStart = index / panels.length;
        //             //         const panelEnd = (index + 1) / panels.length;
        //             //         const panelIsInViewport = self.progress >= panelStart && self.progress < panelEnd;

        //             //         if (panelIsInViewport) {
        //             //             const panelTop = panel.getBoundingClientRect().top;
        //             //             const panelBottom = panel.getBoundingClientRect().bottom;
        //             //             const viewportHeight = window.innerHeight;

        //             //             if (panelTop >= 0 && panelBottom <= viewportHeight) {
        //             //                 paragraphs[index].classList.add('active');
        //             //             } else {
        //             //                 paragraphs[index].classList.remove('active');
        //             //             }
        //             //         } else {
        //             //             paragraphs[index].classList.remove('active');
        //             //         }
        //             //     });
        //             // }

        //         },
        //     });
        // }, component.current);

        // Clean up GSAP context on unmount
        // return () => ctx.revert();

    }, []); // Ensure this effect runs only once on mount

    return (
        <>
            <section className="vis-wrapper white d-md-block d-none">
                {/* <div id='mission' className="vis-bg" ref={component}>
                    <div className="container">
                        <div className="row al-row">
                            <div className="col-lg-6 col-md-6">
                                <div className='al-content-wrapper'>
                                    <div className="al-header">
                                        <h3 className={`${StadMitte.className}`}>
                                            MISSION
                                        </h3>
                                    </div>
                                    <div className="al-para">
                                        <p className={`${SinHala.className}`}>
                                            At Alpago Properties, we aim to create exceptional living spaces that upgrade your lifestyle and foster thriving communities.
                                            We are committed to innovation, sustainability, and excellence in all our developments. Prioritizing quality, customer satisfaction,
                                            and strategic growth, we aim to be the leading real estate company that transforms dreams into reality and sets new standards in the market.
                                            Our dedicated team works tirelessly to ensure every project exceeds expectations and enriches the lives of our clients.

                                        </p>
                                    </div>
                                </div>
                                <div className='al-content-wrapper'>
                                    <div className="al-header">
                                        <h3 className={`${StadMitte.className}`}>
                                            VISION
                                        </h3>
                                    </div>
                                    <div className="al-para">
                                        <p className={`${SinHala.className}`}>
                                            We carry a vision to be the premier real estate developer, renowned for transforming landscapes into thriving,
                                            sustainable communities. Our vision is to lead the industry with innovative property solutions that embody excellence,
                                            integrity, and customer-centric values while enhancing the quality of life for residents. We are committed to
                                            shaping the future of real estate through sustainable practices,cutting-edge design, and a pursuit to deliver unparalleled value, we aim to set new benchmarks in the modern market
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div ref={slider} className="col-lg-6 col-md-6">
                                <div className="img-wrapper">
                                    <img src="/assets/img/about/mission.webp" alt="mission" />
                                </div>
                                <div className="img-wrapper">
                                    <img src="/assets/img/about/vision.webp" alt="vision" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div id='mission' className="vis-bg">
                    <div className="container">
                        <div ref={ref1} className="row al-row">
                            <div className="col-lg-6 col-md-6">
                                <div className={`al-content-wrapper ${inView1 ? 'animate' : ''}`}>
                                    <div className="al-header">
                                        <h3 className={`${StadMitte.className}`}>
                                            MISSION
                                        </h3>
                                    </div>
                                    <div className="al-para">
                                        <p className={`${SinHala.className}`}>
                                            Our mission is to curate exclusive, ultra-luxurious properties that embody the essence of artistry,
                                            aspiration, and individuality. Through meticulous attention to detail and an unwavering commitment
                                            to excellence, we aspire to create environments that inspire and empower our clientele to embrace
                                            their unique identities and elevate their lifestyles. With a confident approach to business presence,
                                            we aim to set new standards of distinction and sophistication, delivering peerless residences that
                                            embody the epitome of opulence and refinement.

                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="img-wrapper">
                                    <img src="/assets/img/about/mission.webp" alt="mission" />
                                </div>
                            </div>
                        </div>

                        <div ref={ref2} className="row al-row">
                            <div className="col-lg-6 col-md-6">
                                <div className={`al-content-wrapper ${inView2 ? 'animate' : ''}`}>
                                    <div className="al-header">
                                        <h3 className={`${StadMitte.className}`}>
                                            VISION
                                        </h3>
                                    </div>
                                    <div className="al-para">
                                        <p className={`${SinHala.className}`}>
                                            We carry a vision to be the premier real estate developer, renowned for transforming landscapes into thriving,
                                            sustainable communities. Our vision is to lead the industry with innovative property solutions that embody excellence,
                                            integrity, and customer-centric values while enhancing the quality of life for residents. We are committed to
                                            shaping the future of real estate through sustainable practices,cutting-edge design, and a pursuit to deliver unparalleled value, we aim to set new benchmarks in the modern market
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="img-wrapper">
                                    <img src="/assets/img/about/vision.webp" alt="vision" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div id='mobile-mission' className='accordion-wrapper white d-md-none d-block'>
                <Accordion activeKey={activeKey} onSelect={handleAccordionClick}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <div className="al-header">
                                <h3 className={`${Rufo.className}`}>
                                    MISSION
                                </h3>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="img-wrapper-accordion">
                                <img src="/assets/img/about/mission.webp" alt="Mission" />
                            </div>
                            <div className="al-para">
                                <p>
                                    Our mission is to curate exclusive, ultra-luxurious properties that embody the essence of artistry,
                                    aspiration, and individuality. Through meticulous attention to detail and an unwavering commitment
                                    to excellence, we aspire to create environments that inspire and empower our clientele to embrace
                                    their unique identities and elevate their lifestyles. With a confident approach to business presence,
                                    we aim to set new standards of distinction and sophistication, delivering peerless residences that
                                    embody the epitome of opulence and refinement.
                                </p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <h3 className={`${Rufo.className}`}>
                                VISION
                            </h3>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="img-wrapper-accordion">
                                <img src="/assets/img/about/vision.webp" alt="Vision" />
                            </div>
                            <div className="al-para">
                                <p>
                                    To redefine the paradigm of luxury real estate by seamlessly blending art, aspiration,
                                    and bold business acumen, crafting unparalleled living experiences
                                    that transcend conformity and elevate the essence of elite international luxury.
                                </p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

        </>
    )
}


export default AboutVision