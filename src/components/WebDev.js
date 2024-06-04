import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import coffeeImage from '../assets/images/moving-steam-coffee.gif';
import cafeMenu from '../assets/images/cafe-paradise-menu-2-1.jpg'
const WebDev = () => {
    return (
        <Container className="w-65 p-3" id="web-dev" style={{ marginTop: "100px" }}>
            <Col md={12}>
                <h2 style={{ fontSize: 40 }}>Web Development</h2>
                <h3>Cafe paradise</h3>
            </Col>

            {/* Start of three-column grid */}
            <Row className="align-items-center">
                <Col xs={12} md={4} className="mb-3 mb-md-0">
                    <img src={coffeeImage} alt="steaming coffee" className="steaming-coffee card rounded float-md-end" />
                </Col>
                <Col xs={12} md={4} className="mb-3 mb-md-0">
                    <p>Here’s a sample of my work. Café Paradise is an online coffee shop on Shopify where customers can order coffee, donuts, and sandwiches. The website stores user-selected products into a shopping cart, which is saved in the database. After completing the checkout and payment process, their order will be stored in the order history under their profile.</p>
                </Col>
                <Col xs={12} md={4} >
                    <img src={cafeMenu} alt="cafe paradise menu" className="cafe-menu card rounded float-md-end" />
                </Col>
            </Row>
        </Container >
    )
}

export default WebDev;