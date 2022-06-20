import React, { useState } from 'react';
import * as yup from 'yup';
import { Formik, Form ,useFormik } from 'formik';

function Login_signup(props) {
    const [usertype, setUserType] = useState('login')
    const [reset, setReset] = useState('false')

    let schemaObj,initVle;

    if(usertype === 'login'){
        schemaObj = {
            email: yup.string().required("please enter email id.").email("please enter valid email."),
            password: yup.string().required("please enter password.")
        }
        initVle = {
            email: '',
            password: '',
        }
    }else if(usertype === 'signup'){
        schemaObj = {
            name: yup.string().required("please enter name."),
            email: yup.string().required("please enter email id.").email("please enter valid email."),
            password: yup.string().required("please enter password.")
        }
        initVle = {
            name:'',
            email: '',
            password: '',
        }
    }

    let schema = yup.object().shape(schemaObj);

    const formikObj = useFormik({
        initialValues: initVle,
        validationSchema : schema,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
    });

    const {handleChange,errors,handleSubmit,handleBlur, touched} = formikObj;
    // console.log(errors);

    return (
        <div>
            <section id="appointment" className="appointment text-center">
                <div className="container">
                    <div className="section-title">
                        {
                            reset === 'true' ?
                                <h2>forgot password</h2> :
                                usertype === 'login' ?
                                    <h2>Login</h2>
                                    :
                                    <h2>Signup</h2>
                        }
                    </div>
                    <Formik values={formikObj}>
                        <Form onSubmit={handleSubmit} className="php-email-form">
                        {
                            reset === 'true' ?
                                null :
                                usertype === 'login' ?
                                    null
                                    :
                                    <div className="row">
                                        <div className="text-center col-md-4 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={handleChange} onBlur={handleBlur}/>
                                            <p>{errors.name && touched.name ? errors.name : ''}</p>
                                        </div>
                                    </div>
                        }

                        <div className="row">
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" onChange={handleChange} onBlur={handleBlur}/>
                                <p>{errors.email && touched.errors ? errors.email : ''}</p>

                            </div>
                        </div>
                        {
                            reset === 'true' ?
                                null :
                                <div className="row">
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input type="password" className="form-control" name="password" id="password" placeholder="Your password" onChange={handleChange} onBlur={handleBlur}/>
                                    <p>{errors.password && touched.password ? errors.password : ''}</p>
                                    </div>
                                </div>
                        }
                        {
                            reset === 'true' ?
                                <div className="text-center mt-3"><button type="submit">submit</button></div>
                                :
                                usertype === 'login' ?
                                    <div className="text-center mt-3"><button type="submit">Login</button></div>
                                    :
                                    <div className="text-center mt-3"><button type="submit">signup</button></div>

                        }
                        {   
                            usertype === 'login' ?
                                <div className="text-center mt-3 mb-3">create a new account <button onClick={() => { setReset('false'); setUserType('signup') }}>signup</button></div>
                                :
                                <div className="text-center mt-3 mb-3">already have an account <button onClick={() => { setReset('false'); setUserType('login') }}>Login</button></div>
                        }
                        <button onClick={() => setReset('true')}>forgot password</button>
                        </Form>
                    </Formik>
                </div>
            </section>
        </div>

    );
}

export default Login_signup;
