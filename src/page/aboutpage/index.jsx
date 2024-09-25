'use client'
import Header from "../../layout/header/header"
import Footer from "../../layout/footer/footer"
import AboutBanner from "../../components/banner/aboutbanner"
import Awards from '../../components/awards/Awards'
import HomeDesc from "../../components/desc/HomeDesc"
import AboutVision from '../../components/about/aboutvision/aboutvision'
import OurValue from '../../components/about/value/ourvalue'
import AboutTeamNew from '../../components/about/team/aboutteamnew';
import ProvideData from '../../hooks/useGetData'


const About = ({ data }) => {

    return (
        <>
            <Header />
            <main>
                <ProvideData data={data}>
                    <AboutBanner />
                    <HomeDesc />
                    <AboutVision />
                    <OurValue />
                    <AboutTeamNew />
                    <Awards noGap={true} />
                </ProvideData>
            </main>
            <Footer noMargin={true} />
        </>
    )
}

export default About

