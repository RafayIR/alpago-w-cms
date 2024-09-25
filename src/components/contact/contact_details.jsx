
import { SinHala, StadMitte } from "../../app/font"
import { AiFillLinkedin } from "react-icons/ai";
const ContactDetail = () => {



    return (
        <>
            <section className="contact-detail-wrapper">
                <div className="bg-black">
                    <div className="container-fluid p-0">
                        <div className="row contact-row">
                            <div className="col-xxl-12 col-xl-12 col-lg-12">
                                <div className="address-wrapper row">
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-12 frst-col">
                                        <span className={`contact-label ${StadMitte.className}`}>
                                            ADDRESS
                                        </span>
                                        <div className="contact-desc">
                                            <p className={SinHala.className}>
                                                Office 2603 Level 26, Boulevard Plaza,
                                            </p>
                                            <p>
                                                Tower 1,Downtown Dubai, Dubai, UAE.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-12 middle-col">
                                        <span className={`contact-label ${StadMitte.className}`}>
                                            CONTACT INFO
                                        </span>
                                        <ul className="contact-tel">
                                            <li>
                                                <a className={SinHala.className} href="tel:+44 7918398795">+44 7918398795 </a>
                                            </li>
                                            <li>
                                                <a className={SinHala.className} href="mailto:info@alpagoproperties.co.uk">info@alpagoproperties.co.uk</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-12 lst-col">

                                        <div className="social-wrapper">
                                            <span className={`contact-label ${StadMitte.className}`}>
                                                SOCIAL LINKS
                                            </span>
                                            <ul className="social-list-wrapper">
                                                <li className="social-list">
                                                    <span className="social-icon">
                                                        <img src="/assets/icons/facebook.svg" alt="Facebook" />
                                                    </span>
                                                    <a className={SinHala.className} href="">alpagoproperties</a>
                                                </li>
                                                <li className="social-list">
                                                    <span className="social-icon">
                                                        <img src="/assets/icons/instagram.svg" alt="Instagram" />
                                                    </span>
                                                    <a className={SinHala.className} href="">alpagoproperties</a>
                                                </li>
                                                <li className="social-list">
                                                    <span className="social-icon">
                                                        <AiFillLinkedin />
                                                    </span>
                                                    <a className={SinHala.className} href="">alpagoproperties</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactDetail