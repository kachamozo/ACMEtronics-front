import React from "react";
import { useSelector } from "react-redux";

export default function Detail(){

    const product = useSelector((state) => state.detail)

    if(product.length) return (
        <div>
            <h1>{product.title}</h1>
            <p>Rating: {product.rating}</p>
            <img src={product.image} />
            <h2>{product.price}</h2>
            <h3>{product.description}</h3>
            <button> Add to cart </button>
            <h2>Reviews: </h2>
            {product.reviews.length? product.reviews.map(r => (<div><h3> {r} </h3></div>)) : 
            <div> <h3> This product does not have reviews yet. </h3></div>}
            <button> Add review </button>
        </div>
    )
    else return (
        <div>
            Loading...
        </div>
    )
}