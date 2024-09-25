import { Rufo, StadMitte, Halvar } from "../../app/font";





const BlogsBanner = () => {



    return (
        <>
            <div className='blogs-detail-banner'>
                <div className="banner-img">
                    <img src="/assets/img/blogs/blog-detail-img.png" alt="Banner Image" />

                    <div className='banner--content'>
                        <div className="pill-txt">
                            <span className={StadMitte.className}>
                                Blogs
                            </span>
                        </div>
                        <div className='banner-heading'>
                            <h1 className={`${StadMitte.className}`}>
                                Investing in Dubai Real Estate :
                            </h1>
                            <h1 className={`${StadMitte.className}`}>
                                A Gateway to Luxury and High Returns
                            </h1>
                        </div>
                    </div>

                    <div className="date-wrapper">
                        <h3 className={StadMitte.className}>
                            DATE :
                        </h3>

                        <div className={`date ${Rufo.className}`}>
                            01.10
                            <span className={Halvar.className}>
                                2024
                            </span>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}


export default BlogsBanner;