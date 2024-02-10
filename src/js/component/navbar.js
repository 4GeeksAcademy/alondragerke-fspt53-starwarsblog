import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/star-wars.png";
import { Context } from "../store/appContext";
import { RiDeleteBin6Line } from "react-icons/ri";

const Navbar = () => { 
    const { store, actions } = useContext(Context);
    const [forceUpdate, setForceUpdate] = useState(false); // Estado para forzar la actualización del componente

    const handleRemoveFavorite = async (id) => {
        console.log("Removing favorite with id:", id);
        await actions.toggleFavorite(id, 'favorites');
        setForceUpdate(prevState => !prevState); // Cambiar el estado para forzar la actualización del componente
    };

    console.log("Favoritos:", store.favorites); // Agregamos un log aquí

    return (
        <nav className="navbar mb-3">
            <Link to="/" className="logo d-flex align-items-center">
                <img src={Logo} className="logo-img" alt="Star Wars Logo" />
            </Link>
            <div className="dropdown">
                <button className="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites ({store.favorites ? store.favorites.length : 0}) {/* Calculamos dinámicamente el número de favoritos */}
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

export default Navbar;
