'use client'
import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";
import NewsLanding from "../../components/news/newslanding";
import NewsLandingBanner from "../../components/banner/newslandingbanner";
import ProvideData from "../../hooks/useGetData";

const News = ({ data }) => {


    return (
        <>
            <Header />
            <main>
                <ProvideData data={data}>
                    <NewsLandingBanner />
                    <NewsLanding  />
                </ProvideData>
            </main>
            <Footer />

        </>
    )
}


export default News