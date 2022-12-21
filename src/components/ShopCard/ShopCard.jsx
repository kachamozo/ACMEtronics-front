import React from "react";
import "./ShopCard.css";
import Rating from "react-rating";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ShopCard(props) {
const dispatch = useDispatch()
let itemId = props.id
const notify = () => toast.success("Item added to cart");


const handleAddToCart= () => {
  dispatch(addToCart(itemId))
  notify()
  }
  
  return (
    <div className="shop-card">
      <div>
      <Link className="shop-card-link" to={'/shop/'+props.id}>
        <h3 className="card-title">{props.name}</h3>
        <h5>
          {" "}
          Mark: <p>{props.brand}</p>
        </h5>
        <h5 className="card-price">
          {" "}
          Price: <p>${props.price}</p>
        </h5>
        <h5>
          {" "}
          Available: <p>{props.stock} Unidades</p>
        </h5>
        <h5>
          {" "}
          Qualification:{" "}
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
        </Link>
        <select className="product-quantity">
          <option value="All">1</option>
          <option value="+">+</option>
          <option value="-">-</option>
        </select>
        <button className="buy-button">Purchase</button>{" "}
        <button onClick={()=> handleAddToCart()} className="add-to-cart-button">Add</button>
      </div>
    </div>
  );
}

export default ShopCard;
