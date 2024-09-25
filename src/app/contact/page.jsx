'use client'
import Contact from "../../page/contactpage";
import WebsiteLoader from "../../components/websiteloader/WebsiteLoader";
import { ReactLenis } from 'lenis/react'

const ContactPage = () => {


    return (
        <>
            <ReactLenis root>
                <WebsiteLoader />
                <Contact />
            </ReactLenis>
        </>
    )
}

export default ContactPage
