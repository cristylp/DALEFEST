import React from 'react'
import HomePic from "../images/Pic1.png"
import "../pages/home.css"
import Hoja1 from "../images/hojas_home1.png"
import Hoja2 from "../images/hojas_home2.png"
import Hoja3 from "../images/hojas_home3.png"
import Hoja4 from "../images/hojas_home4.png"

function Homepage() {
    return (
      <>
            <title>DALE - Home</title>
        <div className="home-container">
          <div className="home">
            <img src={Hoja3} alt="" class="hoja-home-3"/>
            <div className="img-home">
              <div className="div-img">
                <img src={Hoja4} alt="" class="hoja-home-4"/>
                <img className="home-pic" src={HomePic} alt="Foto de Ale y Dario" />
              </div>
            </div>
          </div>

          <section className="home-title">
            <h2 className="titleTextHome">Dario & Alejandra</h2>
            <p>Diciembre 11, 2021</p>
            <p>Panamá</p>
          </section>

          <div className="footer-home">
            <img src={Hoja2} alt="" class="hoja-home-2"/>
            <img src={Hoja1} alt="" class="hoja-home-1"/>
          </div>
        </div>
      </>
    )
}

export default Homepage
