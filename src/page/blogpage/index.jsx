'use client'
import BlogLandingBanner from "../../components/banner/bloglandingbanner"
import BlogsLanding from '../../components/blogs/blogslanding';
import Header from "../../layout/header/header"
import Footer from "../../layout/footer/footer"
import ProvideData from "../../hooks/useGetData";




const Blogs = ({ data }) => {



    return (

        <>
            <Header />
            <main>
                <ProvideData data={data}>
                    <BlogLandingBanner />
                    <BlogsLanding />
                </ProvideData>
            </main>
            <Footer />
        </>
    )
}


export default Blogs