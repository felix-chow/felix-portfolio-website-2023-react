import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import coffeeImage from '../assets/images/moving-steam-coffee.gif';
import cafeMenu from '../assets/images/cafe-paradise-menu-2-1.jpg'
const WebDev = () => {
    return (
            <div className="w-50 p-2" id="web-dev" style={{ marginTop: "100px" }}>
                <h2 style={{ fontSize: 40 }}>Web Development</h2>
                <h3>Cafe paradise</h3>

                {/* Start of three-column grid */}
                <div className="d-flex flex-column flex-md-row mb-3">
                    <div className="p-2">
                        <img src={coffeeImage} alt="steaming coffee" className="steaming-coffee card rounded float-end" />
                    </div>

                    <div className="p-2">
                        <p style={{ marginLeft: "110px", paddingRight: "100px" }}>Here’s a sample of my work. Café Paradise is an online coffee shop on Shopify where customers can order coffee, donuts, and sandwiches. The website stores user-selected products into a shopping cart. After completing the checkout process, their order will be stored in the order history under their profile.</p>
                    </div>

                    {/* <div className="p-2">
                        <img src="../images/cafe-paradise-menu-2-1.jpg" alt="cafe paradise menu" className="card rounded float-end" width="290px"/>
                    </div> */}
                    <div className="p-2">
                        <img src={cafeMenu} alt="cafe paradise menu" className="cafe-menu card rounded float-end" />
                    </div>

                </div>
            </div >
    )
}

export default WebDev;