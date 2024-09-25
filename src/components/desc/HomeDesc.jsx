'use client'
import Image from 'next/image'
import { SinHala } from '../../app/font'
import { useInView } from 'react-intersection-observer'
import { useData } from '../../hooks/useGetData';


const HomeDesc = ({ home }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px -50% 0px'
    });
    const data = useData()
    const aboutCompany = data?.data?.content?.about_company

    return (
        <>
            <section>
                <div className="desc-wrapper bg-black">
                    <div ref={ref} className="container-fluid">
                        <div className="desc-bg px-lg-5 px-md-3 home-gap">
                            <div className='desc-img-wrapper'>
                                <Image src={aboutCompany?.descImage} alt="Image" fill style={{ objectFit: 'contain' }} />
                            </div>

                            <h3 className={`${SinHala.className} desc-heading mb-0`}>
                                {aboutCompany?.title_1}
                            </h3>
                            <h3 className={`${SinHala.className} desc-heading`}>
                                {aboutCompany?.title_2}
                            </h3>
                            {
                                !home ? <>
                                    <p className={`text--p1-large text--color-small ${SinHala.className}`}>
                                        {aboutCompany?.desc}
                                    </p>
                                </>
                                    :
                                    <>
                                    </>
                            }

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeDesc