'use client'

import Expertise from '../../page/expertisepage';
import { ReactLenis } from 'lenis/react';
import WebsiteLoader from '../../components/websiteloader/WebsiteLoader';


const DetailPage = () => {


    return (
        <>
            <ReactLenis root>
                <WebsiteLoader />
                <Expertise />
            </ReactLenis>
        </>
    )
}


export default DetailPage