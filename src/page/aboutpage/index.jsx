import Header from "../../layout/header/header"
import Footer from "../../layout/footer/footer"
import AboutBanner from "../../components/banner/aboutbanner"
import Awards from '../../components/awards/Awards'
import HomeDesc from "../../components/desc/HomeDesc"
import AboutVision from '../../components/about/aboutvision/aboutvision'
import OurValue from '../../components/about/value/ourvalue'
import AboutTeam from '../../components/about/team/aboutteam'
import AboutTeamNew from '../../components/about/team/aboutteamnew';


const About = () => {

    return (
        <>
            <Header />
            <main>
                <AboutBanner />
                <HomeDesc />
                <AboutVision />
                <OurValue />
                <AboutTeamNew />
                {/* <AboutTeam /> */}
                <Awards noGap={true} />
            </main>
            <Footer noMargin={true} />
        </>
    )
}

export default About

