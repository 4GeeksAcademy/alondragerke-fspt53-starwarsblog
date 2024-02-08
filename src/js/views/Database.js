import React, { useEffect, useContext } from "react";
import { Container, Col } from 'react-bootstrap';
import { Context } from "../store/appContext";
import DisplayStyle from "./DisplayStyle";
import CardPrototype from "./Cards";


const Database = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        console.log("Characters:", store.characters);
        console.log("Vehicles:", store.vehicles);
        console.log("Planets:", store.planets);
        actions.getDataFromApi();
    }, [actions]);

    console.log("Store:", store); // Verifica el estado completo del almacenamiento

    return (
        <>
        <Container fluid>
            <DisplayStyle />

            {/* Contenido principal */}
            <Col md={{ span: 9, offset: 3 }} className="ml-5 mt-3">
                {/* Contenido de la Opción 1 */}
                <div id="characters">
                    {store.characters.map((character, index) => (
                        <CardPrototype key={index} item={character} category="characters" />
                    ))}
                </div>

                {/* Contenido de la Opción 2 */}
                <div id="vehicles">
                    {store.vehicles.map((vehicle, index) => (
                        <CardPrototype key={index} item={vehicle} category="vehicles" />
                    ))}
                </div>

                {/* Contenido de la Opción 3 */}
                <div id="planets">
                    {store.planets.map((planet, index) => (
                        <CardPrototype key={index} item={planet} category="planets" />
                    ))}
                </div>
            </Col>
        </Container>
        </>
    );   
};

export default Database;