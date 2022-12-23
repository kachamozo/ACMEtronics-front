import React from "react";
import "./Card.css";
import Rating from "react-rating";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";
import { addFavorite, addToCart } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify"



function Card(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userDetail);
  const favorites = useSelector((state) => state.favorites);

  // const addProductToFavorites = async (event, userId) => {
  //   event.preventDefault();

  //   let product = {
  //     id: props.id,
  //     name: props.name,
  //     price: props.price,
  //     image: props.image,
  //   };

  //   let isAFavorite = await favorites.find((p) => p.id === Number(props.id));

  //   if (isAFavorite) return alert("The product is already on your wishlist");

  //   if (!userId)
  //     return alert("You must login to add the product to your wishlist");

  //   dispatch(addFavorite({ productId: product.id, userId: 3 }));
  // };

  const addProductToFavorites = async (event, userId) => {
    event.preventDefault();

    const { id, name, price, image } = props;
    const product = { id, name, price, image };

    const isAFavorite = await favorites.find((p) => p.id === Number(id));

    if (isAFavorite) return alert("The product is already on your wishlist");

    if (!userId)
      return alert("You must login to add the product to your wishlist");

    dispatch(addFavorite({ productId: id, userId }));
  };

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
        <button
          className="fav"
          onClick={(event) => addProductToFavorites(event, user.id)}
        >
          ♡
        </button>
      </div>
    </div>
  );
}

export default Card;
