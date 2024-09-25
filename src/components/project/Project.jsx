'use client'
import Link from 'next/link';
import TextAnimation from '../../hooks/TextAnimation';
import { StadMitte } from '../../app/font';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import 'swiper/scss';

import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { useData } from '../../hooks/useGetData';



const HomeProject = () => {
    const data = useData()
    const projectData = data?.project
    const component = useRef();
    const slider = useRef();
    const heading = useRef();
    const companyProjHeader = useRef(null);


    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        let ctx = gsap.context(() => {

            let sliderWidth = slider.current.offsetWidth + window.innerWidth;
            let panels = gsap.utils.toArray(".panels");
            // const headerWidth = companyProjHeader.current.offsetWidth;
            let panelWidth = panels[0]?.offsetWidth; // Assuming all panels have the same width
            let maxScroll = (panels.length - 1) * panelWidth; // Calculate maximum scroll position
            gsap.to(panels, {
                // xPercent: -100 * (panels.length - 1.5),
                x: -maxScroll,
                ease: "none",
                scrollTrigger: {
                    trigger: component.current,
                    start: () => {
                        // Check screen width
                        if (window.innerWidth < 991) {
                            // If less than 767px, start from the middle
                            return "center center";
                        } else {
                            // Otherwise, start from "top -80"
                            return "top +80";
                        }
                    },
                    pin: true,
                    scrub: true,
                    // snap: 1 / (panels.length - 1),
                    // end: () => "+=2500",
                    // end: () => "+=" + slider.current.clientWidth,
                    end: () => '+=' + sliderWidth + 'px',
                    markers: false,

                }
            });

            // Animation for the heading
            // gsap.to(heading.current, {
            //     x: -headerWidth,
            //     ease: "none",
            //     scrollTrigger: {
            //         trigger: component.current,
            //         start: "top -80",
            //         scrub: 1,
            //         snap: 1 / (panels.length - 1),
            //         end: () => "+=" + (maxScroll - 10), // Adjust the end value here
            //         markers: false,
            //     }
            // });


        }, component);
        return () => ctx.revert();
    });

    const handleButtonClick = (direction) => {
        let panels = gsap.utils.toArray(".panel");
        let panelWidth = panels[0]?.offsetWidth; // Assuming all panels have the same width
        let maxScroll = (panels.length - 1) * panelWidth; // Calculate maximum scroll position

        // Calculate the new scroll position based on direction
        let scrollAmount = direction === "forward" ? "-=" + panelWidth : "+=" + panelWidth;

        // Ensure not to exceed the maximum scroll position
        let currentX = gsap.getProperty(".panel", "x");
        let newX = currentX + (direction === "forward" ? -panelWidth : panelWidth);
        newX = Math.max(-maxScroll, Math.min(0, newX));

        // Trigger GSAP animation to scroll horizontally
        gsap.to(".panel", { x: newX, duration: 1 });
    };

    return (
        <>
            <section className='project bg-black'>
                <div id='project' className="projects-wrapper" ref={component}>
                    <div className='container-fluid p-0'>
                        <div className="company-proj-header d-flex align-items-md-start">
                            <div className="proj-heading col-12 text-start" ref={heading}>
                                {/* <div className='container' ref={companyProjHeader}>
                                    <h3 className={`${Rufo.className}`}>
                                        <TextAnimation text={'PROJECTS'} />
                                    </h3>
                                </div> */}
                                <h3 className={`${StadMitte.className}`}>
                                    <TextAnimation text={'PROJECTS'} />
                                </h3>
                            </div>
                            {/* <div className="al-slider-arrow col-lg-4 d-flex align-items-center">
                                <button onClick={() => handleButtonClick("backward")} className="test-prev"><BsArrowLeft /> </button>
                                <button onClick={() => handleButtonClick("forward")} className="test-next"><BsArrowRight /> </button>
                            </div> */}
                        </div>
                    </div>

                    <div className="container-fluid container-scroll p-0">
                        <div ref={slider} className='row m-0'>
                            {
                                projectData?.map((item, i) => (
                                    <div key={i} className='col-lg-6 col-md-8 col-12 px-4 panels'>
                                        <div className="panel">
                                            <Link target='_blank' href={`detail/${item.slug}`}>
                                                <div className="card border-0">
                                                    <div className='card-img-wrapper'>
                                                        <img src={process.env.NEXT_PUBLIC_BASE_URL_LIVE + item?.image} className="card-img-top" alt={item.title} />
                                                        <div className='plus-sign'>
                                                            <div className='sign-wrapper'>
                                                                <img src="/assets/icons/arrow-tilt-right.svg" alt="Arrow" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className='card-title'>
                                                            <h4 className={`${StadMitte.className}`}>{item?.title}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}


export default HomeProject