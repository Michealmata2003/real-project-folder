import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import ScrollToTop from "react-scroll-to-top";
import './Styles/Footer.css'

function Footer() {
    return (
        <div>
            <div className='footer-main'>
                <div className="container">
                    <div className="footer-head">
                        <div className="social">
                            <NavLink className="logo" to="/">
                                Texa<span>Stream</span>
                            </NavLink>
                            <p>Here , write the complete address of the Registered office address along with telephone number.</p>
                            <div className="social-icons">
                                <Link to='/'><BsTwitter /></Link>
                                <Link to='/'><FaFacebookF /></Link>
                                <Link to='/'><BsInstagram /></Link>
                                <Link to='/'><BsLinkedin /></Link>
                            </div>
                        </div>
                        <div className="display">
                            <h6>DISPLAY TYPE</h6>
                            <Link to='/'>Action</Link>
                            <Link to='/'>Comedy</Link>
                            <Link to='/'>Drama</Link>
                            <Link to='/'>Horror</Link>
                        </div>
                        <div className="production">
                            <h6>PRODUCTION</h6>
                            <Link to='/'>2018 Year</Link>
                            <Link to='/'>2019 Year</Link>
                            <Link to='/'>2020 Year</Link>
                            <Link to='/'>2021 Year</Link>
                        </div>
                        <div className="quality">
                            <h6>DISPLAY TYPE</h6>
                            <Link to='/'>720p HDTV</Link>
                            <Link to='/'>1080P Bluray</Link>
                            <Link to='/'>720p Bluray</Link>
                            <Link to='/'>1080p WEB-DL</Link>
                        </div>

                    </div>

                </div>

            </div>
            <div className="footer-foot">
                <div className="container">
                    <div className="footer-reservered">
                        <p>© Copyright 2021, All Rights Reserved Michealmata</p>
                        <div>
                            <Link to='/'>Terms of Service</Link>
                            <Link to='/'>Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </div>

            <ScrollToTop smooth
                color='#FF0000'
                viewBox="0 0 256 256"
            />

        </div>
    )
}

export default Footer
