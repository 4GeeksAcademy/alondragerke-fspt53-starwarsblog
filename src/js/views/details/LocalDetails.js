import React from "react";
import DetailsStorage from "./DetailsStorage";
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from "react-router-dom";


const LocalDetails = ({ type }) => {
    const { id } = useParams();

    const detailId = id;

    let details = [];
    switch (type) {
        case 'character':
            details = DetailsStorage.characters;
            break;
        case 'vehicle':
            details = DetailsStorage.vehicles;
            break;
        case 'species':
            details = DetailsStorage.species;
            break;
        case 'planet':
            details = DetailsStorage.planets;
            break;
        default:
            break;
    }


    const filteredDetail = details.find(detail => detail.uid === detailId);

    if (!filteredDetail) {
        return <p>Detalle no encontrado</p>; 
    }

    return (
        <Container>
            <Row>
                <Col className="details-container">
                <h2 className="details-title">{filteredDetail.name}</h2>
                <div className="details-description">
                    <img src={filteredDetail.image} alt={filteredDetail.name} />
                    <p>{filteredDetail.description}</p>
                </div>
                </Col>
            </Row>
        </Container>
    );
};

export default LocalDetails;

