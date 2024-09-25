import { StadMitte } from "../../app/font"
import TextAnimation from "../../hooks/TextAnimation"

const NewsBanner = () => {

    return (
        <>
            <div className='banner-wrapper news-banner'>
                <div className='banner-black bg-black'>
                    <div className='video-wrapper'>
                        <div className=" banner-img">
                            <img src="/assets/img/banner/news-banner.png" alt="Banner Image" />

                        </div>
                    </div>
                    <div className='banner--content'>
                        <div className='container-fluid p-0 h-container'>
                            <div className='row m-0'>
                                <div className='col-lg-12 p-0'>
                                    <div className='banner-heading'>
                                        <h1 className={`${StadMitte.className} `}>
                                            Dubai’s most expensive villa sold
                                        </h1>
                                        <h1 className={`${StadMitte.className} `}>
                                            for Dh302.5 million
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsBanner