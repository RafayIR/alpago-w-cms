'use client'
import { ReactLenis } from 'lenis/react';
import BlogsDetail from '../../page/blogdetailpage';
import WebsiteLoader from '../../components/websiteloader/WebsiteLoader';


const NewsPage = () => {


    return (
        <>
            <ReactLenis root>
                <WebsiteLoader />
                <BlogsDetail />
            </ReactLenis>
        </>
    )
}

export default NewsPage;