'use client'
import React from "react"
import dynamic from "next/dynamic";
import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";
import BannerHome from "../../components/banner/banner";
import HomeDesc from "../../components/desc/HomeDesc";
import HomeProject from "../../components/project/Project";
import Associate from "../../components/expertise/associate"
import Granduer from "../../components/grandeur/grandeur";
import HomeInsight from "../../components/insights/HomeInsight"

const Awards = dynamic(() => import('../../components/awards/Awards'), {
    ssr: true,
    loading: () => <p>loading..</p>
})
const HomeNews = dynamic(() => import('../../components/homenews/HomeNews'), {
    loading: () => <p>loading..</p>
})
// import HomeNews from "../../components/homenews/HomeNews";
import GranduerNew from '../../components/grandeur/graduerNew';
import ProvideData from "../../hooks/useGetData";

const Home = ({ data }) => {



    return (
        <>
            <Header />

            <main>
                <ProvideData data={data} >
                    <BannerHome />
                    <HomeDesc home={true} />
                    <HomeProject />
                    <Associate />
                    <GranduerNew />
                    {/* <HomeInsight /> */}
                    <Awards />
                    {/* <Granduer /> */}
                    <HomeNews home={true} />
                </ProvideData>
            </main>
            <Footer />
        </>
    )
}



export default Home