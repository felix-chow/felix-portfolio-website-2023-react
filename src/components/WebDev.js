const WebDev = () => {
    return (
        <>
            <img src="../images/GraceShopper_Products.png" alt="Grace Shopper e-commerce grocery website" className="card rounded float-end" width="580px" style={{ marginTop: "170px", marginRight: "100px" }} />

            <div className="w-50 p-3" id="web-dev" style={{ marginTop: "150px" }}>
                <h2 style={{ fontSize: 40 }}>E-commerce Web Development</h2>
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

            <img src="../images/GuessingGame.png" alt="Numbers Guessing Game" className="card rounded float-end" width="580px" style={{ marginTop: "160px", marginRight: "100px" }} />

            <div className="w-50" style={{ marginTop: "150px", paddingBottom: "200px" }}>
                <h2 style={{ fontSize: 40 }}>Web Development</h2>
                <h3>Guessing Game</h3>
                <p>Here's a Guessing Game web application I have created using HTML, CSS, and Vanilla JavaScript. Players have to guess the winning number and have five attempts. If they guess the right number, they win. Otherwise, they lose after their fifth incorrect guess.</p>
                <section className="skills">
                    <ul>
                        <li>&#9989;HTML</li>
                        <li>&#9989;CSS</li>
                        <li>&#9989;JavaScript</li>
                    </ul>
                </section>
            </div>
        </>
    )
}

export default WebDev;