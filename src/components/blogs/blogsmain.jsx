
import SideBar from "../news/sidebar";
import { SinHala, StadMitte } from "../../app/font";
import Link from "next/link";
import Image from "next/image";
import useWindowWidth from "../../hooks/useWindowWidth";

const BlogsMain = () => {
    const windowWidth = useWindowWidth()

    return (

        <>
            <section className="news-main blog-detail-wrapper">
                <div className="bg-black">

                    <div className="news-detail-row">

                        <div className="news-detail-rt">
                            <SideBar blogs={true} />
                        </div>


                        <div className="news-detail-lft">
                            <div className="blog-heading">
                                <h2 className={StadMitte.className}>
                                    Introduction
                                </h2>
                            </div>
                            <div className="news-para">
                                <p className={`${SinHala.className}`}>
                                    {`Dubai, known for its opulent lifestyle, cutting-edge architecture, and thriving business environment, has become a hotspot for real estate investors worldwide. The city offers a unique blend of luxury, strategic location, and high return on investment, making it an attractive destination for both seasoned and novice investors.`}
                                </p>

                                <p className={`${SinHala.className} mb-0`}>
                                    {`Dubai's journey from a small desert town to a bustling global city is nothing short of extraordinary. The discovery of oil in the 1960s marked the beginning of rapid development, but it was the city's visionary leadership that truly propelled its growth. By diversifying the economy and investing heavily in infrastructure, tourism, and real estate, Dubai has positioned itself as a leading international hub.`}
                                </p>
                            </div>
                            <div className="news-para-img">
                                <img src="/assets/img/blogs/news-detail-img-1.png" alt="News Image" />
                            </div>
                            <div className="blog-heading">
                                <h2 className={StadMitte.className}>
                                    The Appeal of Dubai Real Estate Market
                                </h2>
                            </div>
                            <div className="news-para">
                                <p className={`${SinHala.className}`}>
                                    {`Dubai's real estate market is renowned for its resilience and growth potential. The city’s strategic position as a global business hub, coupled with its world-class infrastructure, makes it a prime location for real estate investment. From luxurious beachfront properties to high-rise apartments with stunning city views, Dubai offers a diverse range of real estate options that cater to various investor preferences.`}
                                </p>
                                <p className={`${SinHala.className} mb-0`}>
                                    {`Dubai's journey from a small desert town to a bustling global city is nothing short of extraordinary. The discovery of oil in the 1960s marked the beginning of rapid development, but it was the city's visionary leadership that truly propelled its growth. By diversifying the economy and investing heavily in infrastructure, tourism, and real estate, Dubai has positioned itself as a leading international hub.`}
                                </p>
                            </div>
                            <div className="news-para-img">
                                <img src="/assets/img/blogs/news-detail-img-2.png" alt="News Image" />
                            </div>
                            <div className="blog-heading">
                                <h2 className={StadMitte.className}>
                                    The Luxury Factor
                                </h2>
                            </div>
                            <div className="news-para">
                                <p className={`${SinHala.className}`}>
                                    {`Dubai is synonymous with luxury. From the iconic Burj Khalifa to the stunning Palm Jumeirah, the city is home to some of the world’s most luxurious properties. Investing in Dubai real estate means not just owning a piece of property but a slice of the city’s luxurious lifestyle. The high standard of living, coupled with the city's safety and security, makes it an ideal location for those seeking a luxurious lifestyle.`}
                                </p>
                                <p className={`${SinHala.className}`}>
                                    {`Dubai’s real estate market boasts numerous exclusive developments that offer unparalleled luxury and amenities. From private beaches and infinity pools to world-class spas and concierge services, properties in these developments provide a lifestyle of unmatched opulence. Investing in such properties not only offers a premium living experience but also ensures high demand and excellent rental yields.`}
                                </p>
                                <p className={`${SinHala.className} mb-0`}>
                                    {`Dubai’s strategic geographical location at the crossroads of Europe, Asia, and Africa makes it a central hub for global trade and tourism. This strategic advantage significantly boosts the real estate market, as it attracts a steady influx of tourists, expatriates, and business professionals, all of whom contribute to the demand for residential and commercial properties.`}
                                </p>
                            </div>


                            {
                                windowWidth < 992 && (
                                    <div className="keep-up-wrapper">

                                        <h3 className={StadMitte.className}>
                                            Keep Up With Us
                                        </h3>

                                        <div className="mini-news-wrapper">
                                            <div className="row align-items-center mb-4">

                                                <div className="col-lg-3 col-md-3 col-sm-3 col-4">
                                                    <div className="img-wrapper">
                                                        <Image src='/assets/img/news-blog-image/mini-news/mini-news-1.png' width={222} height={222} />

                                                    </div>
                                                </div>

                                                <div className="col-lg-9 col-md-9 col-sm-9 col-8">
                                                    <div className="mini-news-desc">
                                                        <p className={StadMitte.className}>
                                                            Dubai to get Palm Flower with one penthouse per floor
                                                            Dubai to
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row align-items-center ">
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-4">
                                                    <div className="img-wrapper">
                                                        <Image src='/assets/img/news-blog-image/mini-news/mini-news-2.png' width={222} height={222} />

                                                    </div>
                                                </div>

                                                <div className="col-lg-9 col-md-9 col-sm-9 col-8">
                                                    <div className="mini-news-desc">
                                                        <p className={StadMitte.className}>
                                                            Dubai to get Palm Flower with one penthouse per floor
                                                            Dubai to
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>



                    <section className="blogs-landing-wrapper news-landing-wrappers">
                        <div className="news-heading-main">
                            <h2 className={StadMitte.className}>
                                More Blogs
                            </h2>
                        </div>


                        <div className="row blogs-row">
                            <div className="col-lg-6 col-12 left-col">
                                <Link href="/blogs-detail" className="blogs-card news-card">
                                    <div className="news-card-img">
                                        <Image src="/assets/img/blogs/blog-landing-img-1.png" width={343} height={496} alt="News" />

                                        <div className="pill-txt">
                                            <span className={StadMitte.className}>
                                                BLOGS
                                            </span>
                                        </div>
                                    </div>
                                    <div className="content-desc">
                                        <div className="news-heading">
                                            <h4 className={StadMitte.className}>
                                                Dubai to get Palm Flower with one penthouse per floor
                                            </h4>
                                        </div>

                                        <div className="view-more-wrapper">

                                            <span className={StadMitte.className}>
                                                View More
                                            </span>

                                            <div className="icon-arrow-tilt">
                                                <Image src="/assets/icons/arrow-tilt-right-black.svg" width={343} height={496} alt="Arrow" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-lg-6 col-12 rt-col">
                                <Link href="/blogs-detail" className="blogs-card blog-flex news-card">
                                    <div className="news-card-img">
                                        <Image src="/assets/img/blogs/blog-landing-img-3.png" width={1197} height={932} alt="Blogs" />

                                        <div className="pill-txt">
                                            <span className={StadMitte.className}>
                                                BLOGS
                                            </span>
                                        </div>
                                    </div>
                                    <div className="content-desc">
                                        <div className="news-heading">
                                            <h4 className={StadMitte.className}>
                                                Dubai to get Palm Flower with one penthouse per floor
                                            </h4>
                                        </div>

                                        <div className="view-more-wrapper">

                                            <span className={StadMitte.className}>
                                                View More
                                            </span>

                                            <div className="icon-arrow-tilt">
                                                <Image src="/assets/icons/arrow-tilt-right-black.svg" width={343} height={496} alt="Arrow" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/blogs-detail" className="blogs-card blog-flex news-card">
                                    <div className="news-card-img">
                                        <Image src="/assets/img/blogs/blog-landing-img-2.png" width={1197} height={932} alt="Blogs" />

                                        <div className="pill-txt">
                                            <span className={StadMitte.className}>
                                                BLOGS
                                            </span>
                                        </div>
                                    </div>
                                    <div className="content-desc">
                                        <div className="news-heading">
                                            <h4 className={StadMitte.className}>
                                                Dubai to get Palm Flower with one penthouse per floor
                                            </h4>
                                        </div>

                                        <div className="view-more-wrapper">

                                            <span className={StadMitte.className}>
                                                View More
                                            </span>

                                            <div className="icon-arrow-tilt">
                                                <Image src="/assets/icons/arrow-tilt-right-black.svg" width={343} height={496} alt="Arrow" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </section >
                </div>
            </section>

        </>
    )
}



export default BlogsMain