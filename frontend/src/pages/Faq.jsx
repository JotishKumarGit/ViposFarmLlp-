import React, { useState } from 'react';
import './Common.css';


const faqData = [
    {
        question: 'Are your fruits and vegetables organic?',
        answer: 'Yes, we offer a wide range of organically grown fruits and vegetables, free from harmful pesticides and chemicals.'
    },
    {
        question: 'How fresh is the produce?',
        answer: 'All our produce is sourced fresh daily from local farms and delivered within 24 hours to ensure maximum freshness and nutritional value.'
    },
    {
        question: 'Do you deliver to homes and offices?',
        answer: 'Yes, we provide doorstep delivery for both residential and commercial customers. You can schedule your delivery at a time that’s convenient for you.'
    },
    {
        question: 'Is there a minimum order value for delivery?',
        answer: 'Yes, we have a minimum order requirement of ₹200 for free delivery. Orders below this amount may include a small delivery fee.'
    },
    {
        question: 'How do I know if the produce is safe to consume?',
        answer: 'We strictly follow food safety standards and hygiene practices. Each batch is quality-checked before delivery.'
    },
    {
        question: 'Can I customize my fruit and vegetable box?',
        answer: 'Absolutely! You can choose your preferred fruits and vegetables or opt for a pre-selected seasonal box curated by our experts.'
    },
    {
        question: 'Do you offer subscription plans?',
        answer: 'Yes, we offer weekly and monthly subscription plans for regular delivery. You can pause or modify your subscription anytime.'
    },
    {
        question: 'Where do you source your produce from?',
        answer: 'We work directly with trusted local farmers and suppliers to ensure fresh, sustainably grown produce.'
    },
    {
        question: 'What if I receive damaged or spoiled items?',
        answer: 'In case of any damaged or spoiled produce, you can contact our support team within 24 hours for a quick replacement or refund.'
    },
    {
        question: 'Are your packaging materials eco-friendly?',
        answer: 'Yes, we use recyclable and biodegradable packaging to minimize environmental impact and keep your produce safe.'
    }
];



const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleIndex = index => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">Frequently Asked Questions</h2>
            <div className="accordion faq-accordion">
                {faqData.map((item, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header">
                            <button
                                className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                                onClick={() => toggleIndex(index)}
                            >
                                <i className={`me-2 fas ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                                {item.question}
                            </button>
                        </h2>
                        <div className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}>
                            <div className="accordion-body">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;