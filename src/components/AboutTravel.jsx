import React from "react";
import "./AboutTravel.css";

function AboutTravel() {
  return (
    <div className="about-travel">
      <h1>About Travel</h1>
      <p className="about-travel-details">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod
        tempor incididunt u lobore et dolore
        <br /> mangna aliqua. Ut enim ad minim veniam, quis nostrud exercitaton
        uliamco laboris nisi ut aliquip ex ea com-
        <br /> modo consequat.
        
      </p>
      <div className="d-flex flex-row justify-content-center">
        <div className="p-4">
            <h5>Lorem Ipsum Dolor</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisc-<br/>ing elit, sed do eius mod tempor</p>
        </div>
        <div className="p-4">
        <h5>Lorem Ipsum Dolor</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisc-<br/>ing elit, sed do eius mod tempor</p>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center ">
        <div className="p-4">
        <h5>Lorem Ipsum Dolor</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisc-<br/>ing elit, sed do eius mod tempor</p>
        </div>
        <div className="p-4">
        <h5>Lorem Ipsum Dolor</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisc-<br/>ing elit, sed do eius mod tempor</p>
        </div>
      </div>
    </div>
  );
}

export default AboutTravel;
