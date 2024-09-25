'use client'
import Header from "../../layout/header/header"
import Footer from "../../layout/footer/footer"
import BlogsMain from "../../components/blogs/blogsmain"
import BlogsBanner from '../../components/banner/blogdetailbanner'
import ProvideData from "../../hooks/useGetData"

const BlogsDetail = ({ data }) => {


    return (


        <>
            <Header />
            <main>
                <ProvideData data={data}>
                    <BlogsBanner />
                    <BlogsMain />
                </ProvideData>
            </main>
            <Footer />
        </>
    )
}


export default BlogsDetail