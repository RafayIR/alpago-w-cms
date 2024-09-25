import { HalvarEng, Rufo, StadMitte } from "../../app/font";
import { useData } from "../../hooks/useGetData";


const ProjectPros = () => {
    const data = useData()
    const projectProsData = data?.data?.distanceToDestination[0]?.detail_distance


    return (
        <>
            <section className="project-pros-wrapper">
                <div className="container-fluid p-0">
                    <div className="project-pros">
                        <div className="row m-0 ">
                            <div className="col-lg-4 p-0">
                                <div className="project-heading">
                                    <h4 className={StadMitte.className}>
                                        DISTANCE
                                    </h4>
                                </div>
                            </div>


                            <div className="col-lg-8 p-0">
                                <div className="project-pros-desc">
                                    <div className="pros-count">
                                        <div className="row">

                                            {
                                                projectProsData?.map((item, i) => (
                                                    <div key={i} className={`col-lg-4 col-md-4 col-sm-6 ${i == 2 ? 'col-12' : 'col-6'}`}>
                                                        <div className="count-wrapper">
                                                            <div className="count">
                                                                <h4 className={Rufo.className}>{item.detail_distance_minute || ''}</h4>
                                                                <span className={Rufo.className}>{item.detail_distance_title1 || ''}</span>
                                                                <h5 className={HalvarEng.className}>{item.detail_distance_title2 || ''}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }

                                            {/* <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                                <div className="count-wrapper">
                                                    <div className="count">
                                                        <h4 className={Rufo.className}>18</h4>
                                                        <span className={Rufo.className}>MINUTE DRIVE TO</span>
                                                        <h5 className={HalvarEng.className}>DUBAI MALL</h5>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                                <div className="count-wrapper">
                                                    <div className="count">
                                                        <h4 className={Rufo.className}>13</h4>
                                                        <span className={Rufo.className}>MINUTE DRIVE TO</span>
                                                        <h5 className={HalvarEng.className}>BURJ ALARAB</h5>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="count-wrapper">
                                                    <div className="count">
                                                        <h4 className={Rufo.className}>25</h4>
                                                        <span className={Rufo.className}>MINUTE DRIVE TO</span>
                                                        <h5 className={HalvarEng.className}>DUBAI INTERNATIONAL AIRPORT</h5>
                                                    </div>
                                                </div>
                                            </div> */}
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



export default ProjectPros;