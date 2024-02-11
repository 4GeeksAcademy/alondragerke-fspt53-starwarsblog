import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "/workspaces/alondragerke-fspt53-starwarsblog/src/js/store/appContext.js";
import { Container, Row } from 'react-bootstrap';
import Robots from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/characters.png";


const ApiDetails = () => {
    const { store } = useContext(Context);
    const { category, id } = useParams(); 

    let details = [];
    switch (category) {
        case 'character':
            details = store.characters;
            break;
        case 'vehicle':
            details = store.vehicles;
            break;
        case 'species':
            details = store.species;
            break;
        case 'planet':
            details = store.planets;
            break;
        default:
            break;
    }

    const item = details.find(item => item.uid === id);


    if (!item) {
        return <p>Element not found</p>; 
    }

    let homeworld = "";
    if (item.homeworld) {
        homeworld = item.homeworld.properties.name;
    }
    

    return (
        <Container>
            <Row>
                <div key={item.uid} className="details-attributes">
                <h4>Attributes</h4>
                {category === 'character' && (
                    <div>
                        <div className="item-list">
                            <ul>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Birth year:</b> {item.properties.birth_year}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Homeworld:</b> {homeworld}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Gender:</b> {item.properties.gender}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Eye color:</b> {item.properties.eye_color}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Hair color:</b> {item.properties.hair_color}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Height:</b> {item.properties.height}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Mass:</b> {item.properties.mass}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Skin color:</b> {item.properties.skin_color}
                                    </p>
                                </li>
                            </ul>
                        </div>    
                        <div>
                            <img src={Robots} className="robots-container"></img>
                        </div>
                    </div>
                )}
                {category === 'species' && (
                    <div>
                        <div className="item-list">
                            <ul>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Classification:</b> {item.properties.classification}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Designation:</b> {item.properties.designation}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Language:</b> {item.properties.language}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Average height:</b> {item.properties.average_height}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Average lifespan:</b> {item.properties.average_lifespan}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Eye color:</b> {item.properties.eye_colors}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Hair color:</b> {item.properties.hair_colors}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Skin colors:</b> {item.properties.skin_colors}
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <img src={Robots} className="robots-container"></img>
                        </div>
                    </div>
                )}
                {category === 'vehicle' && (
                    <div>
                        <div className="item-list">
                            <ul>
                                <li>
                                    <p>
                                        <img  className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Model:</b> {item.properties.model}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Vehicle class:</b> {item.properties.vehicle_class}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Consumables:</b> {item.properties.consumables}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Length:</b> {item.properties.length}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Max atmostphering speed:</b> {item.properties.max_atmosphering_speed}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Cargo capacity:</b> {item.properties.cargo_capacity}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Crew:</b> {item.properties.crew}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Passengers:</b> {item.properties.passengers}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Manufacturer:</b> {item.properties.manufacturer}
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <img src={Robots} className="robots-container"></img>
                        </div>
                    </div>
                )}
                {category === 'planet' && (
                    <div>                        
                        <div className="item-list">
                            <ul>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Climate:</b> {item.properties.climate}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Population:</b> {item.properties.population}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Terrain:</b> {item.properties.terrain}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Diameter:</b> {item.properties.diameter}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Surface water:</b> {item.properties.surface_water}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Gravity:</b> {item.properties.gravity}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Rotation period:</b> {item.properties.rotation_period}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img className="ico" src="https://img.icons8.com/ios-filled/50/death-star.png" alt="death-star"/>
                                        <b>Orbital period:</b> {item.properties.orbital_period}
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <img src={Robots} className="robots-container"></img>
                        </div>
                    </div>
                )}
            </div>
            </Row>
        </Container>
    );
};

export default ApiDetails;