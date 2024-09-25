'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "./menu/NavMenu";
import { TbMenu } from "react-icons/tb";
import OverLayMenu from "./menu/overlaymenu";
import OverLayDropDown from "./menu/overlaydropdown";

const Header = () => {
    const [showHeaderHolder, setShowHeaderHolder] = useState(false);
    const [showOverLay, setShowOverLay] = useState(false)
    const [hasHover, setHasHover] = useState(false)
    const [hoveredText, setHoveredText] = useState('');

    const toggleOverlay = () => {
        setShowOverLay(!showOverLay)
    }

    const toggleHover = (event) => {
        setHasHover(!hasHover)
        setHoveredText(event?.target?.innerText);

    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const scrollThreshold = windowHeight / 2; // Halfway down the window

            if (scrollPosition >= scrollThreshold) {
                setShowHeaderHolder(true);
            } else {
                setShowHeaderHolder(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className="header">
                <div className={`container-fluid h-container  ${showHeaderHolder ? 'd-none' : 'd-block'}`}>
                    <div className="row align-items-start m-0">
                        <div className="col-lg-6 p-0">
                            <div className="header-logo relative">
                                <Link href="/">
                                    <Image src="/assets/img/logo/alpago-properties-logo-u.svg" fill style={{ objectFit: 'contain' }} />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 text-end p-0">
                            <NavMenu toggleHover={toggleHover} />
                        </div>
                    </div>
                </div>

                <div className={`header__holder row row--pad row--between-xs row--top-xs ${showHeaderHolder ? 'show-button' : 'hide-button'}`}>
                    <div className="col col--xs-auto"></div>
                    <div className="col-auto col--xs-auto">
                        <button onClick={toggleOverlay} className="btn-toggle">
                            <span className="btn-content">
                                <TbMenu />
                            </span>
                        </button>
                    </div>
                </div>
                <div className={`header__holder row d-block d-lg-none`}>
                    <div className="col col--xs-auto"></div>
                    <div className="col-auto col--xs-auto">
                        <button onClick={toggleOverlay} className="btn-toggle">
                            <span className="btn-content">
                                <TbMenu />
                            </span>
                        </button>
                    </div>
                </div>

                <OverLayMenu showOverLay={showOverLay} toggleOverlay={toggleOverlay} toggleHover={toggleHover} />
                <OverLayDropDown hasHover={hasHover} hoveredText={hoveredText} toggleHover={toggleHover} />
            </header>

        </>
    )
}



export default Header;