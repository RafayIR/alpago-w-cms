import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { SinHala, StadMitte } from '../../../app/font';
import { Navigation, Autoplay, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useData } from "../../../hooks/useGetData";


const AboutTeamNew = () => {
    const data = useData()
    const newTeam = data?.data?.content?.team?.teamData
    const title = data?.data?.content?.team?.title



    return (
        <>
            <section className="team-wrapper">
                <div className="row align-items-end">
                    <div className="col-lg-6 col-6">
                        <div className='meet-team-title'>
                            <div className='meet-team-header'>
                                <span className={StadMitte.className}>MEET THE</span>
                                <h4 className={`${StadMitte.className}`}>
                                    {title}
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-6">
                        <div className='al-about-arrow'>
                            <div className="al-slider-arrow p-0 d-flex align-items-center justify-content-end">
                                <button className="team-prevv"><BsArrowLeft /> </button>
                                <button className="team-next m-0"><BsArrowRight /> </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="team-members">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        speed={1200}
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={false}
                        loop={true}
                        navigation={{
                            nextEl: '.team-next',
                            prevEl: '.team-prevv',
                        }}
                        // onSlideChange={(swiper) => handleSlideChange(swiper)}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: false }}
                        breakpoints={{
                            1024: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 1,
                            },
                            480: {
                                slidesPerView: 1,
                            },
                            0: {
                                slidesPerView: 1
                            }
                        }}
                        className="swiper-container">
                        {
                            newTeam?.map((team, i) => (
                                <SwiperSlide key={i}>
                                    <div className="d-flex team-row position-relative">
                                        <div className="team-img col-lg-6 col-md-6 col-12">
                                            <img src={team.teamImg} alt="Image" />
                                        </div>
                                        <div className="team-body">
                                            <div className="team-desc">
                                                <p className={SinHala.className}>
                                                    {team.teamDesc}
                                                </p>
                                            </div>
                                            <div className="team-name">
                                                <h4 className={StadMitte.className}>
                                                    {team.name}
                                                </h4>
                                                <span className={`team-postion ${SinHala.className}`}>
                                                    {team.teamTitle}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </section >
        </>
    )
}

export default AboutTeamNew