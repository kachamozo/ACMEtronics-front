import React from "react";
import "./ShopCard.css";
import Rating from "react-rating";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";

function ShopCard(props) {
  return (
    <div className="shop-card">
      <div>
        <h3 className="card-title">{props.name}</h3>
        <h5>
          {" "}
          Marca: <p>{props.brand}</p>
        </h5>
        <h5 className="card-price">
          {" "}
          Precio: <p>{props.price}</p>
        </h5>
        <h5>
          {" "}
          Disponibles: <p>{props.stock} Unidades</p>
        </h5>
        <h5>
          {" "}
          Calificación:{" "}
          <Rating
            initialRating={props.rating}
            emptySymbol={<BsStar />}
            fullSymbol={<BsStarFill />}
            halfSymbol={<BsStarHalf />}
            readonly={true}
          />
        </h5>{" "}
        <img
          src={props.image}
          alt="image not found"
          width={"80px"}
          height={"120px"}
        />{" "}
        <select className="product-quantity">
          <option value="All">1</option>
          <option value="+">+</option>
          <option value="-">-</option>
        </select>
        <button className="buy-button">Comprar</button>{" "}
        <button className="add-to-cart-button">Agregar</button>
      </div>
    </div>
  );
}

export default ShopCard;
