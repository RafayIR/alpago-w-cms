'use client'
import Image from 'next/image'
import {  SinHala } from '../../app/font'
import { useInView } from 'react-intersection-observer'



const HomeDesc = ({ home }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px -50% 0px'
    });

    const descData = [{
        title_1: 'alpago properties',
        title_2: 'where expertise meets elegance.',
        desc: `With a profound understanding of our sophisticated clientele, we meticulously craft every aspect of our developments to perfection. From exquisite design concepts to flawless execution, we ensure that each detail resonates with grandeur.`,
        descImage: '/assets/icons/alpago-logo-icon.svg'
    }]

    return (
        <>
            <section>
                <div className="desc-wrapper bg-black">
                    <div ref={ref} className="container-fluid">
                        {
                            descData.map((item, i) => (
                                <div key={i} className="desc-bg px-lg-5 px-md-3 home-gap">
                                    <div className='desc-img-wrapper'>
                                        <Image src={item.descImage} alt="Image" fill style={{ objectFit: 'contain' }} />
                                    </div>

                                    <h3 className={`${SinHala.className} desc-heading mb-0`}>
                                        {item.title_1}
                                    </h3>
                                    <h3 className={`${SinHala.className} desc-heading`}>
                                        {item.title_2}
                                    </h3>

                                    {
                                        !home ? <>
                                            <p className={`text--p1-large text--color-small ${SinHala.className}`}>
                                                {item.desc}
                                            </p>
                                        </>
                                            :
                                            <>
                                            </>
                                    }

                                </div>
                            ))
                        }


                        {/* {
                            home ?
                                <>
                                    <div className="al-count-wrapper">
                                        <div className="row justify-content-center">
                                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mb-5">
                                                <div className="al-funfact-item text-center">
                                                    <div className="al-funfact-content">
                                                        <div className={`al-funfact-number ${inView ? 'active' : ''}`}>
                                                            <h3 className={`${Rufo.className} text-white`}>
                                                                0
                                                            </h3>
                                                            <h3 className={`${Rufo.className} text-white`}>
                                                                1
                                                            </h3>
                                                            <h3 className={`${Rufo.className} text-white`}>
                                                                2
                                                            </h3>
                                                        </div>

                                                        <span className={`${HalvarEng.className} text-white`}>
                                                            ULTRA-LUXURY RESIDENCE
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="col-xl-3 col-lg-2 col-md-4 col-sm-6 col-6 mb-5">
                                                <div className="al-funfact-item text-center">
                                                    <div className="al-funfact-content">
                                                        <div className={`al-funfact-number ${inView ? 'active' : ''}`}>
                                                            <h3 className={`${Rufo.className} text-white`}>
                                                                2
                                                            </h3>
                                                            <h3 className={`${Rufo.className} text-white`}>
                                                                4
                                                            </h3>
                                                            <h3 className={`${Rufo.className} text-white`}>
                                                                6
                                                            </h3>
                                                        </div>

                                                        <span className={`${HalvarEng.className} text-white`}>
                                                            SIGNATURE VILLAS
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mb-5">
                                                <div className="al-funfact-item text-center">
                                                    <div className="al-funfact-content">
                                                        <div className={`al-funfact-number ${inView ? 'active' : ''}`}>
                                                            <h3 className={`${Rufo.className} text-white`}>
                                                                <TextAnimation text={`137,525`} />
                                                            </h3>
                                                            <h3 className={`${Rufo.className} text-white`}>
                                                                <TextAnimation text={`185,525`} />
                                                            </h3>
                                                            <h3 className={`${Rufo.className} text-white`}>
                                                                <TextAnimation text={`215,525`} />
                                                            </h3>
                                                        </div>

                                                        <span className={`${HalvarEng.className} text-white`}>
                                                            SQUARE FEET
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </>

                                :
                                <>

                                </>
                        } */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeDesc