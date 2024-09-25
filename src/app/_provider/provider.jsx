'use client'
import WebsiteLoader from "../../components/websiteloader/WebsiteLoader";
import { ReactLenis } from 'lenis/react'



export default function Provider({ children }) {

    return (
        <ReactLenis root>
            <WebsiteLoader />
            {children}
        </ReactLenis>
    )
}