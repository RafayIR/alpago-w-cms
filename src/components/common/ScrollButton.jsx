import { GoArrowDown } from "react-icons/go";

const ScrollButton = ({ id, banner }) => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id); // Replace with your actual section id
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            {
                id == 'none' ?
                    <>
                    </>
                    :
                    <>
                        <button onClick={(() => scrollToSection(id))} className={`arrow-down-wrapper ${banner ? 'banner-arrow-down' : ''}`}>
                            <GoArrowDown />
                        </button>
                    </>
            }

        </>
    )
}

export default ScrollButton;