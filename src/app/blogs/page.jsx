'use client'
import { ReactLenis } from 'lenis/react';
import Blogs from '../../page/blogpage';
import WebsiteLoader from '../../components/websiteloader/WebsiteLoader';


const BlogsPage = () => {


    return (
        <>
            <ReactLenis root>
                <WebsiteLoader />
                <Blogs />
            </ReactLenis>
        </>
    )
}

export default BlogsPage;