const WebDev = () => {
    return (
        <>
            <hr width="70%" style={{ margin: "auto", marginTop: "100px" }} />

            <div className="d-flex flex-row mb-3">
                <div className="w-50 p-3" id="ecommerce" style={{ marginTop: "150px", marginBottom: "150px" }}>
                    <h2 style={{ fontSize: 40 }}>E-commerce Web Development</h2>
                    <h3>Cloud Commerce Hub</h3>
                    {/* <p style={{paddingRight: "300px"}}>Here’s an online dropshipping store, also on Shopify. The website allows consumers to shop, add to cart, and purchase using a payment method.</p> */}
                    <p>Here’s an online dropshipping store, also on Shopify. The website allows consumers to shop, add to cart, and purchase using a payment method.</p>
                </div>

                <div className="p-2">
                    <img src="../images/bluelagoonHomePage.jpg" alt="Blue Lagoon e-commerce Shopify dropshipping website" className="card rounded float-end" width="800px" style={{ marginTop: "170px", marginRight: "100px" }} />
                </div>

            </div>
        </>
    )
}

export default WebDev;