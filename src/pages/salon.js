import * as React from 'react'
import { Form, Button, Col } from 'react-bootstrap';

import Navigation from "../components/Navbar"
import "../pages/salon.css"
import Icons1 from "../images/icons_salon.png"



const SalonPage = () => {
    return (
        <>
            <Navigation />
            <title>DALE - SALÓN DE BELLEZA</title>
            <div className="paragraph">
                <img className="icon" src={Icons1} alt="Productos de belleza" />
                <p className="citasInfo">Si deseas hacer cita en el salón de belleza para el día de la boda, déjanos tus datos aquí:</p>
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

                    <Col className="contactrow selector">
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check inline label="Peinado" name="group1" type={type} id={`inline-${type}-1`} />
                                <Form.Check inline label="Maquillaje" name="group1" type={type} id={`inline-${type}-2`} />
                                <Form.Check inline label="Ambos" name="group1" type={type} id={`inline-${type}-2`} />
                            </div>
                        ))}
                    </Col>

                    <Col className="contactrow">
                        <Button id="btn" type="submit" size="sm">ENVIAR</Button>
                    </Col>
                </Form>
            </div>

            <div className="paragraph2">
                <p className="underline">Para más información:</p>
                <p>dale2021@gmail.com <br />W: (+507) 6672-4269 </p>
            </div>

        </>
    )
}

export default SalonPage