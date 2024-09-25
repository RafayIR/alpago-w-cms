'use client'
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { HiPlus } from 'react-icons/hi2';
import Link from 'next/link';
import { Rufo, StadMitte, HalvarEng, Halvar } from '../../app/font';

const mobileCardData = [
    {
        imgSrc: 'assets/img/news/luxury-awards.png',
        alt: 'Dubair-Villa',
        title: 'Luxury Reimagined - Alpago Properties Recognized for Two Prestigious Awards',
        newsDetail: '/news-detail',
        date: {
            day: '01.10',
            year: '2024'
        }
    },
    {
        imgSrc: 'assets/img/news/palm-flower-news.png',
        alt: 'Dubair-Villa',
        title: 'Alpago Properties Pioneers Smart Living with WiredScore’s Certification for Homes',

        date: {
            day: '01.10',
            year: '2024'
        }
    },
    {
        imgSrc: 'assets/img/news/wired-score.png',
        alt: 'Dubair-Villa',
        title: 'Palm Flower’s Uncompromised Architecture Collaboration Announcement with Foster + Partners',

        date: {
            day: '01.10',
            year: '2024'
        }
    }
];

const HomeNews = ({ home, title, expertise }) => {
    const component = useRef();
    const slider = useRef();
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)


        let ctx = gsap.context(() => {
            let panels = gsap.utils.toArray(".news-col");
            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: component.current,
                    start: "top +30",
                    pin: true,
                    scrub: true,
                    end: () => "+=" + slider.current.clientWidth,
                    markers: false
                }
            });
        }, component);
        return () => {

            ctx.revert();
            ScrollTrigger.refresh();
        }
    });

    return (
        <>
            <section className={`news-wrapper ${expertise ? 'expertise-gap' : ''} ${home ? 'white' : 'blogs-wrapper'} d-none d-md-block`} >
                <div>
                    <div ref={component} className="container-fluid p-0">
                        <div className="news-wrapper-heading">
                            <h2 className={`${StadMitte.className} leading-trim`}>
                                IN THE FOCUS
                            </h2>
                        </div>
                        <div className="container-fluid">
                            <div ref={slider} className='row news-row px-4 m-0'>
                                <div className='col-1 left px-4'>

                                </div>

                                <div className='col-md-9 col-12 left px-4 news-col'>
                                    <div className="news-card gsap-desktop">
                                        <Link className="card card--project btn-container" href="/news">
                                            <div className="card-sizer"></div>

                                            <div className="card-background-inner">
                                                <div className="card__background d-none d-lg-block">
                                                    <svg aria-hidden="true" className="card__outline">
                                                        <rect x="0.5" y="0.5" rx="1" width="2" height="2" pathLength="1"></rect>
                                                        <rect x="0.5" y="0.5" rx="1" width="2" height="2" pathLength="1"></rect>
                                                    </svg>
                                                </div>
                                                <div className="card-img">
                                                    <img src="assets/img/news/luxury-awards.png" alt="Dubai-Villa" />
                                                    <div className='plus-sign'>
                                                        <span className='sign-wrapper'>
                                                            <HiPlus />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-text">
                                                <div className="col--xs-6 col--md-2 pl-1:md card-text-title">
                                                    <p className={`${Rufo.className} leading-trim card-title`}>
                                                        Luxury Reimagined - Alpago Properties Recognized for Two Prestigious
                                                        Awards
                                                    </p>
                                                </div>
                                                <div className="col--xs-6 col--md-1 card-text-date">
                                                    <time dateTime="2021-11-01" className="row">
                                                        <span className="card-text-date-desk">
                                                            <span className={`${StadMitte.className} leading-trim`}>
                                                                01.10
                                                            </span>
                                                            <span className="card-text-date-desk-sm leading-trim">
                                                                2024
                                                            </span>
                                                        </span>
                                                    </time>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>



                                <div className='col-md-9 col-12 px-4 news-col'>
                                    <div className="news-card gsap-desktop">
                                        <Link className="card card--project btn-container" href="/news">
                                            <div className="card-sizer"></div>
                                            <div className="card-background-inner">
                                                <div className="card__background d-none d-lg-block">
                                                    <svg aria-hidden="true" className="card__outline">
                                                        <rect x="0.5" y="0.5" rx="1" width="2" height="2" pathLength="1"></rect>
                                                        <rect x="0.5" y="0.5" rx="1" width="2" height="2" pathLength="1"></rect>
                                                    </svg>
                                                </div>
                                                <div className="card-img">
                                                    <img src="assets/img/news/palm-flower-news.png" alt="Dubai-Villa" />
                                                    <div className='plus-sign'>
                                                        <span className='sign-wrapper'>
                                                            <HiPlus />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-text">
                                                <div className="col--xs-6 col--md-2 pl-1:md card-text-title">
                                                    <p className={`${Rufo.className} leading-trim card-title`}>
                                                        Alpago Properties Pioneers Smart Living with WiredScore’s Certification for Homes
                                                    </p>
                                                </div>
                                                <div className="col--xs-6 col--md-1 card-text-date">
                                                    <time dateTime="2021-11-01" className="row">
                                                        <span className="card-text-date-desk">
                                                            <span className={`${StadMitte.className} leading-trim`}>
                                                                01.10
                                                            </span>
                                                            <span className="card-text-date-desk-sm leading-trim">
                                                                2024
                                                            </span>
                                                        </span>
                                                    </time>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>



                                <div className='col-md-9 col-12 px-4 news-col'>
                                    <div className="news-card gsap-desktop">
                                        <Link className="card card--project btn-container" href="/news">
                                            <div className="card-sizer"></div>
                                            <div className="card-background-inner">
                                                <div className="card__background d-none d-lg-block">
                                                    <svg aria-hidden="true" className="card__outline">
                                                        <rect x="0.5" y="0.5" rx="1" width="2" height="2" pathLength="1"></rect>
                                                        <rect x="0.5" y="0.5" rx="1" width="2" height="2" pathLength="1"></rect>
                                                    </svg>
                                                </div>
                                                <div className="card-img">
                                                    <img src="assets/img/news/wired-score.png" alt="Dubai-Villa" />
                                                    <div className='plus-sign'>
                                                        <span className='sign-wrapper'>
                                                            <HiPlus />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-text">
                                                <div className="col--xs-6 col--md-2 pl-1:md card-text-title">
                                                    <p className={`${Rufo.className} leading-trim card-title`}>
                                                        Palm Flower’s Uncompromised Architecture Collaboration Announcement
                                                        with Foster + Partners
                                                    </p>
                                                </div>
                                                <div className="col--xs-6 col--md-1 card-text-date">
                                                    <time dateTime="2021-11-01" className="row">
                                                        <span className="card-text-date-desk">
                                                            <span className={`${StadMitte.className} leading-trim`}>
                                                                01.10
                                                            </span>
                                                            <span className="card-text-date-desk-sm leading-trim">
                                                                2024
                                                            </span>
                                                        </span>
                                                    </time>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`news-wrapper ${home ? 'white' : ''}  d-block d-md-none news-mobile`}>
                <div className="container-fluid p-0">
                    <div className="news-wrapper-heading">
                        <h2 className={`${StadMitte.className} leading-trim`}>
                            IN THE FOCUS
                        </h2>
                    </div>
                    <div className='row m-0'>
                        {mobileCardData.map((card, index) => (
                            <div key={index} className='col-md-9 col-12 p-0'>
                                <div className="news-card">
                                    <Link className="card card--project btn-container" href="/news">
                                        <div className="card-sizer"></div>

                                        <div className="card-background-inner">
                                            <div className="card-img">
                                                <img src={card.imgSrc} alt={card.alt} />

                                                <div className='plus-sign'>
                                                    <span className='sign-wrapper'>
                                                        <HiPlus />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-text">
                                            <div className="col col--xs-6 col--md-2 pl-1:md card-text-title">
                                                <p className={`leading-trim card-title ${Rufo.className}`}>
                                                    {card.title}
                                                </p>
                                            </div>
                                            <div className="col col--xs-6 col--md-1 card-text-date d-none d--block">
                                                <time dateTime="2021-11-01" className="row">
                                                    <span className="card-text-date-desk">
                                                        <span className={`${Rufo.className} leading-trim`}>
                                                            {card.date.day}
                                                        </span>
                                                        <span className="card-text-date-desk-sm leading-trim">
                                                            {card.date.year}
                                                        </span>
                                                    </span>
                                                </time>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >
        </>
    )
}
export default HomeNews