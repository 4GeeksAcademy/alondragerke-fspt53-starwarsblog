import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Default from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/default.png"
import { HiOutlineHeart, HiHeart } from "react-icons/hi";


const CardPrototype = ({ item, category }) => {
    const { store, actions } = useContext(Context);
    const [isHeartFilled, setIsHeartFilled] = useState(item.isFavorite);

    useState(() => {
        setIsHeartFilled(item.isFavorite);
    }, [item.isFavorite]);

    const handleHeartClick = () => {
        setIsHeartFilled(!isHeartFilled);
        actions.toggleFavorite(item.id, category);
    }

    return (
        <Card border="light" className="card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Default} className="card-image" />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                {console.log("This is the card title: ", item.name)}
                <Card.Text>
                    {/* Renderizar propiedades específicas dependiendo de la categoría */}
                    {category === 'characters' && (
                        <>
                            Birth Year: {item.birth_year} <br />
                            Homeworld: {item.homeworld} <br />
                            Species: {item.species}
                        </>
                    )}{console.log("This is the card information (characters): ", item.birth_year, item.homeworld, item.species)}
                    {category === 'vehicles' && (
                        <>
                            Model: {item.model} <br />
                            Manufacturer: {item.vehicle_class} <br />
                            Vehicle Class: {item.consumables}
                        </>
                    )}{console.log("This is the card information (vehicles): ", item.model, item.vehicle_class, item.consumables)}
                    {category === 'planets' && (
                        <> 
                            Climate: {item.climate} <br />
                            Population: {item.population} <br />
                            Terrain: {item.terrain}
                        </>
                    )}{console.log("This is the card information (planets): ", item.climate, item.population, item.terrain)}
                </Card.Text>
                <div className="d-flex justify-content-between">
                    <Button variant="light" className="card-btn">Discover more</Button>
                    <Button 
                        variant="light"    
                        className={`love-btn ${isHeartFilled ? 'filled' : ''}`}
                        onClick={handleHeartClick}    
                    >
                        {isHeartFilled ? <HiHeart className="heart-filled" /> : <HiOutlineHeart className="heart" /> }
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CardPrototype;