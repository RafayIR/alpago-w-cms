'use client'
import { useState, useEffect, useRef } from "react"
import { SinHala } from "../../app/font"
import Link from "next/link"
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import axios from "axios";

const Footer = ({ noMargin }) => {
    const [footerHeight, setFooterHeight] = useState(0);
    const [footerData, setFooterData] = useState(null)
    const footerRef = useRef(null);

    // Function to handle footer height calculation
    const handleFooterHeight = () => {
        if (footerRef.current) {
            const height = footerRef.current.getBoundingClientRect().height;
            setFooterHeight(height);
        }
    };

    useEffect(() => {

        const fetchFooterData = async () => {
            const resp = await axios.get('https://digitalgraphiks.co.uk/demo/alpago-properties-cms/api/get_footer')
            setFooterData(resp?.data?.data)
        }

        fetchFooterData()

        handleFooterHeight(); // Calculate footer height initially

        // Recalculate footer height on window resize
        const handleResize = () => {
            handleFooterHeight();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount


    return (
        <>
            <div className="footer-height" style={{ height: `${footerHeight}` }}>
            </div>
            <footer ref={footerRef} id="footer" className={`footer relative ${noMargin ? 'margin-0' : ''}`}>
                <div className="footer-holder" style={{
                    marginTop: '10px',
                    height: '100%',
                    zIndex: 1,
                }} >
                    <div className="container-fluid p-0">
                        <div className="main-footer">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <div className="footer-heading mb-2">
                                        <h4 className={`${SinHala.className}`}>
                                            {footerData?.footer_content?.footer_section1_title}
                                        </h4>
                                    </div>
                                    <div className="footer-desc">
                                        <p className={`${SinHala.className}`}>
                                            {footerData?.footer_content?.footer_description}
                                        </p>
                                    </div>
                                    <div className="footer-heading" style={{ marginBottom: '4px' }} >
                                        <h4 className={`${SinHala.className}`} style={{ fontSize: '16px' }} >
                                            {footerData?.footer_content?.footer_section1_location_title}
                                        </h4>
                                    </div>
                                    <div className="footer-desc">
                                        <p className={`${SinHala.className}`} style={{ fontSize: '13px' }}>
                                            {footerData?.footer_content?.footer_section1_location_details}
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-8 col-md-8 footer-rt-row">
                                    <div className="row link-row">
                                        <div className="col-xxl-1 col-xl-none col-lg-none col-lg-block">

                                        </div>
                                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 fst-col">
                                            {
                                                footerData?.pages?.map((item, i) => (
                                                    <div key={i} className="footer-heading">
                                                        <h4 className={`${SinHala.className}`}>
                                                            <Link href={`/` + item.footer_section2_linksurl}>
                                                                {item.footer_section2_linkstext}
                                                            </Link>
                                                        </h4>
                                                    </div>
                                                ))
                                            }
                                        </div>

                                        <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-12 middle-col or-2">
                                            <div className="col-wrapper">
                                                <div className="footer-heading">
                                                    <h4 className={`${SinHala.className}`}>
                                                        {footerData?.footer_content?.footer_section3_title}
                                                    </h4>
                                                </div>
                                                <ul>
                                                    {
                                                        footerData?.projects?.map((item, i) => (
                                                            <li key={i}>
                                                                <Link className={`${SinHala.className} light`} href={'/detail/' + item.footer_section3_linksurl}>
                                                                    {item.footer_section3_linkstext}
                                                                </Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 lst-col">
                                            <div className="col-wrapper">
                                                <div className="footer-heading">
                                                    <h4 className={`${SinHala.className}`}>
                                                        {footerData?.footer_content?.footer_section4_title}
                                                    </h4>
                                                </div>
                                                <ul>
                                                    {footerData?.media?.map((item, i) => (
                                                        <li key={i}>
                                                            <Link className={`${SinHala.className} light`} href={'/' + item.footer_section4_linksurl}>
                                                                {item.footer_section4_linkstext}
                                                            </Link>
                                                        </li>
                                                    ))
                                                    }
                                                </ul>
                                                <div className="footer-heading mt-4">
                                                    <h4 className={`${SinHala.className}`}>
                                                        {footerData?.footer_content?.footer_social_title}
                                                    </h4>
                                                    <div className="social-wrapper" style={{ display: 'flex', alignItems: 'center' }}>
                                                        <span style={{
                                                            background: '#303030',
                                                            width: '40px',
                                                            height: '40px',
                                                            borderRadius: '50%',
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            marginTop: 0
                                                        }}>
                                                            <Link href={footerData?.footer_content?.fb_link || '#'} style={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                lineHeight: '20px'
                                                            }}>
                                                                <GrFacebookOption />
                                                            </Link>
                                                        </span>
                                                        <span style={{
                                                            background: '#303030',
                                                            width: '40px',
                                                            height: '40px',
                                                            borderRadius: '50%',
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            marginTop: 0
                                                        }}>
                                                            <Link href={footerData?.footer_content?.insta_link || '#'} style={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                lineHeight: '20px'
                                                            }}>
                                                                <FaInstagram />
                                                            </Link>
                                                        </span>
                                                        <span style={{
                                                            background: '#303030',
                                                            width: '40px',
                                                            height: '40px',
                                                            borderRadius: '50%',
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            marginTop: 0
                                                        }}>
                                                            <Link href={footerData?.footer_content?.linkedin_link || '#'} style={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                lineHeight: '20px'
                                                            }}>
                                                                <AiFillLinkedin />
                                                            </Link>
                                                        </span>
                                                        <span style={{
                                                            background: '#303030',
                                                            width: '40px',
                                                            height: '40px',
                                                            borderRadius: '50%',
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            marginTop: 0
                                                        }}>
                                                            <Link href={footerData?.footer_content?.yt_link || '#'} style={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                lineHeight: '20px'
                                                            }}>
                                                                <FaYoutube />
                                                            </Link>
                                                        </span>
                                                        <span style={{
                                                            background: '#303030',
                                                            width: '40px',
                                                            height: '40px',
                                                            borderRadius: '50%',
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            marginTop: 0
                                                        }}>
                                                            <Link href={footerData?.footer_content?.tiktok_link || '#'} style={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                lineHeight: '20px'
                                                            }}>
                                                                <FaTiktok />
                                                            </Link>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>


                        <div className="footer-bottom">
                            <div className="row row--between-xs pt-1">
                                <div className="col-lg-4 col-md-4 col-4">
                                    <p className={`${SinHala.className} leading-trim leading-trim my-0`}>
                                        <Link target="_blank" href="/privacy-policy" style={{ color: 'white' }}>
                                            Privacy Policy
                                        </Link>
                                    </p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-4">
                                    <div className="logo-icon">
                                        <img src={`/assets/icons/alpago-logo-icon.svg`} alt="Logo Icon" />
                                        {/* <img src={process.env.NEXT_PUBLIC_BASE_URL_LIVE + footerData?.footer_content?.logo || `/assets/icons/alpago-logo-icon.svg`} alt="Logo Icon" /> */}
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-4">
                                    <p className={`leading-trim leading-trim text-end my-0 ${SinHala.className}`}>
                                        © Alpago Properties 2024
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer >
        </>
    )
}


export default Footer