const EcommerceWebDev = () => {
    return (
        <>
            <img src="../images/moving-steam-coffee.gif" alt="steaming coffee" className="card rounded float-end" width="580px" style={{ marginTop: "130px", marginRight: "100px" }} />
            <div className="w-50 p-3" id="ecommerce" style={{ marginTop: "100px" }}>
                <h2 style={{ fontSize: 40 }}>E-commerce Web Development</h2>
                <h3>Cafe paradise</h3>
                <p>Here's a coffee shop website I have created where customers can order coffee and donuts. The website stores user-selected products into a shopping cart and offers the option of either local delivery or store pick-up. Once the user proceeds to checkout, their contact and billing information will be stored during the checkout process before they confirm their purchase. The web pages have been created using Liquid, JSON, and CSS. ReactJS scripting is used for payment methods. Google Maps API calls are used for shipping and delivery. All information is stored in Shopify's database.</p>
                <section className="skills">
                    <ul>
                        <li>&#9989;Liquid</li>
                        <li>&#9989;JSON</li>
                        <li>&#9989;CSS</li>
                        <li>&#9989;ReactJS</li>
                        <li>&#9989;API</li>
                    </ul>
                </section>
            </div>

            <hr width="70%" style={{ margin: "auto", marginTop: "100px" }} />
        </>
    )
}

export default EcommerceWebDev;