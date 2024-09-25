
import { Halvar, Rufo, StadMitte } from "../../app/font"
import Image from "next/image";
import useWindowWidth from "../../hooks/useWindowWidth";


const SideBar = ({ blogs }) => {

    const windowWidth = useWindowWidth()

    return (
        <>
            <aside>
                <div className="sidebar-wrapper">
                    <div className="sidebar-header">
                        <h3 className={StadMitte.className}>
                            Table of contents
                        </h3>
                    </div>

                    <div className={`sidebar-desc  ${blogs ? 'blogs-sidebar' : ''}`}>
                        <ul>
                            <li className={`${StadMitte.className} ${blogs ? '' : 'active'}`}>
                                {
                                    blogs && (
                                        <span className={Rufo.className}>
                                            01
                                        </span>
                                    )
                                }

                                Casa Del Sole Sets UAE Real Estate Record

                            </li>
                            <li className={StadMitte.className}>
                                {
                                    blogs && (
                                        <span className={Rufo.className}>
                                            02
                                        </span>
                                    )
                                }
                                Strategic Location
                            </li>
                            <li className={StadMitte.className}>
                                {
                                    blogs && (
                                        <span className={Rufo.className}>
                                            03
                                        </span>
                                    )
                                }
                                Connectivity and Infrastructure
                            </li>
                            <li className={StadMitte.className}>
                                {
                                    blogs && (
                                        <span className={Rufo.className}>
                                            04
                                        </span>
                                    )
                                }
                                A Booming Tourism Industry
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="sidebar-wrapper">

                    {
                        !blogs ?
                            <>
                                <div className="sidebar-desc date-wrapper">
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
                            </>
                            :
                            null
                    }


                    {
                        (windowWidth < 992 ?

                            null
                            :

                            <>
                                <div className="keep-up-wrapper">

                                    <h3 className={StadMitte.className}>
                                        Keep Up With Us
                                    </h3>

                                    <div className="mini-news-wrapper">
                                        <div className="row align-items-center mb-4">

                                            <div className="col-lg-3">
                                                <div className="img-wrapper">
                                                    <Image src='/assets/img/news-blog-image/mini-news/mini-news-1.png' width={222} height={222} />

                                                </div>
                                            </div>

                                            <div className="col-lg-9">
                                                <div className="mini-news-desc">
                                                    <p className={StadMitte.className}>
                                                        Dubai to get Palm Flower with one penthouse per floor
                                                        Dubai to
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center ">
                                            <div className="col-lg-3">
                                                <div className="img-wrapper">
                                                    <Image src='/assets/img/news-blog-image/mini-news/mini-news-2.png' width={222} height={222} />

                                                </div>
                                            </div>

                                            <div className="col-lg-9">
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

                            </>
                        )
                    }


                </div>
            </aside>
        </>
    )
}




export default SideBar;