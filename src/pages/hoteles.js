import * as React from 'react'

import Navigation from "../components/Navbar"
import "../pages/hoteles.css"
import Marriot from "../images/MARRIOTT.png"
import Bv from "../images/BV.png"


const HotelsPage = () => {
    return (
        <>
            <Navigation />
            <title>DALE - HOTELES</title>

            <div className="fullWidth">

                <div className="paragraphRight">
                    <h2 className="locationText">Ciudad de Panamá</h2>
                    <img className="hotelPic" src={Marriot} alt="JW Marriott Hotel, Panama City" />
                    <p className="hotelName">JW Marriott Panamá</p>
                </div>

                <div className="paragraphLeft">
                    <h2 className="locationText">Buenaventura</h2>
                    <img className="hotelPic" src={Bv} alt="Buenaventura Golf & Beach Resort" />
                    <p className="hotelName">The Buenaventura Golf & Beach Resort</p>
                </div>

            </div>
        </>
    )
}

export default HotelsPage