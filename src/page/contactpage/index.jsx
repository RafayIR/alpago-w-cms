
import Header from '../../layout/header/header'
import Footer from '../../layout/footer/footer'
import ContactBanner from '../../components/banner/contactbanner'
import DetailMap from '../../components/detail/detailmap'
import ContactDetail from '../../components/contact/contact_details'
import ContactForm from '../../components/contact/contact_form'

const Contact = () => {
    return (
        <>
            <Header />
            <main>
                <ContactBanner />
                <ContactForm />
                <ContactDetail />
                <DetailMap />
            </main>
            <Footer />
        </>
    )
}

export default Contact