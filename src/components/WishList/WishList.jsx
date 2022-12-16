import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../../redux/actions";
import "./WishList.css";

function WishList() {
  const dispatch = useDispatch();
  let favorites = useSelector((state) => state.favorites);

  return <div>WishList</div>;
}

export default WishList;
