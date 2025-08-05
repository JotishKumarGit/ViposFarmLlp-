import React from "react";
import Product from '../Product';

function Products() {

  return (
    <>
      <section className="bg-section d-flex align-items-start justify-content-center">
        <div className="text-overlay text-center">
          <h1 className="text-white">Our Products</h1>
          <p className="text-white padding-text">
           We are a passionate team dedicated to delivering high-quality agro solutions tailored to your specific needs. With a focus on innovation, sustainability, and farmer satisfaction, we bring your vision to life — whether it's through premium seeds, advanced fertilizers, or digital farm management tools.
          </p>
        </div>
      </section>
      <Product />
    </>
  );
}

export default Products;

