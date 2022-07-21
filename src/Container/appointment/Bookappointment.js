import React from 'react';
import * as yup from 'yup';
import { Formik, Form, useFormik } from 'formik';
import { NavLink, useHistory } from 'react-router-dom';

function Bookappointment(props) {
    
    const history = useHistory();

    let handleInsert = (values) => {
        console.log(values);

        const id = Math.floor(Math.random() * 1000)
        
        let data = {
            id : id,
            ...values
        }
        console.log(data);

        let localData = JSON.parse(localStorage.getItem("bookappointment"));

        if(localData === null){
            localStorage.setItem("bookappointment",JSON.stringify([data]));
        }else{
            localData.push(data)
            localStorage.setItem("bookappointment",JSON.stringify(localData));
        }
        
    }
    let schema = yup.object().shape({
        name: yup.string().required("please enter your name."),
        email: yup.string().required("please enter email id").email("please enter valid email id."),
        phone: yup.string().required("please enter your phone number."),
        date: yup.string().required("please select date."),
        department: yup.string().required("please select department."),
        message: yup.string().required("please enter message."),
    });

    const formikObj = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
            message: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            handleInsert(values)
            history.push("/listappointment")
            // alert(JSON.stringify(values, null, 2));
        },
    });

    const { handleChange, errors, handleSubmit, handleBlur, touched } = formikObj;

    return (
        <div>
            <main id="main">
                <section id="appointment" className="appointment">
                    <div className="container">
                        <div className="section-title">
                            <h2>Book an Appointment</h2>
                            <div className='row'>
                                <div className='col-6'>
                                    <NavLink to={"/bookappointment"}>Bookappointment</NavLink>
                                </div>
                                <div className='col-6'>
                                    <NavLink to={"/listappointment"}>ListAppointment</NavLink>
                                </div>
                            </div>
                        </div>
                        <Formik values={formikObj}>
                            <Form onSubmit={handleSubmit} className="php-email-form">
                                <div className="row">
                                    <div className="col-md-4 form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.name && touched.name ? <p>{errors.name}</p> : ''}
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            placeholder="Your Email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.email && touched.email ? <p>{errors.email}</p> : ''}
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input
                                            type="tel"
                                            className="form-control"
                                            name="phone" id="phone"
                                            placeholder="Your Phone"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.phone && touched.phone ? <p>{errors.phone}</p> : ''}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 form-group mt-3">
                                        <input type="date"
                                            name="date"
                                            className="form-control datepicker"
                                            id="date"
                                            placeholder="Appointment Date"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.date && touched.date ? <p>{errors.date}</p> : ''}
                                    </div>
                                    <div className="col-md-4 form-group mt-3">
                                        <select name="department" id="department" className="form-select" onChange={handleChange} onBlur={handleBlur}>
                                            <option value>Select Department</option>
                                            <option value="Department 1">Department 1</option>
                                            <option value="Department 2">Department 2</option>
                                            <option value="Department 3">Department 3</option>
                                        </select>
                                        {errors.department && touched.department ? <p>{errors.department}</p> : ''}
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        rows={5}
                                        placeholder="Message (Optional)"
                                        defaultValue={""}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.message && touched.message ? <p>{errors.message}</p> : ''}
                                </div>
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Make an Appointment</button></div>
                            </Form>
                        </Formik>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Bookappointment;