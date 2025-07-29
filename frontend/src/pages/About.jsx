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
            if (index < fullText.length - 1) {
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
                        <p className="lead">
                            Freshness you can trust – delivering farm-fresh fruits and vegetables to your doorstep.
                        </p>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="video-wrapper">
                            <img src={img_1} alt="About section" className="about-video" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4>About Us</h4>
                        <p>
                            We are passionate about bringing you the freshest, highest-quality fruits and vegetables straight from farms to your table.
                            Our mission is to promote healthy living by providing natural and sustainably grown produce that is both affordable and accessible.
                        </p>
                        <ul>
                            <li>We are direct farmers and trusted suppliers</li>
                            <li>We deliver fresh produce to homes, shops, and businesses</li>
                            <li>We ensure quality with every order — no compromises</li>
                        </ul>
                        <a href="/about" className="btn btn-outline-primary mt-3">Read More</a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;