import * as React from 'react'

import Navigation from "../components/Navbar"
import "../pages/hoteles.css"
import Marriot from "../images/marriot.jpg"
import Bv from "../images/bv.jpg"
import bvrental from "../images/bvrental.jpg"
import Riu from "../images/riu.jpg"


import Hoja1 from "../images/hojas_home1.png"
import Hoja2 from "../images/hojas_home3.png"
import Hoja3 from '../images/hoja_7.png'
import Hoja4 from "../images/hojas_home4.png"

const HotelsPage = () => {
    return (
        <>
            <Navigation />
            <title>DALE - HOTELES</title>
            <div className="container-page" id="container-hoteles">
              <img src={Hoja1} alt="" className="hoja-hotel1"/>
              <img src={Hoja2} alt="" className="hoja-hotel2"/>
              <img src={Hoja3} alt="" className="hoja-hotel3"/>


              <div className="hoteles">
                <div className="hotel">
                  <h2 className="hotel-title">
                    Ciudad de Panamá
                  </h2>
                  <img src={Marriot} alt="" class="imghotel"/>
                  <p className="hotel-subtitle">
                    JW Marriott Panamá
                  </p>
                  <p className="hotel-subtitle" id="hotel-link-text"><span><a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1622740827007&key=GRP&app=resvlink" target="_blank" id="hotel-link">Book your group rate</a></span> for Boda Torres - De La Guardia</p>
                </div>
                <div className="hotel">
                  <h2 className="hotel-title">
                    Buenaventura
                  </h2>
                  <img src={Bv} alt="" class="imghotel"/>
                  <p className="hotel-subtitle">
                    The Buenaventura Golf & Beach Resort
                  </p>
                  <p className="hotel-subtitle" id="hotel-link-text"><span><a href="https://www.marriott.com/hotels/travel/ptykp-the-buenaventura-golf-and-beach-resort-panama-autograph-collection/" target="_blank" id="hotel-link">Book</a></span> for Boda Torres - De La Guardia</p>
                </div>
                <div className="hotel">
                  <h2 className="hotel-title">
                    Buenaventura
                  </h2>
                  <img src={Riu} alt="" class="imghotel"/>
                  <p className="hotel-subtitle">
                    Riu Playa Blanca
                  </p>
                  <p className="hotel-subtitle" id="hotel-link-text"><span><a href="https://www.riu.com/en/hotel/panama/playa-blanca/hotel-riu-playa-blanca/" target="_blank" id="hotel-link">Book your group rate</a></span> for Boda Torres - De La Guardia</p>
                </div>
                <div className="hotel">
                  <h2 className="hotel-title">
                    Buenaventura
                  </h2>
                  <img src={bvrental} alt="" class="imghotel"/>
                  <p className="hotel-subtitle">
                    Buenaventura Rentals
                  </p>
                  <p className="hotel-subtitle" id="hotel-link-text"><span><a href="https://buenaventurarentals.com/" target="_blank" id="hotel-link">Book</a></span> for Boda Torres - De La Guardia</p>
                </div>
              </div>

              <p className="airbnb">También puedes reserver tu Airbnb <span><a href="https://www.airbnb.com/s/Panama-City--Panama/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_dates%5B%5D=july&flexible_trip_dates%5B%5D=june&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&query=Panama%20City%2C%20Panama&place_id=ChIJYwPo2_GorI8RDsFC8PFdoqs&disable_auto_translation=false&source=structured_search_input_header&search_type=autocomplete_click" target="_blank" id="hotel-link">por aquí</a></span></p>
            </div>
        </>
    )
}

export default HotelsPage
