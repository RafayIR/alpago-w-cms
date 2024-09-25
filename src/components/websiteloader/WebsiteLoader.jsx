
import { useEffect, useState } from "react";

const WebsiteLoader = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [hidden, setIsHidden] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        // Simulate loading for 2 seconds
        let timeout = setTimeout(() => {
            // setIsLoading(false);
        }, 2500);

        // Clean up timeout on unmount or dependency change
        return () => clearTimeout(timeout, setIsHidden(true));

    }, []);

    return (
        <>
            <div className={`transition-overlay animation--page-transition-out  ${isLoading ? 'animation--page-transition-out--active' : ''}`}>
                <div className="page-transition-overlay__background">
                    {[...Array(6)].map((_, index) => (
                        <div key={index}></div>
                    ))}
                </div>
                < div className={`page-transition-overlay__content ${isLoading ? 'is-hidden' : ''} `}>
                    <div className="preloader page-transition-overlay__logo">
                        <img src="/assets/img/logo/loader.gif" alt="loader" />
                    </div>
                </div >
            </div>

        </>
    )
}

export default WebsiteLoader



