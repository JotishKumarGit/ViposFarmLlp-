
import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

const NewsLetter = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address.');
            setSubmitted(false);
            return;
        }
        setError('');
        setSubmitted(true);
        // Here you would send the email to your backend or API
        console.log('Newsletter subscribed:', email);
        setEmail('');
    };

    return (
        <div className="container-fluid py-5 " style={{ backgroundColor: '#f5f5f5' }}>
            <Container className="my-5 p-4 border rounded shadow" style={{ maxWidth: '500px', backgroundColor: '#ffffff' }}>
                <h3 className="mb-3 text-center">Subscribe to Our Newsletter</h3>
                <p className="text-muted text-center mb-4">
                    Stay updated with the latest news, articles, and promotions.
                </p>

                {submitted && (
                    <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
                        🎉 Thank you for subscribing!
                    </Alert>
                )}

                {error && (
                    <Alert variant="danger" onClose={() => setError('')} dismissible>
                        {error}
                    </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            isInvalid={!!error}
                        />
                        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mt-3 w-100">
                        Subscribe Now
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default NewsLetter;
