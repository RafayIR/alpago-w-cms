
import { Halvar, Rufo, StadMitte } from "../../app/font"
import Image from "next/image";
import useWindowWidth from "../../hooks/useWindowWidth";
import { useEffect, useState } from "react";
import Link from "next/link";
import useFormattedDate from '../../hooks/useFormattedDate';

const SideBar = ({ blogs, titleData, data, moreData }) => {
    const date = data?.data?.news?.date
    const { day, month, year } = useFormattedDate(date);
    const [listData, setListData] = useState()
    const [morelistData, setMoreListData] = useState()
    const windowWidth = useWindowWidth()

    useEffect(() => {
        setListData(titleData)
        setMoreListData(moreData)
    }, [listData])

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
                            {
                                listData?.map((item, i) => {
                                    return (
                                        <li key={i} className={`${StadMitte.className} ${blogs ? '' : 'active'}`}>
                                            {
                                                blogs && (
                                                    <span className={Rufo.className}>
                                                        {i < 9 ? `0${i + 1}` : i + 1}
                                                    </span>
                                                )
                                            }

                                            {item?.detail_title}
                                        </li>
                                    )
                                })

                            }
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
                                        {`${day}.${month}`}
                                        <span className={Halvar.className}>
                                            {year}
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
                                        {
                                            morelistData?.slice(0, 5)?.map((item, i) => {
                                                return (
                                                    <Link key={i} style={{ textDecoration: 'none', color: 'white' }} target="_blank" href={item?.link} className={`row align-items-center  ${i === item.length - 1 ? '' : 'mb-4'}`}>
                                                        <div className="col-lg-3">
                                                            <div className="img-wrapper">
                                                                <Image src={process.env.NEXT_PUBLIC_BASE_URL_LIVE + item?.image} width={222} height={222} />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-9">
                                                            <div className="mini-news-desc">
                                                                <p className={StadMitte.className}>
                                                                    {item?.title}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                )
                                            })
                                        }
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