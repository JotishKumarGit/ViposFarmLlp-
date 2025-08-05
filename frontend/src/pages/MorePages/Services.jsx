import React from "react";
import Service from '../Service';

function Services() {
  return (
    <>
      <section className="bg-section d-flex align-items-start justify-content-center">
        <div className="text-overlay text-center">
          <h1 className="text-white">Our Services</h1>
          <p className="text-white padding-text">
           We provide certified, high-yield seeds tailored to local climates and soil conditions. Our offerings include hybrid and organic seeds for cereals, pulses, vegetables, and oilseeds — helping farmers boost crop resilience and output.
          </p>
        </div>
      </section>
      <Service />
    </>
  );
}

export default Services;
