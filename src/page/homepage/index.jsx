'use client'
import React from "react"
import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";
import BannerHome from "../../components/banner/banner";
import HomeDesc from "../../components/desc/HomeDesc";
import HomeProject from "../../components/project/Project";
import Awards from "../../components/awards/Awards";
import Associate from "../../components/expertise/associate"
import Granduer from "../../components/grandeur/grandeur";
import HomeInsight from "../../components/insights/HomeInsight"
import HomeNews from "../../components/homenews/HomeNews";
import BrandArea from '../../components/brands/BrandArea';
import GranduerNew from '../../components/grandeur/graduerNew';

const Home = () => {

    return (
        <>
            <Header />

            <main>
                <BannerHome />
                <HomeDesc home={true} />
                <HomeProject />
                {/* <BrandArea /> */}
                <Associate />
                <GranduerNew />
                {/* <Granduer /> */}
                {/* <HomeInsight /> */}
                {/* <Awards /> */}
                <HomeNews home={true} />
            </main>
            <Footer />
        </>
    )
}



export default Home