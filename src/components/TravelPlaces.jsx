import React from "react";
import "./TravelPlaces.css";
import travel1image from "../images/travel-1.jpg";
import travel2image from "../images/travel-2.jpg";
import travel3image from "../images/travel-3.jpg";

function TravelPlaces() {
  return (
    <div className="travelplaces-component">
      <h3>The Mountains</h3>
      <div className="d-flex flex-row justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={travel1image} alt="Card image cap" />
      </div>
      <div className="card" style={{ width: "18rem" }}>
       
        <div className="card-body p-3">
          <h5 className="card-title">Lorem ipsum dolor sit amet</h5>
          <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod
        tempor incididunt u lobore et dolore mangna aliqua. Ut enim ad minim veniam
          </p>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={travel3image} alt="Card image cap" />
      </div>
      </div>

      <div className="d-flex flex-row justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
      <div className="card-body ">
          <h5 className="card-title">Lorem ipsum dolor sit amet</h5>
          <p className="card-text ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod
        tempor incididunt u lobore et dolore mangna aliqua. Ut enim ad minim veniam
          </p>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={travel1image} alt="Card image cap" />
      </div>
      <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
          <h5 className="card-title">Lorem ipsum dolor sit amet</h5>
          <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod
        tempor incididunt u lobore et dolore mangna aliqua. Ut enim ad minim veniam
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default TravelPlaces;
