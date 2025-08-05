import React from "react";
import "./MorePage.css";
import About from "../About";
import mission from '../../assets/mission.jpg';
import vission from '../../assets/vission.jpg';

function AboutUs() {
  return (
    <>
      <section className="bg-section d-flex align-items-start justify-content-center">
        <div className="text-overlay text-center">
          <h1 className="text-white">About Us</h1>
          <p className="text-white padding-text">
            We are a passionate team dedicated to delivering high-quality
            solutions tailored to your needs. With a focus on innovation,
            reliability, and client satisfaction, we bring your vision to life
            through our expertise and commitment.
          </p>
        </div>
      </section>
      <About />
       <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Our Mission & Vision</h1>
        <p className="lead text-muted">What drives us and where we're going</p>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src={mission}
            alt="Mission"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold">Our Mission</h2>
          <p className="text-muted">
            Our mission is to empower individuals and organizations by delivering innovative, reliable, and impactful solutions. We are committed to excellence, integrity, and driving sustainable progress through technology and creativity.
          </p>
        </div>
      </div>

      <div className="row align-items-center flex-md-row-reverse">
        <div className="col-md-6">
          <img
            src={vission}
            alt="Vision"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold">Our Vision</h2>
          <p className="text-muted">
            Our vision is to become a global leader in delivering transformative solutions that shape the future. We envision a world where innovation meets purpose, enabling communities to thrive in an ever-evolving digital era.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default AboutUs;
