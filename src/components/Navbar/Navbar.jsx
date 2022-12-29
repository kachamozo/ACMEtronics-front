import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { searchName } from "../../redux/actions";
import "./Navbar.css";
import logo from "../../Assets/logo1.jpg";
import Login from "../Login/Login";
import { Nav } from "react-bootstrap";

function Navbar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const cart = useSelector((state) => state.cart);

  //   const { isAuthenticated } = useAuth0();

  const handleSearch = (e) => {
    dispatch(searchName(e));
    setName(e);
  };
  return (
    <div className="nav-bar">
      <img
        className="logo"
        src={logo}
        alt="logo"
        width={"100px"}
        height={"100px"}
      />
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/login">Login</NavLink>

      <div className="search-bar">
        <input
          id="search"
          className="bar-btn"
          name="search"
          placeholder="Search..."
          value={name}
          onChange={(e) => handleSearch(e.target.value)}
        ></input>

        <button className="btn">
          <img
            src="https://img.icons8.com/ios/50/000000/search--v1.png"
            width={"30px"}
            height={"30px"}
          />
        </button>
      </div>

      <div className="cart">
        <button className="btnes">
          {" "}
          <Link to={"/wishlist"}>
            <img
              src="https://img.icons8.com/ios/50/000000/like--v1.png"
              width={"30px"}
              height={"30px"}
            />
          </Link>
        </button>

        <button className="btnes">
          <Link to="/shop/cart">
            <img
              src="https://img.icons8.com/ios/50/000000/shopping-cart--v1.png"
              width={"30px"}
              height={"30px"}
            />
            {cart.length}
          </Link>
        </button>

        <button className="btnes">
          <img
            src="https://img.icons8.com/ios/50/000000/user--v1.png"
            width={"30px"}
            height={"30px"}
          />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
