import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Context } from "../store/appContext";
import DisplayStyle from "./DisplayStyle";
import CardPrototype from "./Cards";
import DetailsStorage from "./details/DetailsStorage";


const Database = ({ updateHeartState }) => {
    const { store, actions } = useContext(Context);

    const addToFavorites = (item) => {
        actions.toggleFavorite(item.uid, 'favorites');
    };

    const removeFromFavorites = (id) => {
        actions.toggleFavorite(id, 'favorites');
    };

    useEffect(() => {
        if (store.characters.length === 0) {
            actions.getDataFromApi();
        }
    }, [store.characters, actions]);


    return (
        <>
            <Container fluid>
                <DisplayStyle />

                <Row>
                    <Col md={{ span: 9, offset: 3 }}>
                        <div id="characters">
                            {store.characters.map((character, index) => (
                                <div key={index}>
                                    <CardPrototype 
                                        item={character} 
                                        category="characters"     
                                        addToFavorites={addToFavorites}
                                        removeFromFavorites={removeFromFavorites} 
                                        updateHeartState={updateHeartState} 
                                        DetailsStorage={DetailsStorage}
                                    />
                                </div>
                            ))}
                        </div>

                        <div id="species">
                            {store.species.map((specie, index) => (
                                <div key={index}>
                                    <CardPrototype 
                                        item={specie} 
                                        category="species"     
                                        addToFavorites={addToFavorites}
                                        removeFromFavorites={removeFromFavorites} 
                                        updateHeartState={updateHeartState}
                                        DetailsStorage={DetailsStorage}
                                    />
                                </div>
                            ))}
                        </div>

                        <div id="vehicles">
                            {store.vehicles.map((vehicle, index) => (
                                <div key={index}>
                                    <CardPrototype 
                                        item={vehicle} 
                                        category="vehicles"     
                                        addToFavorites={addToFavorites}
                                        removeFromFavorites={removeFromFavorites}  
                                        updateHeartState={updateHeartState} 
                                        DetailsStorage={DetailsStorage}
                                    />
                                </div>
                            ))}
                        </div>

                        <div id="planets">
                            {store.planets.map((planet, index) => (
                                <div key={index}>
                                    <CardPrototype 
                                        item={planet} 
                                        category="planets" 
                                        addToFavorites={addToFavorites}
                                        removeFromFavorites={removeFromFavorites}  
                                        updateHeartState={updateHeartState} 
                                        DetailsStorage={DetailsStorage}
                                    />
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};


export default Database;