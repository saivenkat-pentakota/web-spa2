import React from "react";
import "./ChooseUs.css";

function ChooseUs() {
  return (
    <div className="chooseus d-flex flex-row p-5 justify-content-center">
      <div className="p-5 m-3">
        <h1 >Why Choose us?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius<br/>
          mod tempor incididunt u lobore et dolore mangna aliqua. Ut enim ad<br/>
          minim veniam, quis nostrud exercitaton uliamco laboris nisi ut aliquip<br/>
          ex ea commodo consequat.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitaton uliamco <br/>
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <h3>Get Started</h3>
        <p>Address : 34 Amazing Street, Canadian </p>
        <p>Phone : +0 1234 7899 02 </p>
        <p>Mail : emailname@name.com</p>
      </div>
      <div className="p-5 m-3">
        <input type="text" placeholder="Name"/><br/>
        <input type="Email" placeholder="E-Mail"/><br/>
        <input type="text" placeholder="subject"/><br/>
        <input type="text"  placeholder="Message"/><br/>

      </div>
    </div>
  );
}

export default ChooseUs;
