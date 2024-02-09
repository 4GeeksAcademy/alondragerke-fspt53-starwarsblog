import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Default from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/default.png"
import { HiOutlineHeart, HiHeart } from "react-icons/hi";


const CardPrototype = ({ item, category, addToFavorites, removeFromFavorites }) => {
    const { store, actions } = useContext(Context);
    const [isHeartFilled, setIsHeartFilled] = useState(item.isFavorite);

    const handleHeartClick = () => {
        const updatedIsFavorite = !isHeartFilled;

        if (updatedIsFavorite) {
            // Si el corazón estaba lleno, se añade el elemento a favoritos
            addToFavorites(item);
        } else {
            // Si el corazón estaba vacío, se elimina el elemento de favoritos
            removeFromFavorites(item.uid);
        }
        
        setIsHeartFilled(updatedIsFavorite);
        actions.toggleFavorite(item.uid, category);
    };

    useEffect(() => {
        // Check if the current item is still in favorites
        const isInFavorites = store.favorites.some(favorite => favorite.uid === item.uid);
        setIsHeartFilled(isInFavorites); // Update isHeartFilled based on the presence of the item in favorites
    }, [store.favorites, item.uid]);

    let homeworld = "";
    if (item.homeworld) {
        homeworld = item.homeworld.properties.name;
    }

    return (
        <Card border="light" className="card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Default} className="card-image" />
            <Card.Body>
                <Card.Title>{item.properties.name}</Card.Title>
                <Card.Text>
                    {/* Renderizar propiedades específicas dependiendo de la categoría */}
                    {category === 'characters' && (
                        <>
                            Birth Year: {item.properties.birth_year} <br />
                            Homeworld: {homeworld} <br />
                            Gender: {item.properties.gender}
                        </>
                    )}
                    {category === 'species' && (
                        <> 
                            Classification: {item.properties.classification} <br />
                            Designation: {item.properties.designation} <br />
                            Language: {item.properties.language}
                        </>
                    )}
                    {category === 'vehicles' && (
                        <>
                            Model: {item.properties.model} <br />
                            Manufacturer: {item.properties.vehicle_class} <br />
                            Vehicle Class: {item.properties.consumables}
                        </>
                    )}
                    {category === 'planets' && (
                        <> 
                            Climate: {item.properties.climate} <br />
                            Population: {item.properties.population} <br />
                            Terrain: {item.properties.terrain}
                        </>
                    )}
                </Card.Text>
                <div className="d-flex justify-content-between">
                    <Button variant="light" className="card-btn">Discover more</Button>
                    <Button
                        variant="light"
                        className={`love-btn ${isHeartFilled ? 'filled' : ''}`}
                        onClick={handleHeartClick}
                    >
                        {isHeartFilled ? <HiHeart className="heart-filled" /> : <HiOutlineHeart className="heart" />}
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CardPrototype;