import { StadMitte } from "../../app/font"
import { useData } from "../../hooks/useGetData"

const NewsBanner = () => {
    const data = useData()
    const newsBannerData = data?.data

    return (
        <>
            <div className='news-detail-banner'>
                <div className='bg-black'>
                    <div className='banner--content'>
                        <div className='container-fluid p-0 h-container'>
                            <div className='row m-0'>
                                <div className='col-lg-12 p-0'>
                                    <div className='banner-heading'>
                                        <h1 className={`${StadMitte.className} `}>
                                            {newsBannerData?.news?.title}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-img">
                        <img src={process.env.NEXT_PUBLIC_BASE_URL_LIVE + newsBannerData?.banner?.bannerImg || `/assets/img/banner/news-banner.png`} alt="Banner Image" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsBanner