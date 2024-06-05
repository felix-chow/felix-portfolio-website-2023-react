import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import blueLagoonHomePage from '../assets/images/bluelagoonHomePage.jpg'
import graceShopperProducts from '../assets/images/GraceShopper_Products.png'

const EcommerceWebDev = () => {
    return (
        <>
            <hr width="70%" style={{ margin: "auto", marginTop: "100px" }} />
            <Container id="ecommerce">
                <Container md={12} className="w-75 p-3 mt-5 project-container" id="shopify">
                    <Row>
                        <Col md={12}>
                            <h2 style={{ fontSize: 40 }}>E-commerce Web Development</h2>
                            <h3>Cloud Commerce Hub</h3>
                        </Col>
                    </Row>

                    <Row className="text-align-center">
                        <Col md={{ span: 6 }} className="mb-3 mb-md-0">
                            <p>Here’s an online dropshipping store, also on Shopify. The website offers a streamlined and intuitive purchase flow, allowing consumers to browse products with detailed descriptions and images, and add items to a virtual cart. At checkout, users can choose from multiple secure payment methods, including credit/debit cards, PayPal, and digital wallets, with SSL encryption ensuring data security. After payment, customers receive an immediate order confirmation via email with transaction details and delivery estimates, enhancing customer satisfaction and encouraging repeat business.</p>
                        </Col>
                        <Col md={{ span: 6 }} className="mb-3 mb-md-0">
                            <img src={blueLagoonHomePage} alt="Blue Lagoon e-commerce Shopify dropshipping website" className="card rounded blue-lagoon-home" width="800px" />
                        </Col>
                    </Row>
                </Container>

                <Container md={12} className="w-75 p-3 mt-5 project-container" id="graceshopper">
                    <Row>
                        <Col md={12}>
                            <h3>Grace Hopper</h3>
                        </Col>
                    </Row>

                    <Row className="text-align-center">
                        <Col md={{ span: 6 }} className="mb-3 mb-md-0">
                            <p>Here’s an online grocery store app that lets customers create an account and buy groceries. The website has different categories of groceries for customers to choose from, containing produce items seeded into a database. The user’s account information is also seeded in the database, fetched and displayed onto their profile via API calls.</p>
                        </Col>
                        <Col md={{ span: 6 }} className="mb-3 mb-md-0">
                            <img src={graceShopperProducts} alt="Grace Shopper e-commerce grocery website" className="card rounded graceshopper-products" width="800px" />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default EcommerceWebDev;