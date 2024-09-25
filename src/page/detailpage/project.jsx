'use client'
import Header from "../../layout/header/header"
import Footer from "../../layout/footer/footer"
import DetailBanner from '../../components/banner/detailbanner'
import DetailAbout from '../../components/detail/detailabout'
import DetailMap from '../../components/detail/detailmap'
import DetailSlider from '../../components/detail/detailslider'
import NewProject from '../../components/detail/nextproj'
import ProjectPros from "../../components/detail/projectpros"
import ProjectForm from '../../components/detail/projectform';
import ProvideData from "../../hooks/useGetData"

const Project = ({ data }) => {

    return (
        <>
            <Header />
            <main>
                <ProvideData data={data}>
                    <DetailBanner />
                    <DetailAbout />
                    <DetailSlider />
                    <ProjectPros />
                    <DetailMap />
                    <ProjectForm />
                    <NewProject />
                </ProvideData>
            </main>
            <Footer noMargin={true} />

        </>
    )

}

export default Project