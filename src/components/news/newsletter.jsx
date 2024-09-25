import { SinHala, StadMitte } from "../../app/font";


const NewsLetter = () => {


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

                    <div className="input-group news-letter-input mb-3">
                        <input type="text" className="form-control" placeholder="Enter your email" aria-label="Enter your email" />
                        <button className={`btn ${SinHala.className}`} type="button" id="button-addon2">Submit</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsLetter;