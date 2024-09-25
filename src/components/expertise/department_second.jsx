'use client'
import { Rufo, SinHala, StadMitte } from "../../app/font"
import { useState } from 'react'
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";


const DepartmentSecond = () => {
    const component = useRef();
    const [slideCount, setSlideCount] = useState(1)

    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger)
        const images = gsap.utils.toArray(".right-element");
        const rightElements = gsap.utils.toArray(".left-content img");


        let ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: component.current,
                    start: "top top",
                    end: "+=750%",
                    pin: true,
                    scrub: true,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const currentIndex = Math.floor(progress * (images.length));
                        if (currentIndex < 5) {
                            setSlideCount(currentIndex + 1);
                            return
                        }
                    }
                }
            });


            images.forEach((img, i) => {

                if (images[i + 1]) {
                    tl.to(img, { opacity: 0 }, "+=0.5")
                        .to(images[i + 1], { opacity: 1 }, "<")
                        .to(rightElements, { yPercent: -(100 * (i + 1)), ease: "none" }, "<");
                }
            });
            tl.to({}, {}, "+=0.5");

        })

        // Cleanup function to kill scroll triggers on component unmount
        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <>
            <section className="department-wrapper">
                <div className="bg-black" ref={component}>
                    <div className="row exp-row pin">

                        <div className={`${Rufo.className} d-none d-md-block expert-slide-count`}>
                            <span className='circle'>
                                {slideCount}
                            </span>
                        </div>

                        <div className="col-lg-6 col-md-6 left-container">
                            <div className="left-content">

                                <img src="/assets/img/expertise/department.png" alt="department" />


                                <img src="/assets/img/expertise/department-2.webp" alt="department" />


                                <img src="/assets/img/expertise/department-3.webp" alt="department" />


                                <img src="/assets/img/expertise/department-4.webp" alt="department" />


                                <img src="/assets/img/expertise/department-2.webp" alt="department" />

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 right-container">
                            <div className="right-content depart-desc-wrapper">
                                <div className="depart-header">
                                    <h2 className={`${StadMitte.className}`}>
                                        OUR DEPARTMENTS
                                    </h2>
                                </div>
                                <div className="right-element">
                                    <div className="desc-para">
                                        <div className="sub-heading">
                                            <h4 className={SinHala.className}>
                                                MARKETING
                                            </h4>
                                        </div>
                                        <p className={SinHala.className}>
                                            Our services include a skilled in-house design and development team, dedicated fieldwork and site supervision,
                                            extensive in-house purchasing aligned with BOQs, and collaboration with distinguished architects.
                                        </p>
                                        <div className="team-title-wrapper">
                                            <div className="text-white">
                                                <h5 className={`${SinHala.className} `}>
                                                    HEAD OF MARKETING
                                                </h5>
                                                <span className={`${SinHala.className} mt-2 team-title`}>
                                                    MIKE ROSS
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="right-element">
                                    <div className="desc-para">
                                        <div className="sub-heading">
                                            <h4 className={SinHala.className}>
                                                DESIGN TEAM 2
                                            </h4>
                                        </div>
                                        <p className={SinHala.className}>
                                            Our services include a skilled in-house design and development team, dedicated fieldwork and site supervision,
                                            extensive in-house purchasing aligned with BOQs, and collaboration with distinguished architects.
                                        </p>
                                        <div className="team-title-wrapper">
                                            <div className="text-white">
                                                <h5 className={`${SinHala.className} `}>
                                                    HEAD OF MARKETING
                                                </h5>
                                                <span className={`${SinHala.className} mt-2 team-title`}>
                                                    MIKE ROSS
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="right-element">
                                    <div className="desc-para">
                                        <div className="sub-heading">
                                            <h4 className={SinHala.className}>
                                                DESIGN TEAM 3
                                            </h4>
                                        </div>
                                        <p className={SinHala.className}>
                                            Our services include a skilled in-house design and development team, dedicated fieldwork and site supervision,
                                            extensive in-house purchasing aligned with BOQs, and collaboration with distinguished architects.
                                        </p>
                                        <div className="team-title-wrapper">
                                            <div className="text-white">
                                                <h5 className={`${SinHala.className} `}>
                                                    HEAD OF MARKETING
                                                </h5>
                                                <span className={`${SinHala.className} mt-2 team-title`}>
                                                    MIKE ROSS
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="right-element">
                                    <div className="desc-para">
                                        <div className="sub-heading">
                                            <h4 className={SinHala.className}>
                                                DESIGN TEAM 4
                                            </h4>
                                        </div>
                                        <p className={SinHala.className}>
                                            Our services include a skilled in-house design and development team, dedicated fieldwork and site supervision,
                                            extensive in-house purchasing aligned with BOQs, and collaboration with distinguished architects.
                                        </p>
                                        <div className="team-title-wrapper">
                                            <div className="text-white">
                                                <h5 className={`${SinHala.className} `}>
                                                    HEAD OF MARKETING
                                                </h5>
                                                <span className={`${SinHala.className} mt-2 team-title`}>
                                                    MIKE ROSS
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="right-element">
                                    <div className="desc-para">
                                        <div className="sub-heading">
                                            <h4 className={SinHala.className}>
                                                DESIGN TEAM 5
                                            </h4>
                                        </div>
                                        <p className={SinHala.className}>
                                            Our services include a skilled in-house design and development team, dedicated fieldwork and site supervision,
                                            extensive in-house purchasing aligned with BOQs, and collaboration with distinguished architects.
                                        </p>
                                        <div className="team-title-wrapper">
                                            <div className="text-white">
                                                <h5 className={`${SinHala.className} `}>
                                                    HEAD OF MARKETING
                                                </h5>
                                                <span className={`${SinHala.className} mt-2 team-title`}>
                                                    MIKE ROSS
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}


export default DepartmentSecond