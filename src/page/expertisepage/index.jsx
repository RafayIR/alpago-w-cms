import Header from "../../layout/header/header"
import Footer from "../../layout/footer/footer"
import AboutBanner from '../../components/banner/aboutbanner'
import HomeDesc from "../../components/desc/HomeDesc"
import BrandArea from '../../components/brands/BrandArea';
import Department from "../../components/expertise/department"
import Awards from "../../components/awards/Awards"
import Associate from "../../components/expertise/associate"
import HomeNews from "../../components/homenews/HomeNews"
import DepartmentSecond from '../../components/expertise/department_second'



const Expertise = () => {

    return (
        <>
            <Header />
            <main>
                <AboutBanner expertise={true} />
                <HomeDesc />
                {/* <Department /> */}
                <DepartmentSecond />
                <BrandArea />
                {/* <Associate /> */}
                {/* <HomeNews expertise={true} home={true} /> */}
                {/* <Awards /> */}
            </main>
            <Footer />
        </>
    )


}



export default Expertise