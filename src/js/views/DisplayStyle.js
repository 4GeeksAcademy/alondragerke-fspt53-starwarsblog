import React, { useState } from "react";
import { Container, Row, Col, Nav } from 'react-bootstrap';


const DisplayStyle = () => {
    const [activeLink, setActiveLink] = useState(null);

    const handleNavClick = (link) => {
        setActiveLink(link);
    };


    return (
        <>
        <Container fluid>
            <Row>
            {/* Lista de opciones fija a la izquierda */}
            <Col md={3} className="position-fixed">
                <div className="nav-title">Browse</div>
                <Nav className="flex-column">
                    <Nav.Link
                        href="#characters"
                        className={`nav-link-custom ${
                        activeLink === "characters" ? "active-link" : ""
                        }`}
                        onClick={() => handleNavClick("characters")}
                    >
                        Characters
                    </Nav.Link>
                    <Nav.Link
                        href="#vehicles"
                        className={`nav-link-custom ${
                        activeLink === "vehicles" ? "active-link" : ""
                        }`}
                        onClick={() => handleNavClick("vehicles")}
                    >
                        Vehicles
                    </Nav.Link>
                    <Nav.Link
                        href="#planets"
                        className={`nav-link-custom ${
                        activeLink === "planets" ? "active-link" : ""
                        }`}
                        onClick={() => handleNavClick("planets")}
                    >
                        Planets
                    </Nav.Link>
                </Nav>
            </Col>
            </Row>
        </Container>
        </>
    );   
};

export default DisplayStyle;