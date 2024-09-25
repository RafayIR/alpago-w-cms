'use client'
import { RiArrowDownSLine } from "react-icons/ri";
import Link from "next/link";
import { SinHala } from "../../../app/font";

const NavMenu = ({ toggleHover, menuData }) => {


    return (
        <>
            <nav className="navbar navbar-expand d-lg-block d-none p-0">
                <div className=" navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        {
                            menuData?.NavMenuList?.map((item, i) => (
                                <li key={i} className="nav-item">
                                    <Link className={`nav-link ${SinHala.className}`} onClick={item.hasSubMenu ? toggleHover : null} href={item.hasSubMenu ? '' : `/` + item.path}>{item.name}</Link>
                                    <Link className={`nav-link ${SinHala.className}`} onClick={item.hasSubMenu ? toggleHover : null} href={item.hasSubMenu ? '' : `/` + item.path}>{item.name}</Link>
                                    {item.hasSubMenu ? <span className="arrow-down">
                                        <RiArrowDownSLine />
                                    </span> : ''}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </>
    )
}


export default NavMenu