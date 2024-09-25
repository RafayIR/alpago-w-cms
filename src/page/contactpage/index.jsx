'use client'
import Header from '../../layout/header/header'
import Footer from '../../layout/footer/footer'
import ContactBanner from '../../components/banner/contactbanner'
import ContactDetail from '../../components/contact/contact_details'
import ContactForm from '../../components/contact/contact_form'
import ProvideData from '../../hooks/useGetData';
import ContactMap from '../../components/contact/contact_map'

const Contact = ({ data }) => {
    return (
        <>
            <Header />
            <main>
                <ProvideData data={data}>
                    <ContactBanner />
                    <ContactForm />
                    <ContactDetail />
                    <ContactMap />
                </ProvideData>
            </main>
            <Footer />
        </>
    )
}

export default Contact