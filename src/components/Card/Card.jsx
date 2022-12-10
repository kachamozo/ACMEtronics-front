import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <h3 className="card-title">{props.name}</h3>

      <h5 className="card-price">
        {" "}
        Precio: <p>{props.price}</p>
      </h5>

      <img
        src={props.image}
        alt="image not found"
        width={"120px"}
        height={"160px"}
      />

      <h5>
        {" "}
        Proximamente estrellas?<p>{props.rating}</p>
      </h5>
    </div>
  );
}

export default Card;
