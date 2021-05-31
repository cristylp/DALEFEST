import React from 'react'
import HomePic from "../images/Pic1.png"
import "../pages/home.css"


function Homepage() {
    return (
        <div className="home">
            <title>DALE - Home</title>
            <div className="container">
                <img src={HomePic} alt="Foto de Ale y Dario" />
                <p className="hashtag">#DALEFEST</p>
            </div>
            <section className="paragraph">
                <h2 className="titleText">Dario & Alejandra</h2>
                <p>Diciembre 11, 2021</p>
            </section>

        </div>
    )
}

export default Homepage