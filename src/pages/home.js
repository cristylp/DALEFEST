import React from 'react'
import HomePic from "../images/Pic1.png"
import "../pages/home.css"
import hoja1 from "../images/hojas_home1.png"
import hoja2 from "../images/hojas_home2.png"
import hoja3 from "../images/hojas_home3.png"
import hoja4 from "../images/hojas_home4.png"

function Homepage() {
    return (
      <>
            <title>DALE - Home</title>
        <div className="home-container">
              <img src={hoja1} alt="" className="hoja-home-1"/>
              <img src={hoja2} alt="" className="hoja-home-2"/>
              <img src={hoja3} alt="" className="hoja-home-3"/>
              <img src={hoja4} alt="" className="hoja-home-4"/>

            <div className="img-home">
              <img className="home-pic" src={HomePic} alt="Foto de Ale y Dario" />
            </div>
            <div className="text-home">
              <h2 className="title-text-home">Dario & Alejandra</h2>
              <p className="subtitle-text-home">Diciembre 11, 2021</p>
              <p className="subtitle-text-home">Panamá</p>
            </div>
        </div>
      </>
    )
}

export default Homepage
