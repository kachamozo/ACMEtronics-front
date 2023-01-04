import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements, } from "@stripe/react-stripe-js";
import { checkout, clearCart, updateProduct } from "../../redux/actions/index.js";
import { useNavigate } from "react-router-dom";
import "./Stripe.css";
import Cart from "../Cart/Cart.jsx";
import Swal from "sweetalert2";


const stripePromise = loadStripe(
  "pk_test_51MGiEBJf3Ra7t0LIpbXGmuheCzm64uisAtUjjerxb3LCv7AEkdcfVfUWRlVRWcScZU5oLKXKRHSP45u6LIPRS66y00oG54GCjY"
);

function CheckoutForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const cart = useSelector((state) => state.cart);

  /* const handleClick = () => {
    dispatch(clearCart())
    alert("Your payment has been processed");
    navigate("/shop");
  }; */

  const getCartItems = () => Object.keys(cart).map((item) => (
    <span style={{ color: '#319795' }}>{cart[item].quantity} ({cart[item].price} c/u): {cart[item].quantity * cart[item].price}</span>
  ));

  const getTotal = () => Object.values(cart).reduce((sum, { quantity, price }) => {
    return sum + quantity * price;
  }, 0);

  const handleSubmit = async (event) => {
    event.preventDefault();



    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),

    });

    if (error) {
      console.log(error);
    } else {
      try {
        const { id } = paymentMethod;
        dispatch(checkout({ id, amount: getTotal() }));

      } catch (error) {
        console.log(error);
      }
    }
    //update stock
    dispatch(updateProduct({ id: cart[0].id, name: null, brand: null, image: null, description: null, price: null, quantity: cart[0].quantity }))

    // Envía el token al servidor
    // ...
    clearCart();

    
    dispatch(clearCart())
    Swal.fire({
      title: "Your payment has been processed",
      icon: "success"
    })
    navigate("/shop");

  };
  return (
    <form onSubmit={handleSubmit} className="card card-body ">

      <Cart />
      {getCartItems()}
      <br />

      <div className="form-group">
        <h4>Enter your card details</h4>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "20px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button type="submit" className="btn btn-primary"
        >Buy</button>
      </div>


    </form>
  );
}

function Stripe() {
  return (
    <Elements stripe={stripePromise}>
      <div className="container p-6">
        <div className="row">
          <CheckoutForm
          />

        </div>
      </div>
    </Elements>
  );
}




export default Stripe;

