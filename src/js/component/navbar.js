import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/star-wars.png";
import { Context } from "../store/appContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoPause } from "react-icons/io5";
import { GiMusicalNotes } from "react-icons/gi";
import BackgroundMusic from "/workspaces/alondragerke-fspt53-starwarsblog/src/audio/background-music.mp3";


const Navbar = () => { 
    const { store, actions } = useContext(Context);
    const [forceUpdate, setForceUpdate] = useState(false);

    const handleRemoveFavorite = async (id) => {
        await actions.toggleFavorite(id, 'favorites');
        setForceUpdate(prevState => !prevState);
    };

    const playAudio = () => {
        const audioPlayer = document.getElementById('audioPlayer');
        audioPlayer.play();
        document.getElementById('playButton').style.display = 'none';
        document.getElementById('pauseButton').style.display = 'inline';
    };
    
    const pauseAudio = () => {
        const audioPlayer = document.getElementById('audioPlayer');
        audioPlayer.pause();
        document.getElementById('playButton').style.display = 'inline';
        document.getElementById('pauseButton').style.display = 'none';
    };
    

    return (
        <nav className="navbar mb-3">
            <Link to="/" className="logo d-flex align-items-center">
                <img src={Logo} className="logo-img" alt="Star Wars Logo" />
            </Link>

            <audio id="audioPlayer" loop>
                <source src={BackgroundMusic} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <button id="playButton" onClick={playAudio}>
                <GiMusicalNotes />
            </button>
            <button id="pauseButton" onClick={pauseAudio} style={{ display: 'none' }}>
                <IoPause />
            </button>

            <div className="dropdown">
                <button className="btn btn-outline-light custom-dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites 
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                        {store.favorites ? store.favorites.length : 0}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                    {store.favorites && store.favorites.length > 0 ? (
                        store.favorites.map((favorite, index) => (
                            <li key={index}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button className="dropdown-item">{favorite.properties.name}</button>
                                    <button 
                                        className="btn btn-link" 
                                        onClick={() => handleRemoveFavorite(favorite.uid)}
                                    >
                                        <RiDeleteBin6Line className="trash-icon"/>
                                    </button>
                                </div>
                            </li>
                        ))
                    ) : (
                        <li>
                            <div className="d-flex justify-content-center align-items-center">
                                <span className="text-muted">Empty</span>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
