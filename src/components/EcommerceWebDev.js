const EcommerceWebDev = () => {
    return (
        <>

            <div className="w-50 p-2" id="ecommerce" style={{ marginTop: "100px" }}>
                <h2 style={{ fontSize: 40 }}>E-commerce Web Development</h2>
                <h3>Cafe paradise</h3>

                {/* Start of three-column grid */}
                <div className="d-flex flex-row mb-3">
                    <div className="p-2" style={{marginLeft: "120px", }}>
                        <img src="../images/moving-steam-coffee.gif" alt="steaming coffee" className="card rounded float-end" width="290px" />
                    </div>

                    <div className="p-2">
                        <p style={{marginLeft: "130px", paddingRight: "120px"}}>Here's a coffee shop website I have created where customers can order coffee and donuts. The website stores user-selected products into a shopping cart. After completing the checkout process, their order will be stored in the order history under their profile. The web pages have been created using ReactJS and CSS. All menu items and sample users have been seeded into the database via PostgreSQL. New users are inserted into the database upon registration. This website uses the Node Express server.</p>
                        <section className="skills">
                            <ul>
                                <li>&#9989;Shopify</li>
                            </ul>
                        </section>
                    </div>

                    <div className="p-2">
                        <img src="../images/cafe-paradise-menu-2-1.jpg" alt="cafe paradise menu" className="card rounded float-end" width="290px"/>
                    </div>

                </div>
            </div >


            <hr width="70%" style={{ margin: "auto", marginTop: "100px" }} />

            <img src="../images/bluelagoonHomePage.jpg" alt="Blue Lagoon e-commerce Shopify dropshipping website" className="card rounded float-end" width="580px" style={{ marginTop: "170px", marginRight: "100px" }} />

            <div className="w-50 p-3" id="ecommerce" style={{ marginTop: "150px", marginBottom: "150px"}}>
                {/* <h2 style={{ fontSize: 40 }}>E-commerce Web Development</h2> */}
                <h3>Blue Lagoon</h3>
                <p>Here’s an online dropshipping store I have made, also through Shopify. The website allows consumers the choice to either buy a product right away or add to cart and continue shopping.</p>
                <section className="skills">
                    <ul>
                        <li>&#9989;Shopify</li>
                    </ul>
                </section>
            </div>
        </>
    )
}

export default EcommerceWebDev;