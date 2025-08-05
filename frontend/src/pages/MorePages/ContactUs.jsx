import React from "react";
import Contact from "../Contact";

function ContactUs() {
  return (
    <>
      <section className="bg-section d-flex align-items-start justify-content-center">
        <div className="text-overlay text-center">
          <h1 className="text-white">Contact Us</h1>
          <p className="text-white padding-text">
            Ready to boost your farm’s productivity with certified, high-yield
            seeds? We’d love to hear from you! Our team is here to help you
            choose the right hybrid or organic seeds tailored to your local
            climate, soil, and crop needs — whether you're growing cereals,
            pulses, vegetables, or oilseeds.
          </p>
        </div>
      </section>
      <Contact />
    </>
  );
}

export default ContactUs;
