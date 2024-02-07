import React from "react";
import "/workspaces/alondragerke-fspt53-starwarsblog/src/styles/index.css"
import BabyYoda from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/baby-yoda.png"
import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div className="page404">
            <img src={BabyYoda} className="yoda404"/>
            <p className="message404">
                Hold onto your starships! Baby Yoda has been found! 
                <br></br>
                Will you be the chosen one to help us bring this little one back to the sanctuary of the Wiki?
                <br></br>
                Click the button below to become a part of this spacefaring adventure and be the hero this galactic tale needs!
            </p>
            <Link to="/"> 
					<button type="button" className="btn btn-outline-light">Home</button>
			</Link>
        </div>
    );
};

export default NotFound;