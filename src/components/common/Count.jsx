
import { useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";
import { Rufo } from "../../app/font";


const Count = ({ number, text }) => {
    const [focus, setFocus] = useState(false);
    const visibleChangeHandler = (isVisible) => {
        if (isVisible) {
            if (!focus) {
                setFocus(true);
            }
        }
    };

    return (
        <CountUp start={focus ? 0 : undefined} end={number} duration={4}>
            {({ countUpRef }) => (
                <div className={`d-inline ${"d-flex align-items-center justify-content-center"}`}>
                    <span className={`${Rufo.className}`} ref={countUpRef} />
                    <InView
                        as="span"
                        onChange={(inView) => visibleChangeHandler(inView)}>
                        {text && <span>{text}</span>}
                    </InView>
                </div>
            )}
        </CountUp>
    )
}

export default Count