'use client'
import { Rufo , StadMitte} from "../../app/font"
import TextAnimation from "../../hooks/TextAnimation"

const BannerDetail = () => {



    return (

        <>
            <div className='banner-wrapper detail-banner'>
                <div className='banner-black bg-black'>
                    <div className='video-wrapper'>
                        <div className="banner-img">
                            <img src="/assets/img/project-detail/palm-project.jpg" alt="Banner Image" />
                        </div>
                    </div>
                    <div className='banner--content'>
                        <div className='container-fluid p-0 h-container'>
                            <div className='row m-0'>
                                <div className='col-lg-12 p-0'>
                                    <span className="banner-label">PROJECT /</span>
                                    <div className='banner-heading'>
                                        <h1 className={`${StadMitte.className}`}>
                                            <TextAnimation text={'PALM FLOWER'} />
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}


export default BannerDetail