import React, {useEffect} from "react";
import "../../styles/home.css";
import Star from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/star.png";
import Wars from "/workspaces/alondragerke-fspt53-starwarsblog/src/img/wars.png";
import { Link } from "react-router-dom";

const Home = () => {

	useEffect(() => {
		const byline = document.getElementById('byline');
		const bylineText = byline.innerHTML;
		const bylineArr = bylineText.split('');
		byline.innerHTML = '';
	
		for (let i = 0; i < bylineArr.length; i++) {
		  const span = document.createElement('span');
		  const letter = document.createTextNode(bylineArr[i]);
		  
		  if (bylineArr[i] === ' ') {
			byline.appendChild(letter);
		  } else {
			span.appendChild(letter);
			byline.appendChild(span);
		  }
		}
	  }, []);

	return (
	<div>
		<div className="starwars-demo">
			<img src={Star} alt="Star" className="star"></img>
			<img src={Wars} alt="Wars" className="wars"></img>
			<h2 className="byline" id="byline">The complete wiki</h2>
		</div>
		<div className="center-container">
          <Link to="/database">
            <button className="home-btn btn btn-outline-light">Access</button>
          </Link>
        </div>
	</div>
)};

export default Home;
