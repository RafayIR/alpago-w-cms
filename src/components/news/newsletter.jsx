import { useEffect, useState } from "react";
import { SinHala, StadMitte } from "../../app/font";
import axios from "axios";

const NewsLetter = () => {
    const [email, setEmail] = useState();
    const [message, setMessage] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const resp = await axios.post('https://digitalgraphiks.co.uk/demo/alpago-properties-cms/api/subscriber', {
            newsletter_email: email
        })

        setMessage(resp?.data?.message)
    }



    return (

        <>
            <section className="news-letter-wrapper">
                <div className="news-letter">
                    <div className="news-letter-heading">
                        <h3 className={StadMitte.className}>
                            Subscribe to our newsletter
                        </h3>
                    </div>
                    <div className="news-letter-sub-heading">
                        <h5 className={SinHala.className}>
                            Subscribe to our newsletter and stay updated
                        </h5>
                    </div>

                    <form onSubmit={handleSubmit} className="input-group news-letter-input mb-3">
                        <input type="email" className="form-control" value={email} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                        <button className={`btn ${SinHala.className}`} type="submit">Submit</button>
                    </form>

                    {
                        message && (
                            <div style={{ color: 'white', textTransform: 'capitalize' }}>
                                {message}
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default NewsLetter;