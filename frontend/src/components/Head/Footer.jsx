// Footer.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white text-dark pt-4 border-top shadow-sm">
            <div className="container">
                <div className="row">
                    {/* Company Info */}
                    <div className="col-md-4 mb-3">
                        <h5 className="fw-bold"> VIPOS FARM LLP COMPANY</h5>
                        <p className="text-muted">Vegetables are nature’s sacred offerings — vibrant, living representations of the earth’s generosity, revered in kitchens and cultures around the world for their nourishment and vitality.</p>
                    </div>

                    {/* Navigation Links */}
                    <div className="col-md-4 mb-3">
                        <h6 className="fw-bold">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-dark text-decoration-none">Home</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">About</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Services</a></li>
                            <li><a href="#" className="text-dark text-decoration-none">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div className="col-md-4 mb-3">
                        <h6 className="fw-bold">Contact</h6>
                        <p className="text-muted mb-1">Email: somvir0628@gmail.com , info@viposfarm.com</p>
                        <p className="text-muted mb-2">Phone: +91 9198726625, 9781199889</p>
                        <p className="text-muted mb-2">Address: Dohki CH Dadri, Kitlana, Bhiwani, Haryana- 127306 India</p>
                        <div>
                            <a href="#" className="text-dark me-3"><FaFacebook /></a>
                            <a href="#" className="text-dark me-3"><FaTwitter /></a>
                            <a href="#" className="text-dark"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="text-center py-3 border-top mt-3 text-muted small">
                    &copy; {new Date().getFullYear()} <span className='text-primary'> VIPOS FARM LLP COMPANY</span>. All rights reserved.
                    <p>  Designed By <a href="https://trade4export.com/" style={{ color: '#0000FF' }}>Trade4Export</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;