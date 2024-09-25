import Header from "../../layout/header/header"
import Footer from "../../layout/footer/footer"
import BlogsMain from "../../components/blogs/blogsmain"
import BlogsBanner from '../../components/banner/blogdetailbanner'


const BlogsDetail = () => {


    return (


        <>
            <Header />
            <main>
                <BlogsBanner />
                <BlogsMain />
            </main>
            <Footer />
        </>
    )
}


export default BlogsDetail