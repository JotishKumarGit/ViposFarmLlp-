import React, { useEffect, useState } from 'react';
import './Common.css';
import img_1 from '../assets/vegitables.jpg';

function About() {
    const [text, setText] = useState('');
    const fullText = "  Who We Are";
    const typingSpeed = 150;

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            if (index < fullText.length-1) {
                setText((prev) => prev + fullText[index]);
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, typingSpeed);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='container-fluid py-5'>
            <div className="container">
                <div className="row about-section align-items-center">
                    <div className="col-12 text-center pb-4">
                        <h2 className="fw-bold typing-title">{text}<span className="cursor">|</span></h2>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, architecto!</p>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="video-wrapper">
                            <img src={img_1} alt="About section" className="about-video" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4>About Us</h4>
                        <p>This is a brief description about us and our company.</p>
                        <ul>
                            <li>We Are Manufacturer</li>
                            <li>We Are Supplier</li>
                            <li>We Are Exporter</li>
                        </ul>
                        <a href="/about" className="btn btn-outline-primary mt-3">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;