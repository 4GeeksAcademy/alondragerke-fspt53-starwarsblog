import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/star-wars.png";
import { Context } from "../store/appContext";
import { RiDeleteBin6Line } from "react-icons/ri";


export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const [favoritesCount, setFavoritesCount] = useState(store.favorites ? store.favorites.length : 0);

    useEffect(() => {
        setFavoritesCount(store.favorites ? store.favorites.length : 0);
    }, [store.favorites]);

    const handleRemoveFavorite = async (id) => {
        await actions.toggleFavorite(id, 'favorites');
    };
    
    console.log("Favoritos:", store.favorites);

    return (
        <nav className="navbar mb-3">
            <Link to="/" className="logo d-flex align-items-center">
                <img src={Logo} className="logo-img" alt="Star Wars Logo" />
            </Link>
            <div className="dropdown">
                <button className="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites {favoritesCount > 0 && `(${favoritesCount})`}
                </button>
                <ul className="dropdown-menu">
                    {store.favorites && store.favorites.map((favorite, index) => (
                        <li key={index}>
                            <div className="d-flex justify-content-between align-items-center">
                                <button className="dropdown-item" type="button">{favorite.properties.name}</button>
                                <button 
                                    className="btn btn-link" 
                                    onClick={() => handleRemoveFavorite(favorite.uid)}
                                >
                                    <RiDeleteBin6Line />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};