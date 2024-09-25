import Header from "../../layout/header/header"
import Footer from "../../layout/footer/footer"
import DetailBanner from '../../components/banner/detailbanner'
import DetailAbout from '../../components/detail/detailabout'
import DetailMap from '../../components/detail/detailmap'
import DetailSlider from '../../components/detail/detailslider'
import NewProject from '../../components/detail/nextproj'



const Detail = () => {


    return (
        <>
            <Header />
            <main>
                <DetailBanner />
                <DetailAbout />
                <DetailSlider />
        
                <DetailMap />
                <NewProject />
            </main>
            <Footer noMargin={true} />

        </>
    )


}



export default Detail