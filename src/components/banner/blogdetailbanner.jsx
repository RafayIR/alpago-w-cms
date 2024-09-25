import { Rufo, StadMitte, Halvar } from "../../app/font";
import { useData } from "../../hooks/useGetData";
import useFormattedDate from "../../hooks/useFormattedDate";




const BlogsBanner = () => {
    const data = useData()
    const date = data?.data?.blog?.date
    const { day, month, year } = useFormattedDate(date)
    const blogBannerData = data?.data?.banner


    return (
        <>
            <div className='blogs-detail-banner'>
                <div className="banner-img">
                    <img src={process.env.NEXT_PUBLIC_BASE_URL_LIVE + blogBannerData?.bannerImg} alt="Banner Image" />

                    <div className='banner--content'>
                        <div className="pill-txt">
                            <span className={StadMitte.className}>
                                Blogs
                            </span>
                        </div>
                        <div className='banner-heading'>
                            <h1 className={`${StadMitte.className}`}>
                                {blogBannerData?.bannerTitle}
                            </h1>
                        </div>
                    </div>

                    <div className="date-wrapper">
                        <h3 className={StadMitte.className}>
                            DATE :
                        </h3>

                        <div className={`date ${Rufo.className}`}>
                            {`${day}.${month}`}
                            <span className={Halvar.className}>
                                {year}
                            </span>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}


export default BlogsBanner;