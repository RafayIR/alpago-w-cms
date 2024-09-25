
import { StadMitte } from "../../app/font";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PaginationNumber from "../common/Pagination";
import { useData } from "../../hooks/useGetData";


const BlogsLanding = () => {
    const data = useData()
    const blogsData = data?.data?.blog
    const router = useRouter()
    const page = data?.data.pagination
    const [currentPage, setCurrentPage] = useState(page?.currentPage);
    const pageSize = page?.pageSize;
    const totalPages = page?.totalPages; // Replace with your actual total pages

    const handlePageChange = async (newPage) => {
        setCurrentPage(newPage);
        router.push(`/blogs?page=${newPage}`)
        router.refresh()
    };



    return (
        <>

            <section className="blogs-landing-wrapper news-landing-wrappers">
                <div className="bg-black">
                    <div className="row blogs-row">
                        <div className="col-lg-6 col-12 left-col">
                            <Link href={`/blogs-detail/${blogsData[0]?.link}`} className={`blogs-card news-card ${blogsData[0] ? '' : ''}`} >
                                <div className="news-card-img">
                                    <Image
                                        src={blogsData[0]?.image ? `${process.env.NEXT_PUBLIC_BASE_URL_LIVE + blogsData[0]?.image}` : '/assets/img/blogs/blog-landing-img-1.png'} // Use default image if none exists
                                        width={343} height={496}
                                        style={{ height: '36vh', objectFit: 'fill' }}
                                        alt={blogsData[0]?.title}
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
                                            {blogsData[0]?.title}
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

                        {/* Render the remaining blog items in a single column */}
                        {
                            blogsData[1] && (
                                <div className="col-lg-6 col-12 rt-col">
                                    {blogsData?.slice(1, 3)?.map((item, index) => (
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


                    <div className="row blogs-row bottom">
                        <div className="col-lg-6 col-12 rt-col">
                            {blogsData.slice(3, 5)?.map((item, index) => (
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

                        {
                            blogsData[5] && (
                                <div className="col-lg-6 col-12 left-col">
                                    <Link href={`/blogs-detail/${blogsData[5]?.link}`} className="blogs-card news-card">
                                        <div className="news-card-img">
                                            <Image
                                                src={blogsData[5]?.image ? `${process.env.NEXT_PUBLIC_BASE_URL_LIVE + blogsData[5]?.image}` : ''} // Use default image if none exists
                                                width={553} height={496}
                                                style={{ height: '36vh', objectFit: 'fill' }}
                                                alt={blogsData[5]?.title}
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
                                                    {blogsData[5]?.title}
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
                            )
                        }



                    </div>

                    {/* <div className="row blogs-row">
                        <div className="col-lg-6 col-12 left-col">
                            <Link href="/blogs-detail" className="blogs-card news-card">
                                <div className="news-card-img">
                                    <Image src="/assets/img/blogs/blog-landing-img-1.png"
                                        width={343} height={496}
                                        alt="News" />

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

                    <div className="row blogs-row bottom">
                        <div className="col-lg-6 rt-col">

                            <Link href="/blogs-detail" className="blogs-card blog-flex news-card">
                                <div className="news-card-img">
                                    <Image src="/assets/img/blogs/blog-landing-img-4.png" width={882} height={699} alt="Blogs" />

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
                                    <Image src="/assets/img/blogs/blog-landing-img-5.png" width={882} height={699} alt="Blogs" />

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


                        <div className="col-lg-6 left-col">
                            <Link href="/blogs-detail" className="blogs-card news-card">
                                <div className="news-card-img">
                                    <Image src="/assets/img/blogs/blog-landing-img-6.png" width={2055} height={819} alt="News" />

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
                    </div> */}

                    <div className="pagination">
                        <div className="spacer">

                        </div>

                        <PaginationNumber
                            totalPages={totalPages}
                            currentPage={currentPage}
                            pageSize={pageSize}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </section >
        </>
    )
}



export default BlogsLanding;