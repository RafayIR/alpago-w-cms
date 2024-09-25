'use client'
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import { StadMitte } from '../../../app/font'
import { NavMenuOverlay } from "./MenuData";


const OverLayMenu = ({ showOverLay, toggleOverlay , toggleHover }) => {
    return (
        <>
            <div className={`overlay-menu-wrapper ${showOverLay ? 'active' : ''}`}>
                <div className="header-logo relative">
                    <Link href="/">
                        <Image src="/assets/img/logo/alpago-properties-logo-u.svg" fill style={{ objectFit: 'contain' }} />
                    </Link>
                </div>
                <div className="overlay-header">
                    <button onClick={toggleOverlay} className="btn-toggle">
                        <span className="btn-content">
                            <RxCross1 />
                        </span>
                    </button>
                </div>

                <div className="row menu-content">
                    <div className="col col-md-8 col-xl-8">
                        <div className="menu-mobile-list">
                            <ul className="menu-link-container">
                                {
                                    NavMenuOverlay?.map((item, i) => (
                                        <li key={i}>
                                            <Link href={item.path} onClick={item.hasSubMenu ? toggleHover : null} className={`${StadMitte.className} menu-mobile-link text--heading`}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col col-md-4 col-xl-4 d-lg-block d-none">
                        <div className="menu-image">
                            <img src="assets/img/overlaymenu/menu-company.webp" alt="company" />
                        </div>
                    </div>
                    <div className="col col-md-4 col-xl-4 d-lg-none d-block">
                        <div className="menu-image">
                            <img src="assets/img/overlaymenu/bg-mobile.svg" alt="Build" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default OverLayMenu