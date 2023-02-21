const EcommerceWebDev = () => {
    return (
        <>
            <img src="../images/moving-steam-coffee.gif" alt="steaming coffee" className="card rounded float-end" width="580px" style={{ marginTop: "130px", marginRight: "100px" }} />
            <div className="w-50 p-3" id="ecommerce" style={{ marginTop: "100px" }}>
                <h2 style={{ fontSize: 40 }}>E-commerce Web Development</h2>
                <h3>Cafe paradise</h3>
                <p>Here's a coffee shop website I have created where customers can order coffee and donuts. The website stores user-selected products into a shopping cart. After completing the checkout process, their order will be stored in the order history under their profile. The web pages have been created using ReactJS and CSS. All menu items and sample users have been seeded into the database via PostgreSQL. New users are inserted into the database upon registration. This website uses the Node Express server.</p>
                <section className="skills">
                    <ul>
                        <li>&#9989;JSON</li>
                        <li>&#9989;PostgreSQL</li>
                        <li>&#9989;CSS</li>
                        <li>&#9989;Express</li>
                        <li>&#9989;NodeJS</li>
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