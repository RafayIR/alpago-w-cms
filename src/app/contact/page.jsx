import Contact from "../../page/contactpage";
import Provider from '../_provider/provider'
import { getContactData } from "../_fetchData";




const ContactPage = async () => {

    let data = await getContactData()

    return (
        <>
            <Provider>
                <Contact data={data} />
            </Provider>
        </>
    )
}

export default ContactPage
