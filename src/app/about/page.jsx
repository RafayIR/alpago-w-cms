'use client'
import About from '../../page/aboutpage';
import WebsiteLoader from "../../components/websiteloader/WebsiteLoader";
import { ReactLenis } from 'lenis/react'

const AboutPage = () => {


    return (
        <>
            <ReactLenis root>
                <WebsiteLoader />
                <About />
            </ReactLenis>
        </>
    )
}


export default AboutPage