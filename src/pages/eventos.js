import * as React from 'react'

import Navigation from "../components/Navbar"
import "../pages/eventos.css"
import Cheers from "../images/cheers.png"
import Martini from "../images/martini.png"
import Bus from "../images/bus.png"
import Golf from "../images/golf.png"
import Palm from "../images/palms.png"
import Rings from "../images/rings.png"

import Hoja3 from "../images/hojas_home3.png"
import hoja2 from '../images/hoja_6.png'
import hoja1 from '../images/hojaevento.png'
import hoja4 from '../images/plantaevento2.png'



const EventosPage = () => {
    return (
        <>
            <Navigation />
            <title>DALE - EVENTOS</title>
            <div className="container-eventos">
                <img src={Hoja3} alt="" class="hoja-eventos1"/>
                <img src={hoja2} alt="" class="hoja-eventos2"/>
                <img src={hoja1} alt="" class="hoja-eventos3"/>
                <img src={hoja4} alt="" class="hoja-eventos4"/>

                <h2 className="titleText">ITINERARIO</h2>

                <div className="evento-box">
                    <img className="icon-evento" src={Martini} alt="Copas de champaña" />
                    <h2 className="title-evento">COCKTAIL HAPPY HOUR</h2>
                    <p className="text-evento">Martes 7 de diciembre 6:00 pm <br /> Tacos la Neta, Casco Antiguo</p>
                    <p className="text-evento">Dress code: Casual</p>
                </div>

                <div className="evento-box">
                    <img className="icon-evento" src={Bus} alt="Bus" />
                    <h2 className="title-evento">PTY - BV</h2>
                    <p className="text-evento">Miércoles 8 de diciembre <br /> Buses salen 1:00 y 3:00 pm  <br /> JW Marriott Panamá</p>
                </div>

                <div className="evento-box">
                    <img className="icon-evento" src={Golf} alt="Bola y palo de golf" />
                    <h2 className="title-evento">TORNEO DE GOLF</h2>
                    <p className="text-evento">Jueves 9 de diciembre 8:30 am <br /> Buenaventura Golf & Beach Resort</p>
                    <p className="text-evento">Reserva tu cupo aquí: +507 6672 4269</p>
                </div>

                <div className="evento-box">
                    <img className="icon-evento" src={Palm} alt="Sol y palmera" />
                    <h2 className="title-evento">BEACH PARTY</h2>
                    <p className="text-evento">Viernes 10 de diciembre 3:00 pm - 9:00 pm <br /> ALCALIZ, Buenaventura</p>
                    <a href="https://pin.it/4aOOU8q" id="pinterest-link" className="text-evento"> Casual Beach Look</a>
                </div>

                <div className="evento-box">
                    <img className="icon-evento" src={Rings} alt="Anillos de matrimonio" />
                    <h2 className="title-evento">CEREMONIA Y RECEPCIÓN</h2>
                    <p className="text-evento">Sábado 11 de diciembre 5:00 pm <br /> ALCALIZ, Buenaventura</p>
                    <a href="https://pin.it/4aOOU8q" id="pinterest-link" className="text-evento"> DALE dress code</a>
                </div>

                <div className="evento-box">
                    <img className="icon-evento" src={Bus} alt="Bus" />
                    <h2 className="title-evento">BV - PTY</h2>
                    <p className="text-evento">Domingo 12 de diciembre <br /> Buses salen 1:00 y 3:00 pm  <br /> The Buenaventura Golf & Beach Residences</p>
                </div>

            </div>



        </>
    )
}

export default EventosPage
