'use client'
import { Rufo } from '../../app/font'
import { useInView } from 'react-intersection-observer'
import TextAnimation from '../../hooks/TextAnimation';
import NewDetail from './newdetail';
import Detailpros from './detailpros'
import { useData } from '../../hooks/useGetData';

const DetailAbout = () => {
    const data = useData()

    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px -50% 0px'
    });


    return (
        <>
            <NewDetail />

            <section className='proj-detail-area white'>
                <div className='container-fluid p-0'>
                    <div className='total-area-img' style={{ backgroundImage: `url('/assets/img/project-detail/plam-flower.jpg')` }}>
                        <div className='total-area-count'>
                            <span>TOTAL AREA</span>
                            <h2 className={` ${Rufo.className}`}>
                                <TextAnimation text={data?.data?.totalArea?.totalAreaCovered || ''} />
                                <sup className='sq-wrapper'>
                                    Sq.Ft
                                </sup>
                            </h2>
                        </div>
                    </div>
                </div>
            </section>


            <Detailpros />

            {/* <section className="vis-wrapper detail-about white">
                <div className="vis-bg">
                    <div className="container">
                        <div className="row al-row">
                            <div className="col-lg-6 col-md-6">
                                <div className="img-wrapper">
                                    <img src="/assets/img/project-detail/project-second-img.webp" alt="Project" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className='al-content'>
                                    <div className="al-header">
                                        <span>ABOUT</span>
                                        <h3 className={`${Rufo.className}`}>
                                            PROJECT
                                        </h3>
                                    </div>
                                    <div className="al-para">
                                        <p>

                                            Casa Del Sole is a modern-day palace, equipped with 8 bedrooms, 10 bathrooms,
                                            infinity pool, private gym, BBQ area, cinema, bar, bowling alley and exclusive
                                            underground parking for 15 cars. This exquisite unit, which spans 4 levels on a
                                            plot of 28,000 sq.ft, is the largest villa developed by Alpago Properties for now.
                                            The serene and tranquil atmosphere created by the natural surroundings, coupled with
                                            the azure waters of the Persian Gulf,
                                            provides a picturesque vista overlooking Atlantis, The Royal & Atlantis, The Palm.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


            {/* <section className='proj-detail-area white'>
                <div className='container-fluid p-0'>
                    <div className='total-area-img'>
                        <img src="/assets/img/project-detail/total-villa-img.webp" alt="" />

                        <div className='total-area-count'>
                            <span>TOTAL AREA</span>
                            <h2 className={` ${Rufo.className}`}>
                                <TextAnimation text={'28,0000 SQ'} />
                            </h2>
                        </div>
                    </div>
                </div>
            </section> */}


            {/* 
            <section className='proj-detail white'>
                <div className='container-fluid p-0'>
                    <div ref={ref} className='row proj-detail-count-row bottom'>
                        <div className='col-lg-3 col-md-3 col-sm-3 d-none d-sm-block proj-detail-count-col'>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-3 col-6 proj-detail-count-col'>
                            <div className='detail-count-wrapper'>
                                <div className='detail-count-title'>
                                    <span>
                                        CAR PARKING
                                    </span>
                                    <div className={`detail-count-wrap ${inView ? 'active' : ''}`}>
                                        <h4 className={`detail-count ${Rufo.className}`}>
                                            <TextAnimation text={`13`} />
                                        </h4>
                                        <h4 className={`detail-count ${Rufo.className}`}>
                                            15
                                        </h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-6 proj-detail-count-col'>
                            <div className='detail-count-wrapper d-block d-sm-none'>
                                <div className='detail-count-title'>
                                    <span>
                                        Bathrooms
                                    </span>
                                    <div className={`detail-count-wrap ${inView ? 'active' : ''}`}>
                                        <h4 className={`detail-count ${Rufo.className}`}>
                                            <TextAnimation text={`8`} />
                                        </h4>
                                        <h4 className={`detail-count ${Rufo.className}`}>
                                            10
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row proj-detail-count-row'>
                        <div className='col-lg-3 col-md-3 col-sm-3 col-12 proj-detail-count-col'>
                            <div className='detail-count-wrapper'>
                                <div className='detail-count-title'>
                                    <span>
                                        BATHROOMS
                                    </span>
                                    <div className={`detail-count-wrap ${inView ? 'active' : ''}`}>
                                        <h4 className={`detail-count ${Rufo.className}`}>
                                            <TextAnimation text={`3`} />
                                        </h4>
                                        <h4 className={`detail-count ${Rufo.className}`}>
                                            8
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-3 col-sm-3 d-none d-sm-block proj-detail-count-col'>
                            <div className='detail-count-wrapper'>
                            </div>
                        </div>


                        <div className='col-lg-6 col-md-6 col-sm-6 d-none d-sm-block proj-detail-count-col'>
                            <div className='detail-count-wrapper'>
                                <div className='detail-count-title'>
                                    <span>
                                        BED ROOMS
                                    </span>
                                    <div className={`detail-count-wrap ${inView ? 'active' : ''}`}>
                                        <h4 className={`detail-count ${Rufo.className}`}>
                                            4
                                        </h4>
                                        <h4 className={`detail-count ${Rufo.className}`}>
                                            10
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section> */}
        </>
    )
}


export default DetailAbout