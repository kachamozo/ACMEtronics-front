// crear una landing page que tenga un boton que diga "start" y que te lleve a la ruta /home 
// y otro boton que te lleve a la landing page
import React from "react";
import { NavLink } from "react-router-dom";
import "./Landing.css";


function Landing() {
    return (
        <>
        <div className="landing">
            <div className="landing__container">
        <h2>WELCOME TO :</h2>
        <h1>ACMEtronics</h1>
        <h3>The Best Place To Buy Electronics</h3>
        </div>
        <div className="landing__btn">
        <NavLink to="/home">
            <button className="btn">ENTER</button>
        </NavLink>
        </div>
        </div>
        </>
    );
    }

export default Landing;