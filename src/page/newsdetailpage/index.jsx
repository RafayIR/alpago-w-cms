'use client'
import Header from "../../layout/header/header"
import Footer from "../../layout/footer/footer"
import NewsBanner from '../../components/banner/newsdetailbanner'
import NewsMain from '../../components/news/newsmain'
import ProvideData from "../../hooks/useGetData"

const NewsDetail = ({ data }) => {
    return (
        <>
            <Header />
            <main>
                <ProvideData data={data}>
                    <NewsBanner />
                    <NewsMain />
                </ProvideData>
            </main>
            <Footer />

        </>
    )
}


export default NewsDetail