'use client'
import { Rufo, SinHala, StadMitte } from "../../app/font"
import { useState } from 'react'
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";



const Department = () => {
    const [slideCount, setSlideCount] = useState(1)
    const component = useRef();
    const slider = useRef();


    // useLayoutEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger)
    //     // Ensure both refs have current values
    //     if (!component.current || !slider.current) return;


    //     let paragraphs = gsap.utils.toArray(".desc-para");
    //     // Select panels using gsap.utils.toArray if they are ".depart-img-wrapper"
    //     let panels = gsap.utils.toArray(".depart-img-wrapper");

    //     // Create a context for the animation using gsap.context

    //     let ctx = gsap.context(() => {
    //         gsap.to(panels, {
    //             yPercent: -100 * (panels.length - 1),
    //             // ease: 'power1.inOut',
    //             scrollTrigger: {
    //                 trigger: component.current,
    //                 pin: true,
    //                 pinSpacer: false,
    //                 scrub: 1,
    //                 start: () => {
    //                     // Check screen width
    //                     if (window.innerWidth < 767) {
    //                         // If less than 767px, start from the middle
    //                         return "center center";
    //                     } else {
    //                         // Otherwise, start from "top -80"
    //                         return "top top";
    //                     }
    //                 }, // pin the element when its top reaches the top of the viewport
    //                 // end: "+=1000",
    //                 end: () => "+=" + slider.current.clientHeight,
    //                 onUpdate: (self) => {
    //                     self.scroll.smooth = true
    //                     panels.forEach((panel, index) => {
    //                         // Calculate the progress range for the current panel
    //                         const startProgress = index / panels.length;
    //                         const endProgress = (index + 1) / panels.length;

    //                         if (
    //                             (index === panels.length - 1 && self.progress >= startProgress) || // Last panel condition
    //                             (self.progress >= startProgress && self.progress < endProgress)
    //                         ) {
    //                             // Add 'active' class to the paragraph
    //                             paragraphs[index]?.classList.add('active');
    //                             setSlideCount(index + 1);
    //                         } else {
    //                             // Remove 'active' class from the paragraph
    //                             paragraphs[index]?.classList.remove('active');
    //                         }
    //                     });
    //                 }
    //             },
    //         });
    //     }, component.current);

    //     // Clean up GSAP context on unmount
    //     return () => ctx.revert();

    // }, []); // Ensure this effect runs only once on mount

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        // Ensure both refs have current values
        if (!component.current || !slider.current) return;
        let paragraphs = gsap.utils.toArray(".desc-para");
        // Select panels using gsap.utils.toArray if they are ".depart-img-wrapper"
        let panels = gsap.utils.toArray(".depart-img-wrapper");

        let ctx = gsap.context(() => {
            gsap.set([panels], { autoAlpha: 0 });
            gsap.set([paragraphs], { autoAlpha: 0 });
            // Create a ScrollTrigger instance for the entire component
            gsap.to(panels, {
                opacity: 1,
                stagger: 1,
                scrollTrigger: {
                    trigger: component.current,
                    pin: true,
                    scrub: true,
                    start: "top top",
                    end: `+=${(panels.length) * 100}%`,
                }
            });

            panels.forEach((panel, index) => {

                ScrollTrigger.create({
                    trigger: '.slider',
                    start: () => { return `top-=${(index + 1) * -100}% bottom` },
                    end: () => { return `top+=${(index + 1) * 100}% top` },
                    onEnter: () => {
                        gsap.to(panel, { autoAlpha: 1, duration: 0.8, })
                        setSlideCount(index + 1)
                        // Directly use classList to ensure the class is added
                        // paragraph.classList.add('active');
                        // console.log('active1')
                    },
                    onLeave: () => {
                        gsap.to(panel, { autoAlpha: 0, duration: 0.8, })
                        // Directly use classList to ensure the class is removed
                        // paragraph.classList.remove('active');
                        // console.log('active2')
                    },
                    onEnterBack: () => {
                        // Animate the panel's opacity
                        gsap.to(panel, { autoAlpha: 1, duration: 0.8 });
                        console.log(index)
                        setSlideCount((index + 2) - 1)
                        // paragraph.classList.add('active');
                        // console.log('active3')
                    },
                    onLeaveBack: () => {
                        // Animate the panel's opacity
                        gsap.to(panel, { autoAlpha: 0, duration: 0.8 });
                        // paragraph.classList.remove('active');
                        // console.log('active4')
                    },
                    markers: true // For debugging, remove or set to false when done
                });
            });


            paragraphs.forEach((para, index) => {

                ScrollTrigger.create({
                    trigger: '.slider',
                    start: () => { return `top-=${(index + 1) * -100}% bottom` },
                    end: () => { return `top+=${(index + 1) * 100}% top` },
                    onEnter: () => {
                        gsap.to(para, { autoAlpha: 1, duration: 0.3, })
                    },
                    onLeave: () => {
                        gsap.to(para, { autoAlpha: 0, duration: 0.3, })
                    },
                    onEnterBack: () => {
                        // Animate the para's opacity
                        gsap.to(para, { autoAlpha: 1, duration: 0.3 });
                    },
                    onLeaveBack: () => {
                        // Animate the para's opacity
                        gsap.to(para, { autoAlpha: 0, duration: 0.3 });
                    },
                    markers: true // For debugging, remove or set to false when done
                });
            });

            // Ensure the first panel is visible on load
            // ScrollTrigger.refresh();
        });

        // Clean up GSAP context on unmount
        return () => ctx.revert();

    }, []); // Ensure this effect runs only once on moun


    return (
        <>
            <section className="department-wrapper">
                <div className="bg-black" ref={component}>
                    <div className="container-fluid  p-0">
                        <div className="row exp-row" >

                            <div className={`${Rufo.className} d-none d-md-block expert-slide-count`}>
                                <span className='circle'>
                                    {slideCount}
                                </span>
                            </div>


                            <div className="slider col-lg-6 col-md-6">
                                <div className={`${Rufo.className} d-md-none d-block expert-slide-count`}>
                                    <span className='circle'>
                                        {slideCount}
                                    </span>
                                </div>
                                <div ref={slider} >
                                    <div className="depart-img-wrapper">
                                        <img src="/assets/img/expertise/department.png" alt="department" />
                                    </div>
                                    <div className="depart-img-wrapper">
                                        <img src="/assets/img/expertise/department-2.webp" alt="department" />
                                    </div>
                                    <div className="depart-img-wrapper">
                                        <img src="/assets/img/expertise/department-3.webp" alt="department" />
                                    </div>
                                    <div className="depart-img-wrapper">
                                        <img src="/assets/img/expertise/department-4.webp" alt="department" />
                                    </div>
                                    <div className="depart-img-wrapper">
                                        <img src="/assets/img/expertise/department-2.webp" alt="department" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">

                                <div className="depart-desc-wrapper">
                                    <div className="depart-header">
                                        <h2 className={`${StadMitte.className}`}>
                                            OUR DEPARTMENTS
                                        </h2>
                                    </div>
                                    <div className="desc-para">

                                        <div className="sub-heading">
                                            <h4 className={SinHala.className}>
                                                DESIGN TEAM 1
                                            </h4>
                                        </div>
                                        <p className={SinHala.className}>
                                            Our services include a skilled in-house design and development team, dedicated fieldwork and site supervision,
                                            extensive in-house purchasing aligned with BOQs, and collaboration with distinguished architects.
                                        </p>
                                    </div>
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
                                    </div>
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
                                    </div>
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
                                    </div>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Department