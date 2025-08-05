import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Header() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-dark text-light py-1 px-3 small">
        <div className="container-fluid d-flex justify-content-between align-items-center">

          {/* Left side content */}
          <div>
            <span>Welcome to  Vipos Farm Llp Company!</span>
            {/* Optional: Add social icons here if needed */}
            {/* <i className="bi bi-facebook ms-3"></i> */}
          </div>

          {/* Right side content */}
          <div>
            <span>Email: somvir0628@gmail.com | Phone: +91 9198726625</span>
          </div>
        </div>
      </div>


      {/* Sticky Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm" data-aos="fade-down">
        <div className="container-fluid">
          {/* Left: Brand */}
          <a className="navbar-brand fw-bold" href="#">
            VIPOS FARM LLP COMPANY
          </a>

          {/* Toggler for mobile */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          {/* Navbar Center and Right */}
          <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">

            {/* Center: Search Bar */}
            {/* <form className="d-flex mx-auto" role="search" style={{ width: '100%', maxWidth: '400px' }}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form> */}

            {/* Right: Links */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact-us">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;