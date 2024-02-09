import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Context } from "../store/appContext";
import DisplayStyle from "./DisplayStyle";
import CardPrototype from "./Cards";


const Database = () => {
    const { store, actions } = useContext(Context);
    const [savedItems, setSavedItems] = useState([]);

    const addToFavorites = (item) => {
        // Verificar si el elemento ya está en la lista de favoritos
        const isAlreadyFavorite = store.favorites.some((favoriteItem) => favoriteItem.uid === item.uid);

        // Si el elemento no está en la lista de favoritos, agregarlo
        if (!isAlreadyFavorite) {
            setSavedItems([...savedItems, item]);
            localStorage.setItem('favorites', JSON.stringify([...savedItems, item]));
            console.log("Adding to favorites:", item);
        } else {
            console.log("Item is already in favorites:", item);
        }
    };

    const removeFromFavorites = (id) => {
        const updatedFavorites = savedItems.filter((favoriteItem) => favoriteItem.uid !== id);
        setSavedItems(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        console.log("Deleted from favorites:", id);
    };
  
    useEffect(() => {
        // Solo se ejecuta getDataFromApi si store.characters está vacío
        if (store.characters.length === 0) {
            actions.getDataFromApi();
        }
    }, [store.characters, actions]);

    return (
        <>
            <Container fluid>
                <DisplayStyle />

                {/* Contenido principal */}
                <Row className="ml-3 mt-3">
                    <Col md={{ span: 9, offset: 3 }} className="ml-5 mt-3">
                        {/* Contenido de la Opción 1 */}
                        <Row id="characters" className="d-flex flex-wrap">
                            {store.characters.map((character, index) => (
                                <Col key={index} className="mr-2 mb-2">
                                    <CardPrototype 
                                        item={character} 
                                        category="characters"     
                                        addToFavorites={addToFavorites}
                                        removeFromFavorites={removeFromFavorites}  
                                    />
                                </Col>
                            ))}
                        </Row>

                        {/* Contenido de la Opción 2 */}
                        <Row id="species" className="d-flex flex-wrap">
                            {store.species.map((specie, index) => (
                                <Col key={index} className="mr-2 mb-2">
                                    <CardPrototype 
                                        item={specie} 
                                        category="species"     
                                        addToFavorites={addToFavorites}
                                        removeFromFavorites={removeFromFavorites}   
                                    />
                                </Col>
                            ))}
                        </Row>

                        {/* Contenido de la Opción 3 */}
                        <Row id="vehicles" className="d-flex flex-wrap">
                            {store.vehicles.map((vehicle, index) => (
                                <Col key={index} className="mr-2 mb-2">
                                    <CardPrototype 
                                        item={vehicle} 
                                        category="vehicles"     
                                        addToFavorites={addToFavorites}
                                        removeFromFavorites={removeFromFavorites}  
                                    />
                                </Col>
                            ))}
                        </Row>

                        {/* Contenido de la Opción 4 */}
                        <Row id="planets" className="d-flex flex-wrap">
                            {store.planets.map((planet, index) => (
                                <Col key={index} className="mr-2 mb-3">
                                    <CardPrototype 
                                        item={planet} 
                                        category="planets" 
                                        addToFavorites={addToFavorites}
                                        removeFromFavorites={removeFromFavorites}  
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );   
};


export default Database;