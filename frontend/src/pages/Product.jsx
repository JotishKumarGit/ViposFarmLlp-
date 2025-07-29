

import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Common.css';
import { ProductPreviewModal, EnquiryModal } from '../components/Modals/Modal';
import img_1 from '../assets/velly.webp';
import img_2 from '../assets/vegitables.jpg';
import img_3 from '../assets/semi-husk-coconut.webp';
import img_4 from '../assets/red-pumpkin.jpg';
import img_5 from '../assets/red-onion.jpg';
import img_6 from '../assets/pumpkin.webp';
import img_7 from '../assets/Pomegranate.jpg';
import img_8 from '../assets/ginger.jpg';
import img_9 from '../assets/G-green-chilly.jpg';
import img_10 from '../assets/fruits.jpg';
import img_11 from '../assets/drumsticks.jpg';
import img_12 from '../assets/cavendish-banana.jpg';

const productData = [
    {
        id: 1,
        title: "Velly (Ridge Gourd)",
        description: "Fresh and nutritious ridge gourd, perfect for a variety of Indian dishes. Sourced directly from local farms.",
        img: img_1
    },
    {
        id: 2,
        title: "Mixed Vegetables",
        description: "A colorful and healthy selection of fresh vegetables, ideal for cooking diverse and delicious meals.",
        img: img_2
    },
    {
        id: 3,
        title: "Semi-Husked Coconut",
        description: "Naturally sourced semi-husked coconuts, suitable for both religious rituals and culinary uses.",
        img: img_3
    },
    {
        id: 4,
        title: "Red Pumpkin",
        description: "Rich in fiber and vitamins, this red pumpkin is ideal for soups, curries, and other hearty dishes.",
        img: img_4
    },
    {
        id: 5,
        title: "Red Onion",
        description: "Farm-fresh red onions, a staple in Indian kitchens, known for their sharp flavor and health benefits.",
        img: img_5
    },
    {
        id: 6,
        title: "Green Pumpkin",
        description: "Tender and flavorful green pumpkin, great for curries, stews, and healthy side dishes.",
        img: img_6
    },
    {
        id: 7,
        title: "Pomegranate",
        description: "Juicy and sweet pomegranates packed with antioxidants. Enjoy fresh or as juice for a health boost.",
        img: img_7
    },
    {
        id: 8,
        title: "Fresh Ginger",
        description: "Aromatic and zesty ginger root, perfect for cooking and medicinal uses. Adds a punch to your recipes.",
        img: img_8
    },
    {
        id: 9,
        title: "Green Chilly",
        description: "Spicy green chillies to add heat and flavor to your meals. A must-have for Indian cuisine lovers.",
        img: img_9
    },
    {
        id: 10,
        title: "Seasonal Fruits",
        description: "A delicious mix of seasonal fruits to keep you refreshed and healthy. Handpicked for freshness.",
        img: img_10
    },
    {
        id: 11,
        title: "Drumsticks (Moringa)",
        description: "Nutritious drumsticks, rich in vitamins and minerals. Ideal for sambar, curries, and other South Indian dishes.",
        img: img_11
    },
    {
        id: 12,
        title: "Cavendish Banana",
        description: "Sweet and energy-rich Cavendish bananas. Great as a snack, in smoothies, or as a natural sweetener.",
        img: img_12
    }
];


const Product = () => {

    const [showPreview, setShowPreview] = useState(false);
    const [showEnquiry, setShowEnquiry] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handlePreviewShow = (product) => {
        setSelectedProduct(product);
        setShowPreview(true);
    };

    const handlePreviewClose = () => {
        setShowPreview(false);
        setSelectedProduct(null);
    };

    const handleEnquiryOpen = (product = null) => {
        if (product) setSelectedProduct(product);
        setShowEnquiry(true);
    };

    const handleEnquiryClose = () => {
        setShowEnquiry(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        const phone = '+91 9198726625';
        const text = `Product: ${selectedProduct?.title}\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
        const WaLink = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

        window.open(WaLink, "_blank");
        console.log("data is passed to WhatsApp");
    };


    return (
        <div className="container-fluid p-0 py-5" style={{ backgroundColor: '#f5f5f5' }}>
            <Container className="">
                <h4 className="text-center text-success">Farm Fresh & Organic Produce</h4>
                <h2 className="text-center fw-bold mb-4">
                    Fresh Vegetables | Exotic Fruits | Organic Spices | Traditional Essentials
                </h2>
                <p className="text-center text-muted mb-5">
                    Bring nature’s goodness to your kitchen with our carefully sourced, farm-fresh vegetables, fruits, and traditional produce. Grown sustainably and delivered with care to support healthy living.
                </p>


                <Row className='justify-content-center'>
                    {productData.map((product) => (
                        <Col md={3} sm={6} xs={12} key={product.id} className="mb-4">
                            <Card className="product-card h-100 ">
                                <div className="image-wrapper">
                                    <img src={product.img} alt="" className="base-image" style={{ width: "100%", height: "250px", objectFit: "cover" }} />
                                    <img src={product.img} alt="" className="slide-image" style={{ width: "100%", height: "250px", objectFit: "cover", position: "absolute", top: 0, left: 0 }} />
                                </div>
                                <Card.Body className="text-center">
                                    <Card.Title className="fw-semibold">{product.title}</Card.Title>
                                    <div>
                                        <Button className="me-3" variant="dark" size="sm" onClick={() => handlePreviewShow(product)}>
                                            View Details</Button>
                                        <Button variant="dark" size="sm" onClick={() => handleEnquiryOpen(product)}>
                                            Enquiry
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Product Preview Modals */}
                <ProductPreviewModal
                    show={showPreview}
                    handleClose={handlePreviewClose}
                    product={selectedProduct}
                    onEnquiryClick={() => { handlePreviewClose(); handleEnquiryOpen(); }}
                />

                {/* Enquery modal */}
                <EnquiryModal
                    show={showEnquiry}
                    handleClose={handleEnquiryClose}
                    handleSubmit={handleSubmit}
                    name={name}
                    email={email}
                    message={message}
                    setName={setName}
                    setEmail={setEmail}
                    setMessage={setMessage}
                    product={selectedProduct}
                />
            </Container>
        </div>
    );
};

export default Product;


