
import { SinHala, StadMitte } from "../../app/font";
import { MdOutlineKeyboardArrowDown, MdViewKanban } from "react-icons/md";
import ReCAPTCHA from 'react-google-recaptcha';
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MultiSelectFormik from '../../components/common/MultiSelect';
import axios from "axios";


const ProjectForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false)
    const [options, setOptions] = useState('')
    const [captchaState, setCaptchaState] = useState(false);

    useEffect(() => {
        try {
            const getActiveProjects = async () => {
                const resp = await axios.get('https://digitalgraphiks.co.uk/demo/alpago-properties-cms/api/get_active_project')
                if (resp) {
                    const updatedOptions = resp?.data?.data?.map(({ id, title, slug }) => ({
                        key: id, // Add a key property based on the id
                        id,
                        name: title, // Change title to name
                        slug
                    }));
                    setOptions(updatedOptions)
                }
            }
            getActiveProjects()
        } catch (error) {
            console.error(error)
        }
    }, [])


    const initialValues = {
        name: '',
        email: '',
        phonenumber: '',
        propertyId: '',
        property_name: '',
        property: [] // This should be an array for multi-select
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is Required'),
        email: Yup.string()
            .email('Invalid email')
            .matches(/^[A-Za-z0-9._%+-]+@([A-Za-z0-9.-]+\.[A-Za-z]{2,4}|com)$/i, 'Invalid Email Format')
            .required('Email is Required'),
        phonenumber: Yup.string()
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


        // if (!captchaState) {
        //     alert('Please Fill reCAPTCHA.');
        //     return;
        // }


        setIsSubmitting(true);
        setSubmitting(true)

        // Extract IDs and join them into a string
        const idsString = values.property?.map(item => item.id).join(',');
        const nameString = values.property?.map(item => item.item).join(',')


        try {
            axios.post(`https://digitalgraphiks.co.uk/demo/alpago-properties-cms/api/brochureRequest`, {
                name: values.name,
                email: values.email.toLowerCase(),
                phonenumber: values.phonenumber,
                property_id: idsString,
                property_name: nameString
            }).then((resp) => {
                if (resp.status === 200) {
                    setSuccess(true)
                    setIsSubmitting(false);
                    setSubmitting(false)
                }
            }).catch((err) => {
                console.log(err)
                setIsSubmitting(false);

            })
        } catch (error) {
            console.log(error)
        }
    };


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
                                                    <Field className={`input ${SinHala.className}`} type="contact" name="phonenumber" placeholder="MOBILE *" />
                                                    <ErrorMessage className={`error-messagae ${SinHala.className}`} name="phonenumber" component="div" />
                                                </div>
                                                <div className="input-wrapper">
                                                    {
                                                        options && (
                                                            <MultiSelectFormik name="property" initialValues={initialValues} options={options} />
                                                        )
                                                    }

                                                    <div className="arrow-down">
                                                        <MdOutlineKeyboardArrowDown />
                                                    </div>
                                                    <ErrorMessage className={`error-messagae ${SinHala.className}`} name="property" component="div" />
                                                </div>
                                            </div>
                                            {
                                                success ?
                                                    <>
                                                        <div className="success-msg" style={{ color: 'white', fontSize: '14px' }}>
                                                            Check Your Email for Brochure(s)
                                                        </div>
                                                    </>
                                                    :
                                                    <>

                                                    </>
                                            }
                                            {/* 
                                            <ReCAPTCHA
                                                sitekey="6LcYswsqAAAAAANK-lqlq5J9DY9WTs3c3-AIlb5L"
                                                onChange={onChange}
                                            /> */}

                                            <button disabled={isSubmitting} className={`${SinHala.className}`} type="submit" >
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