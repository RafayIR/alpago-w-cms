import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";
import { SinHala } from "../../app/font";
import { color } from "framer-motion";


const PrivacyPolicy = () => {

    const privacyStyle = {
        privacyWrapper: {
            background: '#000',
            paddingBottom: '1px',
            paddingTop: '150px',
            paddingInline: '50px'
        },


        heading: {
            color: 'white',
            fontSize: '44px'
        },

        paragraph: {
            color: 'white',
            fontSize: '20px'
        }
    };


    return (
        <>
            <Header />
            <main>
                <section style={privacyStyle.privacyWrapper}>
                    <div className="privacy-heading">
                        <h1 style={privacyStyle.heading} className={SinHala.className}>
                            Privacy Policy
                        </h1>
                    </div>

                    <div style={{ marginTop: '50px' }} className="privacy-policy-para-wrapper">
                        <p style={privacyStyle.paragraph}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa illo molestiae porro debitis enim! Ratione beatae hic
                            fugiat blanditiis ipsa? Optio maxime, aut veritatis perferendis ea repudiandae facere vitae expedita, ad mollitia deleniti,
                            voluptate corporis. Quisquam quidem modi explicabo magni autem quas quam. Sit placeat voluptatem sed repudiandae
                            laborum aliquid veniam quasi reiciendis harum dolorum facere aspernatur quaerat laboriosam error, magnam aperiam,
                            dolor omnis, inventore itaque animi! Aliquam unde optio laboriosam numquam, explicabo ex libero reprehenderit neque modi.
                            Eligendi tempora dolore expedita hic rem,molestiae iure recusandae numquam aliquam deserunt et placeat vel iusto eius
                            ipsam voluptate itaque cumque alias.
                        </p>

                        <p style={privacyStyle.paragraph}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa illo molestiae porro debitis enim! Ratione beatae hic
                            fugiat blanditiis ipsa? Optio maxime, aut veritatis perferendis ea repudiandae facere vitae expedita, ad mollitia deleniti,
                            voluptate corporis. Quisquam quidem modi explicabo magni autem quas quam. Sit placeat voluptatem sed repudiandae
                            laborum aliquid veniam quasi reiciendis harum dolorum facere aspernatur quaerat laboriosam error, magnam aperiam,
                            dolor omnis, inventore itaque animi! Aliquam unde optio laboriosam numquam, explicabo ex libero reprehenderit neque modi.
                            Eligendi tempora dolore expedita hic rem,molestiae iure recusandae numquam aliquam deserunt et placeat vel iusto eius
                            ipsam voluptate itaque cumque alias.
                        </p>

                    </div>
                </section>
            </main>
            <Footer />

        </>
    )
}



export default PrivacyPolicy