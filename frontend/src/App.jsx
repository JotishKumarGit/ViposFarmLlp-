import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Home from './pages/Home';
import Header from './components/Head/Header';
import Footer from './components/Head/Footer';
import AboutUs from "./pages/MorePages/AboutUs";
import Products from "./pages/MorePages/Products";
import Services from "./pages/MorePages/Services";
import Contact from "./pages/MorePages/ContactUs";


function App() {


  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
