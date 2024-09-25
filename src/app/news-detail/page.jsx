'use client'
import { ReactLenis } from 'lenis/react';
import News from '../../page/newsdetailpage';
import WebsiteLoader from '../../components/websiteloader/WebsiteLoader';

const NewsPage = () => {


    return (
        <>
            <ReactLenis root>
                <WebsiteLoader />
                <News />
            </ReactLenis>
        </>
    )
}

export default NewsPage;