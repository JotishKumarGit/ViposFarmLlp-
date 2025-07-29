import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Common.css';


const testimonials = [
    {
        name: 'Priya Sharma',
        title: 'Home Chef',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        quote: 'The fruits and vegetables are always fresh and delivered right on time. I love the quality!',
    },
    {
        name: 'Ravi Mehta',
        title: 'Restaurant Owner',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        quote: 'Our kitchen depends on fresh produce daily, and this service never disappoints. Highly reliable!',
    },
    {
        name: 'Sonal Desai',
        title: 'Nutritionist',
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        quote: 'High-quality, pesticide-free fruits and veggies — perfect for a healthy lifestyle. Recommended to all my clients!',
    },
];


const TestimonialsSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section
            id="testimonials"
            className="py-5"
            style={{ backgroundColor: 'rgba(240, 240, 240, 0.8)' }}
        >
            <div className="container pb-5">
                <h2 className="text-center mb-3">What Our Clients Say</h2>
                <p className="text-muted text-center mb-5">
                    Hear from our valued clients across the jewelry industry — from renowned designers and luxury retailers to skilled artisans and global distributors — who trust us for our exceptional craftsmanship, reliable service, and timeless designs.
                </p>
                <div className="row g-4">
                    {testimonials.map((testimonial, index) => (
                        <div className="col-sm-12 col-md-6 col-lg-4 d-flex" key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                            <div className="card shadow  pb-5 border-0 text-center w-100 h-100">
                                <div className="card-body  d-flex flex-column justify-content-center">
                                    <img
                                        src={testimonial.image}
                                        alt={`Photo of ${testimonial.name}`}
                                        className="rounded-circle mb-3"
                                        width="80"
                                        height="80"
                                    />
                                    <h5 className="card-title mb-1">{testimonial.name}</h5>
                                    <p className="text-muted mb-2">{testimonial.title}</p>
                                    <p className="card-text fst-italic">"{testimonial.quote}"</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;