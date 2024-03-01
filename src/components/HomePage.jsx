import React from "react";
import './HomePage.css';

function HomePage(){
    return(
        <div className="homepage-component">
            <div className="hompage-content">
            <h1 className="travel-text">TRAVEL</h1>
            <p className="travel-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius <br/> mod tempor incididunt u lobore et dolore mangna aliqua.</p>
            <button className="button">JOIN US</button>
            </div>
        </div>
    );
}

export default HomePage;