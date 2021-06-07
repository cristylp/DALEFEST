import * as React from 'react'
import { Link } from 'gatsby'
import { Form, Button, Col } from 'react-bootstrap';
import hoja1 from "../images/hojas_home2.png"
import hoja2 from '../images/hoja_6.png'
import hoja3 from '../images/hojas_home3.png'
import hoja4 from '../images/hoja_5.png'
import Navigation from "../components/Navbar"
import "../pages/rsvp.css"



const RsvpPage = () => {
    return (
        <>
            <Navigation />
            <title>DALE - RSVP</title>
            <div className="container-page" >
              <img src={hoja1} alt="" class="hoja-rsvp1"/>
              <img src={hoja2} alt="" class="hoja-rsvp2"/>
              <img src={hoja3} alt="" class="hoja-rsvp3"/>
              <img src={hoja4} alt="" class="hoja-rsvp4"/>
              <div className="title-box">
                <h1 className="page-title">RSVP</h1>
                <p className="page-subtitle">¡Nos encantaría que nos acompañaras! Si vienes, confírmanos por aquí.</p>
              </div>

              <div className="rsvp_form">
                  <Form method="post" action="https://formspree.io/f/xnqldzez" >
                      <Col className="contactrow">
                          <Form.Control placeholder="Nombre" className="placeholder" />
                      </Col>
                      <Col className="contactrow">
                          <Form.Control placeholder="Apellido" className="placeholder" />
                      </Col>

                      <Col className="contactrow">
                          <Form.Control placeholder="Correo" name="_replyto" className="placeholder" />
                      </Col>

                      <Col className="contactrow">
                          <Form.Control placeholder="Nombre de Acompañantes" className="placeholder" />
                      </Col>

                      <Col className="contactrow">
                          <Button id="btn" type="submit" size="sm">ENVIAR</Button>
                      </Col>
                  </Form>
              </div>

              <div className="contact-text">
                <p className="contact-title">
                  Para más información
                </p>
                <hr id="solid-contact" className="" />
                <p className="contact-text">
                  dale2021@gmail.com
                </p>
                <p className="contact-text">
                  W: (+507) 6672-4269
                </p>
              </div>
            </div>

        </>
    )
}

export default RsvpPage
