
import { SinHala, StadMitte } from "../../app/font";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MultiSelectFormik from '../../components/common/MultiSelect';


const ProjectForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [captchaState, setCaptchaState] = useState(false);


    const initialValues = {
        name: '',
        email: '',
        contact: '',
        property: [] // This should be an array for multi-select
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
        property: Yup.array().min(1, 'At least one property must be selected').required('Required'),
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

    const options = [
        { name: 'Casa De Sole', id: 1 },
        { name: 'Palm Flower', id: 2 },
        { name: 'Sole Mare', id: 3 },
        { name: 'Riva Del Lusso', id: 4 },
        { name: 'Kural Vista', id: 5 },
    ];
    // const options = [{ name: 'Option 1', id: 1 }, { name: 'Option 2', id: 2 }]

    return (
        <>
            <section className="project-form-wrapper">
                <div className="bg-grey">
                    <div className="container-fluid p-0">
                        <div className="form-padding">
                            <div className="form-heading">
                                <h3 className={`${StadMitte.className}`}>
                                    REQUEST A BROCHURE
                                </h3>
                            </div>
                            <div className="form-wrapper">
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ isSubmitting, handleChange }) => (
                                        <Form className="form">
                                            <div className="form-input">

                                                <div className="input-wrapper">
                                                    <Field className={`input ${SinHala.className}`} type="text" name="name" placeholder="NAME *" />
                                                    <ErrorMessage className={`error-messagae ${SinHala.className}`} name="name" component="div" />
                                                </div>
                                                <div className="input-wrapper">
                                                    <Field className={`input ${SinHala.className}`} type="email" name="email" placeholder="E-MAIL *" />
                                                    <ErrorMessage className={`error-messagae ${SinHala.className}`} name="email" component="div" />
                                                </div>

                                                <div className="input-wrapper">
                                                    <Field className={`input ${SinHala.className}`} type="contact" name="contact" placeholder="MOBILE *" />
                                                    <ErrorMessage className={`error-messagae ${SinHala.className}`} name="contact" component="div" />
                                                </div>
                                                <div className="input-wrapper">
                                                    {/* <Field className={`input ${SinHala.className}`}
                                                        as="select"
                                                        multiple
                                                        name="property"
                                                        id="property"
                                                        required
                                                        // value={values.country}
                                                        onChange={handleChange}
                                                        placeholder="Enter Message" >
                                                        <option value="" label="PROPERTY *" />
                                                        <option value="Casa De Sole" label="Casa De Sole" />
                                                        <option value="Palm Flower" label="Palm Flower" />
                                                        <option value="Sole Mare" label="Sole Mare" />
                                                        <option value="Riva Del Lusso" label="Riva Del Lusso" />
                                                        <option value="Kural Vista" label="Kural Vista" />
                                                    </Field> */}
                                                    <MultiSelectFormik name="property" options={options} />
                                                    <div className="arrow-down">
                                                        <MdOutlineKeyboardArrowDown />
                                                    </div>
                                                    <ErrorMessage className={`error-messagae ${SinHala.className}`} name="property" component="div" />
                                                </div>
                                            </div>
                                            {/* 
                                            <ReCAPTCHA
                                                sitekey="6LcYswsqAAAAAANK-lqlq5J9DY9WTs3c3-AIlb5L"
                                                onChange={onChange}
                                            /> */}

                                            <button className={`${SinHala.className}`} type="submit" disabled={isSubmitting}>
                                                SUBMIT
                                            </button>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ProjectForm;