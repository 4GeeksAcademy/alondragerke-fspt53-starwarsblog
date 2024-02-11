import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { Link } from "react-router-dom";


const CardPrototype = ({ item, category, DetailsStorage }) => {
    const { store, actions } = useContext(Context);
    const [isHeartFilled, setIsHeartFilled] = useState(item.isFavorite);
    const [imageUrl, setImageUrl] = useState('');


    const handleHeartClick = async () => {
        await actions.toggleFavorite(item.uid, category);
        setIsHeartFilled(!isHeartFilled);
    };

    useEffect(() => {
        setIsHeartFilled(store.heartStates[item.uid] || false); 
    }, [store.heartStates, item.uid]);

    useEffect(() => {
        if (item.image) {
            setImageUrl(item.image); 
        } else {
            const categoryArray = DetailsStorage[category];
            if (categoryArray) {
                const currentItem = categoryArray.find(element => element.uid === item.uid);
                if (currentItem) {
                    setImageUrl(currentItem.image);
                }
            }
        }
    }, [category, item.uid, item.image, DetailsStorage]);
    

    const handleRemoveFromFavorites = async () => {
        await actions.toggleFavorite(item.uid, category);
        setIsHeartFilled(false); 
    };

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
            <Card.Img variant="top" src={imageUrl} className="card-image" />
            <Card.Body>
                <Card.Title>{item.properties.name}</Card.Title>
                <Card.Text>
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
                <Link to={`/details/${category === 'species' ? 'species' : category.slice(0, -1)}/${item.uid}`}>
                    <Button variant="light" className="card-btn">Discover more</Button>
                </Link>
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