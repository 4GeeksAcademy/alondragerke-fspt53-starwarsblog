import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Default from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/default.png"
import { HiOutlineHeart, HiHeart } from "react-icons/hi";


const CardPrototype = ({ item, category }) => {
    const { store, actions } = useContext(Context);
    const [isHeartFilled, setIsHeartFilled] = useState(item.isFavorite);

    const handleHeartClick = async () => {
        console.log("Toggling favorite for item with uid:", item.uid);
        await actions.toggleFavorite(item.uid, category);
        setIsHeartFilled(!isHeartFilled);
    };

    useEffect(() => {
        setIsHeartFilled(store.heartStates[item.uid] || false); // Actualizar el estado del corazón específico del uid
    }, [store.heartStates, item.uid]);

    const handleRemoveFromFavorites = async () => {
        await actions.toggleFavorite(item.uid, category);
        setIsHeartFilled(false); // Establecer el estado del corazón como contorno al eliminar el personaje de favoritos
    };

    // Verificar si el item.uid está presente en store.favorites
    useEffect(() => {
        const isFavorite = store.favorites.some(favorite => favorite.uid === item.uid);
        setIsHeartFilled(isFavorite);
    }, [store.favorites, item.uid]);


    let homeworld = "";
    if (item.homeworld) {
        homeworld = item.homeworld.properties.name;
    }

    return (
        <Card border="light" className="card">
            <Card.Img variant="top" src={Default} className="card-image" />
            <Card.Body>
                <Card.Title>{item.properties.name}</Card.Title>
                <Card.Text>
                    {/* Renderizar propiedades específicas dependiendo de la categoría */}
                    {category === 'characters' && (
                        <>
                            <b>Birth Year:</b> {item.properties.birth_year} <br />
                            <b>Homeworld:</b> {homeworld} <br />
                            <b>Gender:</b> {item.properties.gender}
                        </>
                    )}
                    {category === 'species' && (
                        <> 
                            <b>Classification:</b> {item.properties.classification} <br />
                            <b>Designation:</b> {item.properties.designation} <br />
                            <b>Language:</b> {item.properties.language}
                        </>
                    )}
                    {category === 'vehicles' && (
                        <>
                            <b>Model:</b> {item.properties.model} <br />
                            <b>Vehicle class:</b> {item.properties.vehicle_class} <br />
                            <b>Consumables:</b> {item.properties.consumables}
                        </>
                    )}
                    {category === 'planets' && (
                        <> 
                            <b>Climate:</b> {item.properties.climate} <br />
                            <b>Population:</b> {item.properties.population} <br />
                            <b>Terrain:</b> {item.properties.terrain}
                        </>
                    )}
                </Card.Text>
                <div className="card-btns">
                <Button variant="light" className="card-btn">Discover more</Button>
                    <Button
                        variant="light"
                        className={`love-btn ${isHeartFilled ? 'filled' : ''}`}
                        onClick={isHeartFilled ? handleRemoveFromFavorites : handleHeartClick}
                    >
                        {isHeartFilled ? <HiHeart className="heart-filled" /> : <HiOutlineHeart className="heart" />}
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CardPrototype;