

const AnimatedCircle = ({ videoProgress }) => {

    return (
        <>
            <svg aria-hidden="true" className="slider-nav__outline">
                <rect rx="600" ry="600" width="2" height="2" pathLength="1"></rect>
                <rect rx="600" ry="600" width="2" height="2" pathLength="1" style={{
                    strokeDashoffset: `calc(${1 - videoProgress / 100})`,
                }}>

                </rect>
            </svg>
        </>
    )
}


export default AnimatedCircle