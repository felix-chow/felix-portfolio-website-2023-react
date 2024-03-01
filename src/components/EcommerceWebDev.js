const EcommerceWebDev = () => {
    return (
        <>

            <div className="w-50 p-2" id="ecommerce" style={{ marginTop: "100px" }}>
                <h2 style={{ fontSize: 40 }}>E-commerce Web Development</h2>
                <h3>Cafe paradise</h3>

                {/* Start of three-column grid */}
                <div className="d-flex flex-row mb-3">
                    <div className="p-2" style={{margin: "10px 5px 0 110px" }}>
                        <img src="../images/moving-steam-coffee.gif" alt="steaming coffee" className="card rounded float-end" width="371px" />
                    </div>

                    <div className="p-2">
                        <p style={{marginLeft: "110px", paddingRight: "100px"}}>Here’s a sample of my work. Café Paradise is an online coffee shop on Shopify where customers can order coffee, donuts, and sandwiches. The website stores user-selected products into a shopping cart. After completing the checkout process, their order will be stored in the order history under their profile.</p>
                    </div>

                    {/* <div className="p-2">
                        <img src="../images/cafe-paradise-menu-2-1.jpg" alt="cafe paradise menu" className="card rounded float-end" width="290px"/>
                    </div> */}
                    <div className="p-2">
                        <img src="../images/cafe-paradise-menu-2-1.jpg" alt="cafe paradise menu" className="card rounded float-end" width="371px"/>
                    </div>

                </div>
            </div >


            <hr width="70%" style={{ margin: "auto", marginTop: "100px" }} />

            <img src="../images/bluelagoonHomePage.jpg" alt="Blue Lagoon e-commerce Shopify dropshipping website" className="card rounded float-end" width="800px" style={{ marginTop: "170px", marginRight: "100px" }} />

            <div className="w-50 p-3" id="ecommerce" style={{ marginTop: "150px", marginBottom: "150px"}}>
                {/* <h2 style={{ fontSize: 40 }}>E-commerce Web Development</h2> */}
                <h3>Cloud Commerce Hub</h3>
                <p style={{paddingRight: "300px"}}>Here’s an online dropshipping store, also on Shopify. The website allows consumers to shop, add to cart, and purchase using a payment method.</p>
            </div>
        </>
    )
}

export default EcommerceWebDev;