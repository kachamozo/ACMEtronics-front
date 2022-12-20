import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../../redux/actions";
import CartItem from "../CartItem/CartItem";
import cart from "../Cart/Cart.module.css"

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  let TotalCart = 0;
  Object.keys(cart).forEach(function (item) {
    TotalCart += cart[item].quantity * cart[item].price;
  });
  function TotalPrice(price, tonggia) {
    return Number(price * tonggia).toLocaleString("en-US");
  }

  // -- el item se guarda en el carrito ---
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleClear = () => {
    dispatch(clearCart());
  };

  if(!cart.length)
  return (
    <div>
      <h1>Cart</h1>
      <h2> Your cart is empty. </h2>
      <Link to={'/shop/'}><button> See products </button></Link>
      </div>
  )

  if(cart.length)
  return (
    <div>
      <h1> Cart </h1>
      {cart.map(item => <div className="card">
         <CartItem key={item.id} item={item} /> </div> )}
      {<div><p> Items : {cart.length}</p></div>}
      <p>Total: $ {TotalCart} </p>
      <button> Buy now </button>
      <button onClick={() => handleClear()}> Clear cart </button>
      <Link to={'/shop/'}>Continue shopping</Link>


      {/* <table className="table mx-auto" style={{ maxWidth: "1200px" }}>
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col">price</th>
            <th scope="col">image</th>
            <th scope="col">quantity</th>
            <th scope="col">Final price</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {ListCart?.map((item, index) => (
            <div key={index}>
              <h3>{item.name}</h3>
              <h4>${item.price}</h4>
              <img src={item.image} width="100px" />
              <td>
                <button
                  className="btn btn-primary"
                  style={{ margin: "2px" }}
                  onClick={()  => handleDescrease(item.id)}
                >
                  -
                  </button>
                <span className="btn btn-info">{item.quantity}</span>
                <button
                  className="btn btn-primary"
                  style={{ margin: "2px" }}
                  onClick={handleIncrease }
                >
                  +
                  </button>
              </td>
              <button onClick={handleDelete}> Eliminar </button>
              <p>{TotalPrice(item.price, item.quantity)} $</p>
            </div>
          ))}
        </tbody>
        <p>{Number(TotalCart).toLocaleString("en-US")} $</p>
      </table> */}
    </div>
  );
}