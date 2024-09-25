import { Rufo } from "../../app/font"
import TextAnimation from "../../hooks/TextAnimation"
import { useData } from "../../hooks/useGetData"

const BlogLandingBanner = () => {
    const data = useData()
    const blogsBannerData = data?.data?.banner

    return (


        <>
            <div className='banner-wrapper contact-banner news-landing-banner'>
                <div className='banner-black bg-black'>
                    <div className='video-wrapper'>
                        <div className="banner-img">
                            <img src={process.env.NEXT_PUBLIC_BASE_URL_LIVE + blogsBannerData?.bannerImg || `/assets/img/banner/blog-landing-banner.png`} alt="Banner Image" />
                        </div>
                    </div>
                    <div className='banner--content'>
                        <div className='row m-0'>
                            <div className='col-lg-12 p-0'>
                                <div className='banner-heading'>
                                    <h1 className={`${Rufo.className}`}>
                                        <TextAnimation text={blogsBannerData?.bannerTitle.toUpperCase()} />
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


export default BlogLandingBanner;