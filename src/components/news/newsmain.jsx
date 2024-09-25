
import { SinHala, StadMitte } from "../../app/font";
import SideBar from '../../components/news/sidebar';
import Link from "next/link";
import Image from "next/image";
import NewsLetter from "./newsletter";
import useWindowWidth from "../../hooks/useWindowWidth";
import { useData } from "../../hooks/useGetData";

const NewsMain = () => {
    const windowWidth = useWindowWidth()
    const data = useData()
    const newsDetailData = data?.data?.news?.description?.detail_group
    const moreNewsData = data?.data?.morenews

    return (
        <>
            <section className="news-main">
                <div className="bg-black">

                    <div className="news-detail-row">

                        <div className="news-detail-rt">
                            <SideBar titleData={newsDetailData} moreData={moreNewsData} data={data} />
                        </div>
                        <div className="news-detail-lft">
                            {
                                newsDetailData?.map((item, i) => (
                                    <div key={i}>
                                        <div className="blog-heading">
                                            <h2 className={StadMitte.className}>
                                                {item.detail_title}
                                            </h2>
                                        </div>
                                        <div className="news-para">
                                            {
                                                item.detail_description.split('\r\n\r\n')?.map((paragraph, index) => (
                                                    <p key={index + 1} className={`${SinHala.className}`}>
                                                        {paragraph}
                                                    </p>
                                                ))
                                            }
                                        </div>
                                        <div className="news-para-img">
                                            <img src={process.env.NEXT_PUBLIC_BASE_URL_LIVE + item.detail_image} alt="News Image" />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        {
                            windowWidth < 992 && (
                                <div className="keep-up-wrapper">

                                    <h3 className={StadMitte.className}>
                                        Keep Up With Us
                                    </h3>

                                    <div className="mini-news-wrapper">
                                        {
                                            moreNewsData?.map((item, i) => (
                                                <div key={i} className="row align-items-center mb-4">
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-4">
                                                        <div className="img-wrapper">
                                                            <Image src={process.env.NEXT_PUBLIC_BASE_URL_LIVE + item?.image} width={222} height={222} />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-9 col-md-9 col-sm-9 col-8">
                                                        <div className="mini-news-desc">
                                                            <p className={StadMitte.className}>
                                                                {item?.title}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                        }

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

                                {
                                    moreNewsData?.slice(0, 3)?.map((item, i) => {
                                        const colClass = i < 3 ? `col-${i + 1}` : ``; // Logic to switch class for the last three columns
                                        return (
                                            <div key={i} className={`col-lg-3 col-md-6 col-12 ${colClass}`} >
                                                <Link target="_blank" href={item?.link}>
                                                    <div className="news-card">
                                                        <div className="news-card-img">
                                                            <Image src={process.env.NEXT_PUBLIC_BASE_URL_LIVE + item?.image || `/assets/img/news-blog-image/news-blog-img-1.png`} width={343} height={496} alt="News" />
                                                            <div className="content-desc">
                                                                <div className="pill-txt">
                                                                    <span className={StadMitte.className}>
                                                                        NEWS
                                                                    </span>
                                                                </div>

                                                                <div className="icon-arrow-tilt">
                                                                    <Image src="/assets/icons/arrow-tilt-right-black.svg" width={343} height={496} alt="Arrow" />
                                                                </div>


                                                                <div className="card--body p-0">
                                                                    <div className="news-heading">
                                                                        <h4 className={StadMitte.className}>
                                                                            {item?.title || 'title'}
                                                                        </h4>
                                                                    </div>
                                                                    <div className="news-desc">
                                                                        {
                                                                            item?.desc && (
                                                                                <p>
                                                                                    {item?.detail_title || 'Desc'}
                                                                                </p>
                                                                            )
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default NewsMain;