'use client'
import Detail from "../../page/detailpage";
import Project from '../../page/detailpage/project';
import { ReactLenis } from 'lenis/react';
import WebsiteLoader from "../../components/websiteloader/WebsiteLoader";


const DetailPage = () => {


    return (
        <>
            <ReactLenis root>
                <WebsiteLoader />
                <Project />
                {/* <Detail /> */}
            </ReactLenis>
        </>
    )
}


export default DetailPage