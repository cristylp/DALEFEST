import * as React from 'react'

import Navigation from "../components/Navbar"
import "../pages/eventos.css"
import Cheers from "../images/cheers.png"
import Martini from "../images/martini.png"
import Bus from "../images/bus.png"
import Golf from "../images/golf.png"
import Palm from "../images/palms.png"
import Rings from "../images/rings.png"





const EventosPage = () => {
    return (
        <>
            <Navigation />
            <title>DALE - EVENTOS</title>
            <div className="paragraph">
                <h2 className="titleText">ITINERARIO</h2>

                <div>
                    <img className="icon" src={Martini} alt="Copas de champaña" />
                    <h2 className="titleText">COCKTAIL HAPPY HOUR</h2>
                    <p>Martes 7 de diciembre 6:00 pm <br /> Tacos la Neta, Casco Antiguo</p>
                </div>

                <div>
                    <img className="icon" src={Bus} alt="Bus" />
                    <h2 className="titleText">PTY - BV</h2>
                    <p>Miércoles 8 de diciembre <br /> Buses salen 1:00 - 3:00 pm  <br /> JW Marriott Panamá</p>
                </div>

                <div>
                    <img className="icon" src={Golf} alt="Bola y palo de golf" />
                    <h2 className="titleText">GOLF TOURNAMENT</h2>
                    <p>Jueves 9 de diciembre 8:30 am <br /> Buenaventura Golf & Beach Resort</p>
                </div>

                <div>
                    <img className="icon" src={Palm} alt="Sol y palmera" />
                    <h2 className="titleText">BEACH PARTY</h2>
                    <p>Viernes 10 de diciembre 3:00 pm <br /> ALCALIZ, Buenaventura</p>
                </div>

                <div>
                    <img className="icon" src={Rings} alt="Anillos de matrimonio" />
                    <h2 className="titleText">CEREMONIA Y RECEPCIÓN</h2>
                    <p>Sábado 11 de diciembre 5:00 pm <br /> ALCALIZ, Buenaventura</p>
                </div>

                <div>
                    <img className="icon" src={Bus} alt="Bus" />
                    <h2 className="titleText">PTY - BV</h2>
                    <p>Domingo 12 de diciembre <br /> Buses salen 1:00 - 3:00 pm  <br /> The Buenaventura Golf & Beach Residences</p>
                </div>

            </div>



        </>
    )
}

export default EventosPage