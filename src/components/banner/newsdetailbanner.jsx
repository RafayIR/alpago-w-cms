import { StadMitte } from "../../app/font"


const NewsBanner = () => {

    return (
        <>
            <div className='news-detail-banner'>
                <div className='bg-black'>
                    <div className='banner--content'>
                        <div className='container-fluid p-0 h-container'>
                            <div className='row m-0'>
                                <div className='col-lg-12 p-0'>
                                    <div className='banner-heading'>
                                        <h1 className={`${StadMitte.className} `}>
                                            Dubai’s most expensive villa sold for Dh302.5 million
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-img">
                        <img src="/assets/img/banner/news-banner.png" alt="Banner Image" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsBanner