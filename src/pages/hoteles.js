import * as React from 'react'

import Navigation from "../components/Navbar"
import "../pages/hoteles.css"
import Marriot from "../images/MARRIOTT.png"
import Bv from "../images/BV.png"

import Hoja1 from "../images/hojas_home1.png"
import Hoja2 from "../images/hojas_home3.png"
import Hoja7 from '../images/hoja_7.png'
import Hoja3 from "../images/hojas_home4.png"

const HotelsPage = () => {
    return (
        <>
            <Navigation />
            <title>DALE - HOTELES</title>
            <div className="hotels-container">
              <img src={Hoja1} alt="" class="hoja-hotel1"/>
              <img src={Hoja2} alt="" class="hoja-hotel2"/>
              <div className="fullWidth" id="hotel-fullwidth">

                  <div className="paragraphRight">
                      <h2 className="locationText" id="hoteltext">Ciudad de Panamá</h2>
                      <a href="https://www.marriott.com/hotels/travel/ptymj-jw-marriott-panama/">
                        <img className="hotelPic" src={Marriot} alt="JW Marriott Hotel, Panama City" />
                      </a>
                        <p className="hotelName">JW Marriott Panamá</p>
                  </div>

                  <div className="paragraphLeft">
                      <h2 className="locationText" id="hoteltext">Buenaventura</h2>
                      <a href="https://www.marriott.com/hotels/travel/ptykp-the-buenaventura-golf-and-beach-resort-panama-autograph-collection/">
                        <img className="hotelPic" src={Bv} alt="Buenaventura Golf & Beach Resort" />
                      </a>
                        <p className="hotelName">The Buenaventura Golf & Beach Resort</p>
                  </div>

                  <p className="airbnb">También puedes reserver tu Airbnb <span><a href="https://www.airbnb.com/s/Panama-City--Panama/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_dates%5B%5D=july&flexible_trip_dates%5B%5D=june&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&query=Panama%20City%2C%20Panama&place_id=ChIJYwPo2_GorI8RDsFC8PFdoqs&disable_auto_translation=false&source=structured_search_input_header&search_type=autocomplete_click">por aquí</a></span></p>

              </div>
            </div>
        </>
    )
}

export default HotelsPage
