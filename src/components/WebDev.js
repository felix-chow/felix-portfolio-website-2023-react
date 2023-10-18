const WebDev = () => {
    return (
        <>
            <hr width="70%" style={{ margin: "auto", marginTop: "350px" }} />

            <img src="../images/StrangersThings_PostsFeed.png" alt="Stranger's Things Posts Feed" className="card rounded float-end" width="580px" style={{ marginTop: "160px", marginRight: "100px" }} />

            <div className="w-50" style={{ marginTop: "150px", paddingBottom: "200px" }}>
                <h2 style={{ fontSize: 40 }}>Web Development</h2>
                <h3>Stranger's Things</h3>
                <p>Here's a Stranger's Things web application I have created using ReactJS and API. Users can create an account and post items that they would like to sell. They can also post messages on items that they would like to buy.</p>
                <section className="skills">
                    <ul>
                        <li>&#9989;ReactJS</li>
                        <li>&#9989;API</li>
                    </ul>
                </section>
            </div>

            <hr width="70%" style={{ margin: "auto", marginTop: "200px" }} />

            <img src="../images/GuessingGame.png" alt="Numbers Guessing Game" className="card rounded float-end" width="580px" style={{ marginTop: "160px", marginRight: "100px" }} />

            <div className="w-50" style={{ marginTop: "150px", paddingBottom: "200px" }}>
                {/* <h2 style={{ fontSize: 40 }}>Web Development</h2> */}
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