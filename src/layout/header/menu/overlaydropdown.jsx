
'use client'
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import { StadMitte } from '../../../app/font'
import { OverlayDropDownMenu } from "./MenuData";



const OverLayDropDown = ({ hasHover, toggleHover, hoveredText }) => {

   

    return (
        <>
            <div className={`overlay-menu-dropdown ${hasHover ? 'active' : ''}`}>
                <div className="header-logo relative">
                    <Link href="/">
                        <Image src="/assets/img/logo/alpago-properties-logo-u.svg" fill style={{ objectFit: 'contain' }} />
                    </Link>
                </div>
                <div className="overlay-header">
                    <button onClick={toggleHover} className="btn-toggle">
                        <span className="btn-content">
                            <RxCross1 />
                        </span>
                    </button>
                </div>

                <div className="row menu-content">
                    <div className="col col-md-6 col-xl-6">
                        <div className="menu-dropdown-title-row">
                            <div className="col offset-xs-1">
                                {
                                    hoveredText == 'PROJECTS' && (
                                        <p className={`${StadMitte.className} menu-dropdown-title text--color-primary leading-trim`}>
                                            Projects
                                        </p>
                                    )
                                }

                                {
                                    hoveredText == 'MEDIA' && (
                                        <p className={`${StadMitte.className} menu-dropdown-title text--color-primary leading-trim`}>
                                            Media
                                        </p>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-6">
                        <div className="menu-mobile-list">
                            {
                                hoveredText == 'PROJECTS' && (
                                    <ul className="menu-link-container">
                                        {
                                            OverlayDropDownMenu[0]?.projects.map((item, i) => (
                                                <li key={i}>
                                                    <Link href={item.path} className={`${StadMitte.className} menu-mobile-link text--heading`}>
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                )
                            }

                            {
                                hoveredText == "MEDIA" && (
                                    <ul className="menu-link-container">
                                        {
                                            OverlayDropDownMenu[0]?.media.map((item, i) => (
                                                <li key={i}>
                                                    <Link href={item.path} className={`${StadMitte.className} menu-mobile-link text--heading`}>
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default OverLayDropDown