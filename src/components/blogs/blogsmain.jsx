
import SideBar from "../news/sidebar";
import { SinHala, StadMitte } from "../../app/font";
import Link from "next/link";
import Image from "next/image";
import useWindowWidth from "../../hooks/useWindowWidth";
import { useData } from "../../hooks/useGetData";

const BlogsMain = () => {
    const windowWidth = useWindowWidth()
    const data = useData()
    const blogDetailData = data?.data?.blog?.description?.detail_group
    const moreBlogData = data?.data?.moreblog


    return (

        <>
            <section className="news-main blog-detail-wrapper">
                <div className="bg-black">

                    <div className="news-detail-row">

                        <div className="news-detail-rt">
                            <SideBar blogs={true} titleData={blogDetailData} moreData={moreBlogData} data={data} />
                        </div>


                        <div className="news-detail-lft">
                            {
                                blogDetailData?.map((item, i) => (
                                    <div key={i}>
                                        <div className="blog-heading">
                                            <h2 className={StadMitte.className}>
                                                {item.detail_title}
                                            </h2>
                                        </div>
                                        <div className="news-para">
                                            {
                                                item.detail_description.split('\r\n\r\n').map((paragraph, index) => (
                                                    <p key={index} className={`${SinHala.className}`}>
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



                            {
                                windowWidth < 992 && (
                                    <div className="keep-up-wrapper">

                                        <h3 className={StadMitte.className}>
                                            Keep Up With Us
                                        </h3>

                                        <div className="mini-news-wrapper">
                                            {
                                                moreBlogData?.map((item, i) => (
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
                    </div>



                    <section className="blogs-landing-wrapper news-landing-wrappers">
                        <div className="news-heading-main">
                            <h2 className={StadMitte.className}>
                                More Blogs
                            </h2>
                        </div>


                        <div className="row blogs-row">
                            <div className="col-lg-6 col-12 left-col">
                                <Link href={`/blogs-detail/${moreBlogData[0]?.link}`} className={`blogs-card news-card ${moreBlogData[0] ? '' : ''}`} >
                                    <div className="news-card-img">
                                        <Image
                                            src={moreBlogData[0]?.image ? `${process.env.NEXT_PUBLIC_BASE_URL_LIVE + moreBlogData[0]?.image}` : '/assets/img/blogs/blog-landing-img-1.png'} // Use default image if none exists
                                            width={343} height={496}
                                            style={{ height: '36vh', objectFit: 'fill' }}
                                            alt={moreBlogData[0]?.title}
                                        />
                                        <div className="pill-txt">
                                            <span className={StadMitte.className}>
                                                BLOGS
                                            </span>
                                        </div>
                                    </div>
                                    <div className="content-desc">
                                        <div className="news-heading">
                                            <h4 className={StadMitte.className}>
                                                {moreBlogData[0]?.title}
                                            </h4>
                                        </div>
                                        <div className="view-more-wrapper">
                                            <span className={StadMitte.className}>View More</span>
                                            <div className="icon-arrow-tilt">
                                                <Image
                                                    src="/assets/icons/arrow-tilt-right-black.svg"
                                                    width={343}
                                                    height={496}
                                                    alt="Arrow"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            {
                                moreBlogData[1] && (
                                    <div className="col-lg-6 col-12 rt-col">
                                        {moreBlogData?.slice(1, 3)?.map((item, index) => (
                                            <Link href={`/blogs-detail/${item.link}`} className="blogs-card blog-flex news-card" key={index}>
                                                <div className="news-card-img">
                                                    <Image
                                                        src={item.image ? `${process.env.NEXT_PUBLIC_BASE_URL_LIVE + item.image}` : '/assets/img/blogs/blog-landing-img-1.png'} // Use default image if none exists
                                                        width={1197} height={932}
                                                        alt={item.title}
                                                    />
                                                    <div className="pill-txt">
                                                        <span className={StadMitte.className}>
                                                            BLOGS
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="content-desc">
                                                    <div className="news-heading">
                                                        <h4 className={StadMitte.className}>
                                                            {item.title}
                                                        </h4>
                                                    </div>
                                                    <div className="view-more-wrapper">
                                                        <span className={StadMitte.className}>View More</span>
                                                        <div className="icon-arrow-tilt">
                                                            <Image
                                                                src="/assets/icons/arrow-tilt-right-black.svg"
                                                                width={343}
                                                                height={496}
                                                                alt="Arrow"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                )
                            }
                        </div>
                    </section >
                </div>
            </section>

        </>
    )
}



export default BlogsMain