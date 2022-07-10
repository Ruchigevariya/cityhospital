import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { Formik, Form, useFormik } from 'formik';
import { NavLink, useHistory } from 'react-router-dom';

function Bookappointment(props) {
    const [update, setUpdate] = useState(false)

    const history = useHistory();

    useEffect(() => {
        console.log(props.location.state);
        let localData =JSON.parse( localStorage.getItem("bookappointment"))
        if (props.location.state && localData !== null) {
            let fData = localData.filter((l) => l.id === props.location.state.id)
            console.log(fData[0]);
            formikObj.setValues(fData[0])
            setUpdate(true)
        }

    }, [])

    const handleUpdateData = (values)=>{
        console.log(values);

        let localData = JSON.parse(localStorage.getItem("bookappointment"));

        let udata = localData.map((l,i) => {
          if(l.id === values.id){
            return values;
          }else{
            return l;
          }  
        })

        localStorage.setItem("bookappointment",JSON.stringify(udata))

        setUpdate(false);
        formikObj.resetForm();
        history.replace();
        history.push("/listappointment")
    }   

    let handleInsert = (values) => {
        console.log(values);

        const id = Math.floor(Math.random() * 1000)

        let data = {
            id: id,
            ...values
        }

        console.log(data);

        let localData = JSON.parse(localStorage.getItem("bookappointment"));

        if (localData === null) {
            localStorage.setItem("bookappointment", JSON.stringify([data]));
        } else {
            localData.push(data)
            localStorage.setItem("bookappointment", JSON.stringify(localData));
        }
        
        history.push("/listappointment")

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
            if(update){
                handleUpdateData(values)
            }else{
                handleInsert(values)
            }
            // alert(JSON.stringify(values, null, 2));
        },
    });

    const { handleChange, errors, handleSubmit, handleBlur, touched, values } = formikObj;

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
                                            value={values.name}
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
                                            value={values.email}
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
                                            value={values.phone}
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
                                            value={values.date}
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
                                        <select name="department" id="department" className="form-select" onChange={handleChange} onBlur={handleBlur} value={values.department}
                                        >
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
                                        value={values.message}
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
                                <div className="text-center">
                                    {
                                        update ?
                                            <button type="submit">update an Appointment</button>
                                            : <button type="submit">Make an Appointment</button>
                                    }

                                </div>
                            </Form>
                        </Formik>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Bookappointment;