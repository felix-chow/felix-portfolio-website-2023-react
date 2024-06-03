import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import blueLagoonHomePage from '../assets/images/bluelagoonHomePage.jpg'

const EcommerceWebDev = () => {
    return (
        <>
            <hr width="70%" style={{ margin: "auto", marginTop: "100px" }} />

            <Container className="w-75 p-3 mt-5" id="ecommerce">
                <Row>
                    <Col md={12}>
                        <h2 style={{ fontSize: 40 }}>E-commerce Web Development</h2>
                        <h3>Cloud Commerce Hub</h3>
                    </Col>
                </Row>

                <Row className="text-align-center">
                    <Col md={{ span: 6 }} className="mb-3 mb-md-0">
                        <p>Here’s an online dropshipping store, also on Shopify. The website allows consumers to shop, add to cart, and purchase using a payment method.</p>
                    </Col>
                    <Col md={{ span: 6 }} className="mb-3 mb-md-0">
                        <img src={blueLagoonHomePage} alt="Blue Lagoon e-commerce Shopify dropshipping website" className="card rounded blue-lagoon-home" width="800px" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default EcommerceWebDev;