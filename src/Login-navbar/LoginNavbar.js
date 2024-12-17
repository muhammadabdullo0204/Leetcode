import React from 'react'
import logo from "../images/rmqhzurd.png";
import { Link } from 'react-router-dom'; 


function LoginNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid d-flex justify-content-between px-15">
                    <a className="navbar-brand" href="#Navbar">
                        <img width="38px" height="25px" src={logo} alt="" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/Main" className="nav-link active" aria-current="page">
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#Navbar">Problems</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Navbar">Contest</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Navbar">Discuss</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#Navbar"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Interview
                                </a>
                                <ul className="dropdown-menu">
                                    <li className='gap' >
                                        <a className="dropdown-item" href="#Navbar">
                                            <img width="18px" height="21px" src="https://leetcode.com/static/webpack_bundles/images/online-interview.bdc7e113a.png" alt="" /> 
                                            <p>Online Interview</p>
                                        </a>
                                    </li>
                                    <li className='gap'>
                                        <a className="dropdown-item" href="#Navbar">
                                            <img width="18px" height="21px" src="https://leetcode.com/static/webpack_bundles/images/mock-assessment.b7bc636b4.png" alt="" /> 
                                            <p>Assessment</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle color"
                                    href="#Navbar"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Store
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item color" href="#Navbar">Redeem</a></li>
                                    <li><a className="dropdown-item color" href="#Navbar">Premium</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn btn-outline-success" type="submit">Premium</button>
                        </form>
                    </div>
                </div>
            </nav>
  )
}

export default LoginNavbar