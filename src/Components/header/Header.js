import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { themeContext } from '../../Context/ThemeContext';
import { signOutAction } from '../../redux/action/auth.action';
import Alert from '../Alert/Alert';

function Header(props) {
    const value = useContext(themeContext);
    console.log(value);

    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth)

    return (

        <div>
            <div className="main-header">
                <div id="topbar" className={`d-flex align-items-center fixed-top ${value.theme}`}>
                    <div className="container d-flex justify-content-between">
                        <div className="contact-info d-flex align-items-center">
                            <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
                            <i className="bi bi-phone" /> +91 9988776655
                        </div>
                        <button onClick={() => value.toggle_theme(value.theme)}>Change Theme</button>
                        <Alert />
                        <div className="d-none d-lg-flex social-links align-items-center">
                            <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                            <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                            <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                            <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                        </div>

                    </div>
                </div>
                <header id="header" className={`fixed-top ${value.theme}`}>
                    <div className="container d-flex align-items-center">
                        <div className="logo">
                            <NavLink to="/">Home</NavLink>
                            <h1 className="logo me-auto">City</h1><br />
                            <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
                        </div>
                        <nav id="navbar" className="navbar order-last order-lg-0">
                            <ul>
                                <li>
                                    <NavLink className="nav-link scrollto active" to={"/"}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-link scrollto" to={"/department"}>Departments</NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-link scrollto" to={"/docters"}>Doctors</NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-link scrollto" to={"/about"}>About</NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-link scrollto" to={"/contact"}>Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-link scrollto" to={"/medicines"}>Medicines</NavLink>
                                </li>
                            </ul>
                            <i className="bi bi-list mobile-nav-toggle" />
                        </nav>
                        <NavLink className="appointment-btn scrollto" to={"appointment"}><span className="d-none d-md-inline">Make an</span>
                            Appointment</NavLink>
                        {
                            auth.user === null ?
                                <NavLink className="appointment-btn scrollto" to={"/loginsignup"}>
                                    <span className="d-none d-md-inline">
                                        Login/ Signup
                                    </span>
                                </NavLink>
                                :
                                <NavLink className="appointment-btn scrollto" to={"/"}>
                                    <span className="d-none d-md-inline" onClick={() => { dispatch(signOutAction()) }}>Logout</span>
                                </NavLink>
                        }

                    </div>
                </header>
            </div>

        </div>
    );
}

export default Header;