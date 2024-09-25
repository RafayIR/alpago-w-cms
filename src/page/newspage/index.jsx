import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";
import NewsLanding from "../../components/news/newslanding";
import NewsLandingBanner from "../../components/banner/newslandingbanner";

const News = () => {


    return (
        <>
            <Header />
            <main>
                <NewsLandingBanner />
                <NewsLanding />

            </main>
            <Footer />

        </>
    )
}


export default News