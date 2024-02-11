import React from "react";
import LocalDetails from "./LocalDetails";
import ApiDetails from "./ApiDetails";
import { useParams } from "react-router-dom"; 
import { Container, Row } from 'react-bootstrap';


const CombinedDetails = () => {
    const { category, id } = useParams(); 

    return (
        <Container className="container-details">
            <Row>
                <div>
                    <LocalDetails type={category} />
                </div>
            </Row>
            <Row>
                <div>
                    <ApiDetails type={category} id={id} />
                </div>
            </Row>
        </Container>
    );
};

export default CombinedDetails;

