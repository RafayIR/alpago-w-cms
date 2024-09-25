'use client'
import { Rufo } from "../../app/font"

const AboutBanner = ({ expertise }) => {
    return (
        <>
            <div className={`banner-wrapper about-banner ${expertise ? 'expertise-banner' : ''}`}>
                <div className='banner-black bg-black'>

                    <div className='video-wrapper'>
                        <video muted autoPlay playsInline loop width='100%'>
                            <source src="/assets/video/about_video.mp4" type="video/mp4" />
                        </video>
                        <div className='banner--content'>
                            <div className='container-fluid p-0 h-container'>
                                <div className='row m-0'>
                                    {
                                        expertise ?
                                            <>
                                                <div className='col-lg-12 p-0 col-md-12'>
                                                    <div className='banner-heading'>
                                                        <h1 className={`${Rufo.className}`}>
                                                            EXPERTISE
                                                        </h1>
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            <>
                                                <div className='col-lg-12 p-0'>
                                                    <div className='banner-heading'>
                                                        <h1 className={`${Rufo.className}`}>
                                                            ABOUT US
                                                        </h1>
                                                    </div>
                                                </div>
                                            </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default AboutBanner