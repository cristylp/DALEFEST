import * as React from 'react'

import Navigation from "../components/Navbar"
import "../pages/eventos.css"
import Cheers from "../images/cheers.png"
import Martini from "../images/martini.png"
import Bus from "../images/bus.png"
import Golf from "../images/golf.png"
import Palm from "../images/palms.png"
import Rings from "../images/rings.png"

import hoja1 from '../images/hojaevento.png'
import hoja2 from '../images/hoja_6.png'
import hoja3 from "../images/hojas_home3.png"
import hoja4 from '../images/plantaevento2.png'



const EventosPage = () => {
    return (
        <>
            <Navigation />
            <title>DALE - EVENTOS</title>
            <div className="container-page" id="eventos-container">
              <img src={hoja1} alt="" className="hoja-evento1"/>
              <img src={hoja2} alt="" className="hoja-evento2"/>
              <img src={hoja3} alt="" className="hoja-evento3"/>
              <img src={hoja4} alt="" className="hoja-evento4"/>
              <div className="title-box">
                <h1 className="page-title">
                  ITINERARIO
                </h1>
              </div>
              <div className="eventos">
                <div className="evento">
                  <img src={Martini} alt="" className="img-evento"/>
                  <h2 className="title-evento">
                    COCKTAIL HAPPY HOUR
                  </h2>
                  <p className="text-evento">
                    Martes 7 de diciembre 6:00 pm
                  </p>
                  <p className="text-evento">
                    Tacos la Neta, Casco Antiguo
                  </p>
                  <p className="text-evento">Dress code: Casual</p>
                </div>

                <div className="evento">
                  <img src={Bus} alt="" className="img-evento"/>
                  <h2 className="title-evento">
                    PTY - BV
                  </h2>
                  <p className="text-evento">
                    Miércoles 8 de diciembre
                  </p>
                  <p className="text-evento">
                    Buses salen 1:00pm y 3:00 pm
                  </p>
                  <p className="text-evento">
                    JW Marriott Panamá
                  </p>
                </div>

                <div className="evento">
                  <img src={Golf} alt="" className="img-evento"/>
                  <h2 className="title-evento">
                    TORNEO DE GOLF
                  </h2>
                  <p className="text-evento">
                    Jueves 9 de diciembre 8:30 am
                  </p>
                  <p className="text-evento">
                    Buenaventura Golf & Beach Resort
                  </p>
                  <p className="text-evento">
                    Reserva tu cupo aquí: +507 6672 4269
                  </p>
                </div>

                <div className="evento">
                  <img src={Palm} alt="" className="img-evento"/>
                  <h2 className="title-evento">
                    BEACH PARTY
                  </h2>
                  <p className="text-evento">
                    Viernes 10 de diciembre 3:00 pm - 9:00 pm
                  </p>
                  <p className="text-evento">
                    <span>
                      <a href="https://www.pinterest.com/aledelag/dale-beach-party-outfits/?invite_code=54711c15bb3d440a8069c5e8f292f176&sender=99079397960585366" target="_blank"
                      id="pinterest-link"> Casual Beach Look</a>
                    </span>
                  </p>
                </div>

                <div className="evento">
                  <img src={Rings} alt="" className="img-evento"/>
                  <h2 className="title-evento">
                    CEREMONIA Y RECEPCIÓN
                  </h2>
                  <p className="text-evento">
                   Sábado 11 de diciembre 5:00 pm
                  </p>
                  <p className="text-evento">
                    ALCALIZ, Buenaventura
                  </p>
                  <p className="text-evento">
                    <span>
                      <a href="https://pin.it/4aOOU8q" id="pinterest-link" className="text-evento" target="_blank"> DALE dress code</a>
                    </span>
                  </p>
                </div>

                <div className="evento">
                  <img src={Bus} alt="" className="img-evento"/>
                  <h2 className="title-evento">
                    BV - PTY
                  </h2>
                  <p className="text-evento">
                   Domingo 12 de diciembre
                  </p>
                  <p className="text-evento">
                    Buses salen 1:00pm y 3:00 pm
                  </p>
                  <p className="text-evento">
                    The Buenaventura Golf & Beach
                    Residences
                  </p>
                </div>

              </div>



            </div>


        </>
    )
}

export default EventosPage
