import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <>
            {/* Navbar Start */}
            <div className="container-fluid sticky-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-white py-lg-0 px-lg-3">
                        <Link to="index" className="navbar-brand d-lg-none">
                            <h1 className="text-primary m-0">Lab<span className="text-dark">sky</span></h1>
                        </Link>
                        <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav">
                                <Link to="/" className="nav-item nav-Link">Home</Link>
                                <Link to="about-us" className="nav-item nav-link">About</Link>
                                <Link to="service" className="nav-item nav-link">Services</Link>
                                <div className="nav-item dropdown">
                                    <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                                    <div className="dropdown-menu bg-light m-0">
                                        <Link to="feature" className="dropdown-item">Features</Link>
                                        <Link to="team" className="dropdown-item">Our Team</Link>
                                        <Link to="testimonial" className="dropdown-item">Testimonial</Link>
                                        <Link to="appoinment" className="dropdown-item">Appoinment</Link>
                                        <Link to="404" className="dropdown-item">404 Page</Link>
                                    </div>
                                </div>
                                <Link to="contact" className="nav-item nav-link">Contact</Link>
                            </div>
                            <div className="ms-auto d-none d-lg-flex">
                                <Link className="btn btn-sm-square btn-primary ms-2" to><i className="fab fa-facebook-f" /></Link>
                                <Link className="btn btn-sm-square btn-primary ms-2" to><i className="fab fa-twitter" /></Link>
                                <Link className="btn btn-sm-square btn-primary ms-2" to><i className="fab fa-linkedin-in" /></Link>
                                <Link className="btn btn-sm-square btn-primary ms-2" to><i className="fab fa-youtube" /></Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* Navbar End */}

        </>
    )
}
