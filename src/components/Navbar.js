import * as React from 'react'
import { Link } from 'gatsby'
import { Navbar, Nav, Container } from 'react-bootstrap';

import "./Navbar.css"



const Navigation = () => {
    return (

        <Container>
            {/* <Link to="/" className="navTitle">DALE</Link> */}
            <Nav className="navbarItems">
                <Link to="/rsvp" className="navlink">RSVP</Link>
                <Link to="/hoteles" className="navlink">Hoteles</Link>
                <Link to="/eventos" className="navlink">Eventos</Link>
                <Link to="/panama" className="navlink">Conoce Panamá</Link>
                <Link to="/regalo" className="navlink">Regalo</Link>
                <Link to="/salon" className="navlink">Salón de Belleza</Link>
            </Nav>
        </Container >
    )


}

export default Navigation