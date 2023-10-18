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

            <img src="../images/GraceShopper_Products.png" alt="Grace Shopper e-commerce grocery website" className="card rounded float-end" width="580px" style={{ marginTop: "170px", marginRight: "100px" }} />

            <div className="w-50 p-3" id="ecommerce" style={{ marginTop: "150px" }}>
                {/* <h2 style={{ fontSize: 40 }}>E-commerce Web Development</h2> */}
                <h3>Grace Shopper</h3>
                <p>Here's an online grocery website I have collaborated on using ReactJS, Node Express, PostgreSQL and API calls. Users can create an account and buy grocery items. They can view their order history and manage the website as an administrator.</p>
                <section className="skills">
                    <ul>
                        <li>&#9989;Express</li>
                        <li>&#9989;ReactJS</li>
                        <li>&#9989;PostgreSQL</li>
                        <li>&#9989;API</li>
                    </ul>
                </section>
            </div>

            <hr width="70%" style={{ margin: "auto", marginTop: "200px" }} />

            <img src="../images/TicketsOnIce_welcomepage.jpg" alt="Tickets On Ice Welcome Page" className="card rounded float-end" width="290px" style={{ marginTop: "170px", marginRight: "100px" }} />
            <img src="../images/TicketsOnIce_ticketsmenu.jpg" alt="Tickets On Ice Tickets Menu" className="card rounded float-end" width="290px" style={{ marginTop: "170px", marginRight: "100px" }} />

            <div className="w-50 p-3" id="ecommerce" style={{ marginTop: "150px" }}>
                {/* <h2 style={{ fontSize: 40 }}>E-commerce Web Development</h2> */}
                <h3>Tickets On Ice</h3>
                <p>Here's a mobile ticketing application I have created for users to book hockey games. This app stores user and ticket information using MongoDB, and links mobile page routes using NodeJS. There is also weather information displayed on the user profile using API.</p>
                <section className="skills">
                    <ul>
                        <li>&#9989;MongoDB</li>
                        <li>&#9989;NodeJS</li>
                        <li>&#9989;API</li>
                    </ul>
                </section>
            </div>
        </>
    )
}

export default EcommerceWebDev;