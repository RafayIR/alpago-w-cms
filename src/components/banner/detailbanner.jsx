'use client'
import { Rufo, StadMitte } from "../../app/font"
import TextAnimation from "../../hooks/TextAnimation"
import { useData } from "../../hooks/useGetData"

const BannerDetail = () => {
    const data = useData()
    const detailBannerData = data?.data?.banner


    return (

        <>
            <div className='banner-wrapper detail-banner'>
                <div className='banner-black bg-black'>
                    <div className='video-wrapper'>
                        <div className="banner-img">
                            <img src={process.env.NEXT_PUBLIC_BASE_URL_LIVE + detailBannerData.bannerImg || `/assets/img/project-detail/palm-project.jpg`} alt={detailBannerData?.bannerTitle || 'banner Image'} />
                        </div>
                    </div>
                    <div className='banner--content'>
                        <div className='container-fluid p-0 h-container'>
                            <div className='row m-0'>
                                <div className='col-lg-12 p-0'>
                                    <span className="banner-label">{detailBannerData?.bannerSubtitle || 'Project'} /</span>
                                    <div className='banner-heading'>
                                        <h1 className={`${StadMitte.className}`}>
                                            <TextAnimation text={detailBannerData?.bannerTitle || 'Project'} />
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