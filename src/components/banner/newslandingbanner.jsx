import { Rufo } from "../../app/font"
import TextAnimation from "../../hooks/TextAnimation"
import { useData } from "../../hooks/useGetData"

const NewsLandingBanner = () => {

    const data = useData()
    const NewsBannerData = data?.data?.banner

    return (
        <>
            <div className='banner-wrapper contact-banner news-landing-banner'>
                <div className='banner-black bg-black'>
                    <div className='video-wrapper'>
                        <div className="banner-img">
                            <img src={process.env.NEXT_PUBLIC_BASE_URL_LIVE + `${NewsBannerData?.bannerImg || `/assets/img/banner/news-landing-banner.png`}`} alt="Banner Image" />
                        </div>
                    </div>
                    <div className='banner--content'>
                        <div className='row m-0'>
                            <div className='col-lg-12 p-0'>
                                <div className='banner-heading'>
                                    <h1 className={`${Rufo.className}`}>
                                        <TextAnimation text={NewsBannerData?.bannerTitle || 'Title'} />
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default NewsLandingBanner;