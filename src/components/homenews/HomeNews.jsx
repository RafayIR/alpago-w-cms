'use client'
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { HiPlus } from 'react-icons/hi2';
import Link from 'next/link';
import { Rufo, StadMitte } from '../../app/font';
import { useData } from '../../hooks/useGetData';
import useFormattedData from '../../hooks/useFormattedDate'


const HomeNews = ({ home, expertise }) => {
    const data = useData()
    const [day, setDay] = useState(null)
    const [month, setMonth] = useState(null)
    const [year, setYear] = useState(null)
    const homeNewsData = data?.news
    const component = useRef();
    const slider = useRef();


    const formatDate = (date) => {
        const newDate = new Date(date);
        const day = newDate?.getDate().toString().padStart(2, '0'); // format day with leading zero
        const month = (newDate?.getMonth() + 1).toString().padStart(2, '0'); // months are 0-indexed, so add 1
        const year = newDate?.getFullYear();

        return { day, month, year }
    }



    useEffect(() => {
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
                                NEWS
                            </h2>
                        </div>
                        <div className="container-fluid">
                            <div ref={slider} className='row news-row px-4 m-0'>
                                <div className='col-1 left px-4'></div>
                                {homeNewsData?.slice(0, 4)?.map((item, index) => {

                                    let { day, month, year } = formatDate(item.date)

                                    return (
                                        <div key={index} className='col-md-9 col-12 left px-4 news-col'>
                                            <div className="news-card gsap-desktop">
                                                <Link className="card card--project btn-container" href={item.slug}>
                                                    <div className="card-sizer"></div>

                                                    <div className="card-background-inner">
                                                        <div className="card__background d-none d-lg-block">
                                                            <svg aria-hidden="true" className="card__outline">
                                                                <rect x="0.5" y="0.5" rx="1" width="2" height="2" pathLength="1"></rect>
                                                                <rect x="0.5" y="0.5" rx="1" width="2" height="2" pathLength="1"></rect>
                                                            </svg>
                                                        </div>

                                                        <div className="card-img" style={{ height: '300px' }}>
                                                            <img style={{ height: '100%', objectFit: 'cover' }} src={process.env.NEXT_PUBLIC_BASE_URL_LIVE + item?.home_thumbnail_image || '/assets/img/news/news-dubai-palm.webp'} alt="Dubai-Villa" />
                                                            <div className='plus-sign'>
                                                                <span className='sign-wrapper'>
                                                                    <HiPlus />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="card-text">
                                                        <div className="col--xs-6 col--md-2 pl-1:md card-text-title">
                                                            <p className={`${StadMitte.className} leading-trim card-title`}>
                                                                {item.title}
                                                            </p>
                                                        </div>
                                                        <div className="col--xs-6 col--md-1 card-text-date">
                                                            <time>
                                                                <span className="card-text-date-desk">
                                                                    <span className={`${StadMitte.className} leading-trim`}>
                                                                        {day}.{month}
                                                                    </span>
                                                                    <span className="card-text-date-desk-sm leading-trim">
                                                                        {year}
                                                                    </span>
                                                                </span>
                                                            </time>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* 
            <section className={`news-wrapper ${home ? 'white' : ''}  d-block d-md-none news-mobile`}>
                <div className="container-fluid p-0">
                    <div className="news-wrapper-heading">
                        <h2 className={`${StadMitte.className} leading-trim`}>
                            NEWS
                        </h2>
                    </div>
                    <div className='row m-0'>
                        {homeNewsData?.slice(0, 10)?.map((card, index) => {
                            const { day, month, year } = useFormattedData(item.date);


                            return (
                                < div key={index} className='col-md-9 col-12 p-0' >
                                    <div className="news-card">
                                        <Link className="card card--project btn-container" href={card.slug}>
                                            <div className="card-sizer"></div>

                                            <div className="card-background-inner">
                                                <div className="card-img">
                                                    <img src={process.env.NEXT_PUBLIC_BASE_URL_LIVE + card?.image || '/assets/img/news/news-dubai-palm.webp'} alt={card.alt} />

                                                    <div className='plus-sign'>
                                                        <span className='sign-wrapper'>
                                                            <HiPlus />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-text">
                                                <div className="col col--xs-6 col--md-2 pl-1:md card-text-title">
                                                    <p className="leading-trim card-title">
                                                        {card.title}
                                                    </p>
                                                </div>
                                                <div className="col col--xs-6 col--md-1 card-text-date d-none d--block">
                                                    <time dateTime="2021-11-01" className="row">
                                                        <span className="card-text-date-desk">
                                                            <span className={`${Rufo.className} leading-trim`}>
                                                                {day}.{month}
                                                            </span>
                                                            <span className="card-text-date-desk-sm leading-trim">
                                                                {year}
                                                            </span>
                                                        </span>
                                                    </time>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section > */}
        </>
    )
}
export default HomeNews