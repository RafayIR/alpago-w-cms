

import { useData } from "../../hooks/useGetData"

const ContactMap = () => {

    const data = useData()
    const map = data?.data?.content?.map

    return (
        <>
            <section className="detail-map-wrapper">
                <div className="container-fluid p-0">
                    <div className="map">
                        <iframe src={map} style={{ border: 0, filter: 'grayscale(1)' }} loading="lazy"></iframe>
                    </div>
                </div>

            </section>
        </>
    )
}


export default ContactMap