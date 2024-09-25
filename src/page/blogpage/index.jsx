import BlogLandingBanner from "../../components/banner/bloglandingbanner"
import BlogsLanding from '../../components/blogs/blogslanding';
import Header from "../../layout/header/header"
import Footer from "../../layout/footer/footer"

const Blogs = () => {



    return (

        <>
            <Header />
            <main>
                <BlogLandingBanner />
                <BlogsLanding />
            </main>
            <Footer />
        </>
    )
}


export default Blogs