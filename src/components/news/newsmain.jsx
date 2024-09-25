
import { SinHala, StadMitte } from "../../app/font";
import SideBar from '../../components/news/sidebar';
import Link from "next/link";
import Image from "next/image";
import NewsLetter from "./newsletter";
import useWindowWidth from "../../hooks/useWindowWidth";

const NewsMain = ({ blogs, news }) => {
    const windowWidth = useWindowWidth()

    return (
        <>
            <section className="news-main">
                <div className="bg-black">

                    <div className="news-detail-row">

                        <div className="news-detail-rt">
                            <SideBar />
                        </div>


                        <div className="news-detail-lft">
                            <div className="blog-heading">
                                <h2 className={StadMitte.className}>
                                    Casa Del Sole Sets UAE Real Estate Record
                                </h2>
                            </div>
                            <div className="news-para">
                                <p className={`${SinHala.className}`}>
                                    {`Located on Palm Jumeirah’s Billionaires’ Row, Alpago Properties sold the double signature villa, Casa Del Sole, through broker B1 Properties.`}
                                </p>
                                <p className={`${SinHala.className}`}>
                                    {`The 8-bedroom ultra-luxury property is designed by Soata and CK Architecture.`}
                                </p>
                                <p className={`${SinHala.className}`}>
                                    {` Casa Del Sole has been built over four levels – basement, ground, first and second floor – on a plot of 28,000 sqft, and it has an enclosed area of about 25,000 sqft, making it the biggest signature villa in Alpago Properties’ collection of six located on Palm Jumeirah’s Frond G billionaire’s row, which competes with two of the most prestigious neighbourhoods in the world,
                            also known as "Billionaire's Row". They’re located on Manhattan’s 57th Street and the Bishops Avenue in London.`}
                                </p>
                                <p className={`${SinHala.className}`}>
                                    {`The sale set a new benchmark in the UAE’s real estate market and highlights the relentless demand for ultra-luxury property in Dubai, especially on Palm Jumeirah.`}
                                </p>
                                <p className={`${SinHala.className}`}>
                                    {` The previous most expensive villa was sold in Dubai in April for Dh280 which featured 7-star spa hotel facilities, Italian marble and a 70-metre private beach, among other top-class amenities.`}
                                </p>
                            </div>
                            <div className="news-para-img">
                                <img src="/assets/img/news/news-para-img.png" alt="News Image" />
                            </div>
                            <div className="news-para">
                                <p className={`${SinHala.className}`}>
                                    {`The Dh300 million-plus Casa Del Sole villa’s amenities include a home cinema, bowling alley, gym, hammam, sauna, infinity pool, jacuzzi, game room, and terrace seating area among others. It is also the largest signature villa on the Palm Jumeirah’s Billionaires’ Row, the developer said.`}
                                </p>
                                <p className={`${SinHala.className}`}>
                                    {` The name or nationality of the owner was not disclosed by the developer.`}
                                </p>
                            </div>
                            <div className="news-para-img">
                                <img src="/assets/img/news/news-para-img.png" alt="News Image" />
                            </div>
                            <div className="news-para">
                                <p className={`${SinHala.className}`}>
                                    {`  The Casa Del Sole will be finished by the first quarter of 2023 and will be the fourth signature villa to be completed in the series of six sets to shape the landscape of Billionaires’ Row on the Palm Jumeirah.`}
                                </p>
                                <p className={`${SinHala.className}`}>
                                    {` Entering the record books is a proud moment, but there is still plenty of more to come with more exciting project announcements just around the corner,” said Murat Ayyildiz, founder and chairman of Alpago Group.`}
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


                    <div className="newsletter-section">
                        <NewsLetter />
                    </div>


                    <div className="more-news-section">
                        <div className="news-heading-main">
                            <h2 className={StadMitte.className}>
                                More News
                            </h2>
                        </div>

                        <div className="news-landing-wrapper" style={{ paddingBottom: '1px' }}>
                            <div className="row news-col">
                                <div className="col-lg-3 col-md-6 col-12 col-1">
                                    <Link href='/news-detai'>
                                        <div className="news-card">
                                            <div className="news-card-img">
                                                <Image src="/assets/img/news-blog-image/news-blog-img-1.png" width={343} height={496} alt="News" />
                                                <div className="content-desc">
                                                    <div className="pill-txt">
                                                        <span className={StadMitte.className}>
                                                            NEWS
                                                        </span>
                                                    </div>

                                                    <div className="icon-arrow-tilt">
                                                        <Image src="/assets/icons/arrow-tilt-right-black.svg" width={343} height={496} alt="Arrow" />
                                                    </div>

                                                    <div className="news-heading">
                                                        <h4 className={StadMitte.className}>
                                                            Dubai to get Palm Flower with one penthouse per floor
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12 col-2">
                                    <Link href='/news-detai'>
                                        <div className="news-card">
                                            <div className="news-card-img">
                                                <Image src="/assets/img/news-blog-image/news-blog-img-2.png" width={343} height={496} alt="News" />
                                                <div className="content-desc">
                                                    <div className="pill-txt">
                                                        <span className={StadMitte.className}>
                                                            NEWS
                                                        </span>
                                                    </div>

                                                    <div className="icon-arrow-tilt">
                                                        <Image src="/assets/icons/arrow-tilt-right-black.svg" width={343} height={496} alt="Arrow" />
                                                    </div>

                                                    <div className="news-heading">
                                                        <h4 className={StadMitte.className}>
                                                            Dubai to get Palm Flower with one penthouse per floor
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-6 col-md-12 col-12 col-3">
                                    <Link href='/news-detail'>
                                        <div className="news-card">
                                            <div className="news-card-img">
                                                <Image src="/assets/img/news-blog-image/news-blog-img-3.png" width={594} height={496} alt="News" />
                                                <div className="content-desc">
                                                    <div className="pill-txt">
                                                        <span className={StadMitte.className}>
                                                            NEWS
                                                        </span>
                                                    </div>

                                                    <div className="icon-arrow-tilt">
                                                        <Image src="/assets/icons/arrow-tilt-right-black.svg" width={343} height={496} alt="Arrow" />
                                                    </div>

                                                    <div className="news-heading">
                                                        <h4 className={StadMitte.className}>
                                                            Dubai to get Palm Flower with one penthouse per floor
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default NewsMain;