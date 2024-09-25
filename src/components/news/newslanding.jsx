
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { StadMitte } from "../../app/font";
import PaginationNumber from '../../components/common/Pagination';
import NewsLetter from './newsletter'
import { useData } from "../../hooks/useGetData";




const NewsLanding = () => {
    const data = useData()
    const newsData = data?.data?.news
    const router = useRouter()
    const page = data?.data.pagination
    const [currentPage, setCurrentPage] = useState(page?.currentPage);
    const pageSize = page?.pageSize;
    const totalPages = page?.totalPages; // Replace with your actual total pages


    const handlePageChange = async (newPage) => {
        setCurrentPage(newPage);
        router.push(`/news?page=${newPage}`)
        router.refresh()
    };




    useEffect(() => {


        // Assuming you're fetching new data based on the page
        // Example: fetchNewsData(currentPage).then(data => setNewsData(data));
        // const startIdx = (currentPage - 1) * pageSize;
        // const paginatedData = data?.data?.news.slice(startIdx, startIdx + pageSize);
        // setNewsData(paginatedData);


    }, []);



    return (
        <>
            <div className="news-landing-wrapper">
                <div className="bg-black">
                    <div className="row news-row" style={{ rowGap: '50px' }}>
                        {
                            newsData?.map((newsdesc, newsIndex) => (
                                newsdesc?.description?.detail_group?.map((item, i) => {
                                    const colClass = newsIndex < 3 ? `col-${newsIndex + 1}` : `col-${6 - newsIndex}`; // Logic to switch class for the last three columns
                                    return (
                                        <div key={i} className={`col-lg-3 col-md-6 col-12 ${colClass}`} >
                                            <Link target="_blank" href={newsdesc?.link}>
                                                <div className="news-card">
                                                    <div className="news-card-img">
                                                        <Image src={process.env.NEXT_PUBLIC_BASE_URL_LIVE + newsdesc?.image || `/assets/img/news-blog-image/news-blog-img-1.png`} width={343} height={496} alt="News" />
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
                                                                        {item?.detail_title || 'title'}
                                                                    </h4>
                                                                </div>
                                                                <div className="news-desc">
                                                                    <p>
                                                                        {item?.detail_title || 'Desc'}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })
                            ))
                        }
                    </div>
                    {/* <div className="row news-row">
                        <div className="col-lg-3 col-md-6 col-12 col-1">
                            <Link href='/news-detail'>
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


                                            <div className="card--body p-0">
                                                <div className="news-heading">
                                                    <h4 className={StadMitte.className}>
                                                        Dubai to get Palm Flower with one penthouse per floor
                                                    </h4>
                                                </div>
                                                <div className="news-desc">
                                                    <p>
                                                        {` Casa Del Sole has been built over four levels – basement, ground, first and second floor – on a plot of 28,000 sqft, and it has an enclosed area of about 25,000 sqft, making it the biggest signature villa in Alpago Properties’ collection of six located on Palm Jumeirah’s Frond G billionaire’s row, which competes with two of the most prestigious neighbourhoods in the world, also known as "Billionaire's Row". They’re located on Manhattan’s 57th Street and the Bishops Avenue in London.`}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>


                        <div className="col-lg-3 col-md-6 col-12 col-2">
                            <Link href='/news-detail'>
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

                                            <div className="card--body p-0">
                                                <div className="news-heading">
                                                    <h4 className={StadMitte.className}>
                                                        Dubai to get Palm Flower with one penthouse per floor
                                                    </h4>
                                                </div>
                                                <div className="news-desc">
                                                    <p>
                                                        {` Casa Del Sole has been built over four levels – basement, ground, first and second floor – on a plot of 28,000 sqft, and it has an enclosed area of about 25,000 sqft, making it the biggest signature villa in Alpago Properties’ collection of six located on Palm Jumeirah’s Frond G billionaire’s row, which competes with two of the most prestigious neighbourhoods in the world, also known as "Billionaire's Row". They’re located on Manhattan’s 57th Street and the Bishops Avenue in London.`}
                                                    </p>
                                                </div>
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

                                            <div className="card--body p-0">
                                                <div className="news-heading">
                                                    <h4 className={StadMitte.className}>
                                                        Dubai to get Palm Flower with one penthouse per floor
                                                    </h4>
                                                </div>
                                                <div className="news-desc">
                                                    <p>
                                                        {` Casa Del Sole has been built over four levels – basement, ground, first and second floor – on a plot of 28,000 sqft, and it has an enclosed area of about 25,000 sqft, making it the biggest signature villa in Alpago Properties’ collection of six located on Palm Jumeirah’s Frond G billionaire’s row, which competes with two of the most prestigious neighbourhoods in the world, also known as "Billionaire's Row". They’re located on Manhattan’s 57th Street and the Bishops Avenue in London.`}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div> */}
                    {/* <div className="row news-row">
                        <div className="col-lg-6 col-md-6 col-12 col-3">
                            <Link href='/news-detail'>
                                <div className="news-card">
                                    <div className="news-card-img">
                                        <Image src="/assets/img/news-blog-image/news-blog-img-4.png" width={343} height={496} alt="News" />
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
                                                        Dubai to get Palm Flower with one penthouse per floor
                                                    </h4>
                                                </div>
                                                <div className="news-desc">
                                                    <p>
                                                        {` Casa Del Sole has been built over four levels – basement, ground, first and second floor – on a plot of 28,000 sqft, and it has an enclosed area of about 25,000 sqft, making it the biggest signature villa in Alpago Properties’ collection of six located on Palm Jumeirah’s Frond G billionaire’s row, which competes with two of the most prestigious neighbourhoods in the world, also known as "Billionaire's Row". They’re located on Manhattan’s 57th Street and the Bishops Avenue in London.`}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>


                        <div className="col-lg-3 col-md-6 col-12 col-2">
                            <Link href='/news-detail'>
                                <div className="news-card">
                                    <div className="news-card-img">
                                        <Image src="/assets/img/news-blog-image/news-blog-img-5.png" width={343} height={496} alt="News" />
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
                                                        Dubai to get Palm Flower with one penthouse per floor
                                                    </h4>
                                                </div>
                                                <div className="news-desc">
                                                    <p>
                                                        {` Casa Del Sole has been built over four levels – basement, ground, first and second floor – on a plot of 28,000 sqft, and it has an enclosed area of about 25,000 sqft, making it the biggest signature villa in Alpago Properties’ collection of six located on Palm Jumeirah’s Frond G billionaire’s row, which competes with two of the most prestigious neighbourhoods in the world, also known as "Billionaire's Row". They’re located on Manhattan’s 57th Street and the Bishops Avenue in London.`}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>


                        <div className="col-lg-3 col-md-12 col-12 col-1">
                            <Link href='/news-detail'>

                                <div className="news-card">
                                    <div className="news-card-img">
                                        <Image src="/assets/img/news-blog-image/news-blog-img-6.png" width={594} height={496} alt="News" />
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
                                                        Dubai to get Palm Flower with one penthouse per floor
                                                    </h4>
                                                </div>
                                                <div className="news-desc">
                                                    <p>
                                                        {` Casa Del Sole has been built over four levels – basement, ground, first and second floor – on a plot of 28,000 sqft, and it has an enclosed area of about 25,000 sqft, making it the biggest signature villa in Alpago Properties’ collection of six located on Palm Jumeirah’s Frond G billionaire’s row, which competes with two of the most prestigious neighbourhoods in the world, also known as "Billionaire's Row". They’re located on Manhattan’s 57th Street and the Bishops Avenue in London.`}
                                                    </p>
                                                </div>
                                            </div>
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

                    <NewsLetter />
                </div>
            </div >
        </>
    )
}


export default NewsLanding;