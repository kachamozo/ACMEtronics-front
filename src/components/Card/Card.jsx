import React, { useEffect } from "react";
import "./Card.css";
import Rating from "react-rating";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";
import { addFavorite, addToCart, removeFavorite, getFavorites } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi'

function Card(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userDetail);
  const favorites = useSelector((state) => state.favorites);

  // después se modifica para traer el user que está logueado
  let userId = 1
  let productId = props.id

  const handleAddToFavorites= () => {
    dispatch(addFavorite(userId, productId))
    alert('Item added to your wishlist')
    dispatch(getFavorites(userId))
    }
    const handleDeleteFavorite = () => {
      dispatch(removeFavorite(userId, productId))
      alert('Product deleted from your wishlist')
      dispatch(getFavorites(userId))
      }

  const notify = () => toast.success("Item added to cart");
    
  const handleAddToCart= () => {
    dispatch(addToCart(props.id))
    notify()
    }

  return (
    <div className="homeCard">
      <Link to={"/shop/" + props.id}>
        <div className="imagen">
          <img
            src={props.image}
            alt="image not found"
            width={"120px"}
            height={"170px"}
          />
        </div>
        <div className="item1">
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
      </Link>
      <div className="item2">
        <h2>${props.price}</h2>
        <div className="cantProducts">
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>
      </div>
      <div className="item3">
        <button className="addCart" onClick={()=> handleAddToCart()}>Add to cart</button>
        {favorites["Favorites"] && favorites["Favorites"].find(el => el.id === props.id) ? 
            (<div className="fav"><a onClick={()=> handleDeleteFavorite()} ><HiHeart size={'2em'}/></a></div>) : 
            (<div className="fav" ><a onClick={()=>handleAddToFavorites()}><HiOutlineHeart size={'2em'}/></a></div>
            )}
      </div>
    </div>
  );
}

export default Card;