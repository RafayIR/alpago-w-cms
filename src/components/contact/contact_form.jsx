'use client'
import { useState } from "react";
import TextAnimation from "../../hooks/TextAnimation";
import ReCAPTCHA from 'react-google-recaptcha'
import { Halvar, HalvarEng, Rufo, SinHala, StadMitte } from "../../app/font"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [captchaState, setCaptchaState] = useState(false);
    const initialValues = {
        name: '',
        contact: '',
        email: '',
        message: '',
    };


    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is Required'),
        email: Yup.string()
            .email('Invalid email')
            .matches(/^[A-Za-z0-9._%+-]+@([A-Za-z0-9.-]+\.[A-Za-z]{2,4}|com)$/i, 'Invalid Email Format')
            .required('Email is Required'),
        contact: Yup.string()
            .matches(/^[0-9+()-]+$/, 'Invalid Phone Number')
            .required('Phone Number is Required'),
        message: Yup.string().required('Message is Required')
    });



    function onChange(value) {
        if (value) {
            setCaptchaState(true);
        } else {
            setCaptchaState(false);
        }
    }

    const handleSubmit = async (values, { setSubmitting }) => {


        if (!captchaState) {
            alert('Please Fill reCAPTCHA.');
            return;
        }


        setIsSubmitting(true);
        setSubmitting(true)

        console.log(values)
        // try {
        //     instance.post(`/signup/`, {
        //         name: values.name,
        //         email: values.email.toLowerCase(),
        //         password: values.phoneNumber,
        //         contact: values.Message
        //     }).then((resp) => {
        //         if (resp.status === 201) {
        //             setIsSubmitting(false);
        //             setSubmitting(false)
        //         }
        //     }).catch((err) => {
        //         console.log(err)
        //         setIsSubmitting(false);

        //     })
        // } catch (error) {
        //     console.log(error)
        // }
    };

    return (
        <>
            <section className="contact-form-wrapper">
                <div className="bg-black">
                    <div className="container-fluid p-0">
                        <div className="row m-0"> 
                            <div className="col-lg-6 col-md-6 p-0">
                                <div className="form-container">
                                    <div className="form-heading">
                                        <h3 className={`${StadMitte.className}`}>
                                            GET IN TOUCH
                                        </h3>
                                    </div>

                                    <div className="form-wrapper">
                                        <Formik
                                            initialValues={initialValues}
                                            validationSchema={validationSchema}
                                            onSubmit={handleSubmit}
                                        >
                                            {({ isSubmitting }) => (
                                                <Form className="form">
                                                    <div className="input-wrapper">
                                                        <label htmlFor="name" className={SinHala.className}>Your Name</label>
                                                        <Field className={`input ${SinHala.className}`} type="text" name="name" placeholder="Enter Your Name" />
                                                        <ErrorMessage className="error-messagae" name="name" component="div" />
                                                    </div>
                                                    <div className="input-wrapper">
                                                        <label htmlFor="contact" className={SinHala.className}>Phone Number</label>
                                                        <Field className={`input ${SinHala.className}`} type="contact" name="contact" placeholder="Enter Your Phone Number" />
                                                        <ErrorMessage className="error-messagae" name="contact" component="div" />
                                                    </div>
                                                    <div className="input-wrapper">
                                                        <label htmlFor="email" className={SinHala.className}>Your Email</label>
                                                        <Field className={`input ${SinHala.className}`} type="email" name="email" placeholder="Enter Your Email" />
                                                        <ErrorMessage className="error-messagae" name="email" component="div" />
                                                    </div>
                                                    <div className="input-wrapper">
                                                        <label htmlFor="message" className={SinHala.className}>Message</label>
                                                        <Field className={`input ${SinHala.className}`} as="textarea" name="message" placeholder="Enter Message" />
                                                        <ErrorMessage className="error-messagae" name="message" component="div" />
                                                    </div>

                                                    <ReCAPTCHA
                                                        sitekey="6LcYswsqAAAAAANK-lqlq5J9DY9WTs3c3-AIlb5L"
                                                        onChange={onChange}
                                                    />

                                                    <button className={` ${SinHala.className}`} type="submit" disabled={isSubmitting}>
                                                        Submit
                                                    </button>
                                                </Form>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 p-0">
                                <div className="contact-img-wrapper">
                                    <img src="/assets/img/contact/contact-form.png" alt="Contact Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default ContactForm