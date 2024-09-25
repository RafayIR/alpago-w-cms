

import { HalvarEng, Rufo, SinHala, StadMitte } from '../../app/font'


const NewDetail = () => {


    return (
        <>
            <section className="vis-wrapper new-detail detail-about white">
                <div className="vis-bg">
                    <div className="container-fluid">
                        <div className="row al-row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className='project-para'>
                                    <p className={SinHala.className}>
                                        PALM FLOWER offers a luxurious selection of spacious homes crafted with care and attention to detail.
                                        this exclusive building features only eleven unique residences, including a lavish duplex penthouse.
                                        each home boasts double-height ceilings and large windows that provide stunning views of the gulf.
                                    </p>

                                    <p className={SinHala.className}>
                                        {`Equipped with modern technology and a grand lifestyle,
                                        this building features sustainable, eco-friendly architecture ahead of its time.
                                        Enjoy a serene and cozy environment with panoramic views of central Dubai from your window,
                                        all while away from the city's noise and pollution.`}
                                    </p>
                                </div>

                                <div className='proj-number'>
                                    <div className='row'>
                                        <div className='col-lg-4 col-md-4 col-sm-4 col-6'>
                                            <div className='count-wrapper' style={{ alignItems : 'flex-start'}}>
                                                <div className='count'>
                                                    <h4 className={Rufo.className}>
                                                        12
                                                    </h4>
                                                    <h5 className={StadMitte.className}>
                                                        FULL FLOORS
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-lg-4 col-md-4 col-sm-4 col-6'>
                                            <div className='count-wrapper align-center'>
                                                <div className='count'>
                                                    <h4 className={Rufo.className}>
                                                        10
                                                    </h4>
                                                    <h5 className={StadMitte.className}>
                                                        UNIT CONSTRUCTION
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-lg-4 col-md-4 col-sm-4 col-12'>
                                            <div className='count-wrapper align-end'>
                                                <div className='count'>
                                                    <h4 className={Rufo.className}>
                                                        12
                                                    </h4>
                                                    <h5 className={StadMitte.className}>
                                                        FULL FLOORS
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className='al-content'>

                                    <div className='detail-header-wrapper start-header'>
                                        <div className='detail-header'>
                                            <h5 className={StadMitte.className}>
                                                ADDRESS
                                            </h5>
                                        </div>
                                    </div>


                                    <div className='detail-header-wrapper start-header header-gap'>
                                        <div className='detail-header address-header'>
                                            <div className='title'>
                                                <h5 className={HalvarEng.className}>
                                                    Palm West Beach
                                                </h5>
                                                <h5 className={HalvarEng.className}>
                                                    PALM JUMEIRAH, 125315
                                                </h5>
                                            </div>
                                            <span className={Rufo.className}>
                                                PALM JUMEIRAH
                                            </span>
                                        </div>

                                        <div className='detail-header start-header header-gap'>
                                            <h5 className={StadMitte.className}>
                                                TIMELINE
                                            </h5>
                                        </div>

                                    </div>

                                    <div className='detail-header-wrapper ins-header'>
                                        <div className='detail-header'>
                                            <h5 className={StadMitte.className}>
                                                Construction begin in
                                            </h5>
                                            <span className={Rufo.className}>
                                                2017
                                            </span>
                                        </div>
                                    </div>

                                    <div className='detail-header-wrapper'>
                                        <div className='detail-header'>
                                            <h5 className={StadMitte.className}>
                                                BEDROOMS
                                            </h5>
                                            <span className={Rufo.className}>
                                                04
                                            </span>
                                        </div>
                                    </div>

                                    <div className='detail-header-wrapper'>
                                        <div className='detail-header'>
                                            <h5 className={StadMitte.className}>
                                                BATHROOMS
                                            </h5>
                                            <span className={Rufo.className}>
                                                06
                                            </span>
                                        </div>
                                    </div>

                                    <div className='detail-header-wrapper'>
                                        <div className='detail-header'>
                                            <h5 className={StadMitte.className}>
                                                PARKING FLOOR
                                            </h5>
                                            <span className={Rufo.className}>
                                                02
                                            </span>
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



export default NewDetail