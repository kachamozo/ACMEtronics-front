import React from "react";
import "./Card.css";
import Rating from "react-rating";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";

function Card(props) {
  return (
    <div className="card">
      <div className="imagen">
        <img
          src={props.image}
          alt="image not found"
          width={"120px"}
          height={"170px"}
        />

      </div>
      <div className='item1'>
        <div className="title-stars">
          <h1>{props.name}</h1>
          <Rating
          initialRating={props.rating}
          emptySymbol={<BsStar />}
          fullSymbol={<BsStarFill />}
          halfSymbol={<BsStarHalf />}
          readonly={true}
        />
        </div>
          <div className="inStock">
            <span>In stock</span>
          </div>
      </div>
      <div className='item2'>
        <h2>${props.price}</h2>
          <div className='cantProducts'>
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </div>
      </div>
      <div className='item3'>
        <button className="addCart">Add to cart</button>
        <button className="fav">♡</button>
      </div>
      
    </div>
  );
}

export default Card;
