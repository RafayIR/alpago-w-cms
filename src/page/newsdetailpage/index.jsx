import Header from "../../layout/header/header"
import Footer from "../../layout/footer/footer"
import NewsBanner from '../../components/banner/newsdetailbanner'
import NewsMain from '../../components/news/newsmain'

const NewsDetail = () => {
    return (
        <>
            <Header />
            <main>
                <NewsBanner />
                <NewsMain />
            </main>
            <Footer />

        </>
    )
}


export default NewsDetail