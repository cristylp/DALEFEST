import * as React from 'react'
import { Link } from 'gatsby'
import { Form, Button, Col } from 'react-bootstrap';

import Navigation from "../components/Navbar"
import "../pages/rsvp.css"



const RsvpPage = () => {
    return (
        <>
            <Navigation />
            <title>DALE - RSVP</title>
            <div className="paragraph">
                <h2 className="titleText">RSVP</h2>
                <p>¡Nos encantaría que nos acompañaras! <br /> Si vienes, confírmanos por aquí.</p>
                {/* <Link to="/">Back Home</Link> */}
            </div>

            <div className="rsvp_form">
                <Form method="post" action="https://formspree.io/{your-unique-getform-endpoint}">
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
                        <Form.Control placeholder="Número de Acompañantes" className="placeholder" />
                    </Col>

                    <Col className="contactrow">
                        <Button id="btn" type="submit" size="sm">ENVIAR</Button>
                    </Col>
                </Form>
            </div>

            <div className="paragraph2">
                <p className="underline">Para más información:</p>
                <p className="whatsappnumber">dale2021@gmail.com <br />W: (+507) 6672-4269 </p>
            </div>

        </>
    )
}

export default RsvpPage