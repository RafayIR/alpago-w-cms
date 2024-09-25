import { Rufo } from "../../app/font"
import TextAnimation from "../../hooks/TextAnimation"
import { useData } from "../../hooks/useGetData"


const ContactBanner = () => {

    const data = useData()
    const contactBanner = data?.data?.content?.banner

    return (
        <>
            <div className='banner-wrapper contact-banner'>
                <div className='banner-black bg-black'>
                    <div className='video-wrapper'>
                        <div className="banner-img">
                            <img src={contactBanner.bannerImage} alt="Banner Image" />
                        </div>
                    </div>
                    <div className='banner--content'>
                        <div className='row m-0'>
                            <div className='col-lg-12 p-0'>
                                <div className='banner-heading'>
                                    <h1 className={`${Rufo.className}`}>
                                        <TextAnimation text={contactBanner.bannerTitle} />
                                    </h1>
                                </div>
                                {/* <p className={`${Rufo.className}`}>PALM JUMEIRAH</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>

    )
}

export default ContactBanner