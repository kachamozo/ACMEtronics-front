import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements, } from "@stripe/react-stripe-js";
import { checkout, clearCart, updateProduct } from "../../redux/actions/index.js";
import { useNavigate } from "react-router-dom";
import "./Stripe.css";
import Cart from "../Cart/Cart.jsx";
import { useState } from "react";
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



  const getCartItems = () => Object.keys(cart).map((item) => (
    <span style={{ color: '#319795' }}>{cart[item].quantity} ({cart[item].price} c/u): {cart[item].quantity * cart[item].price}</span>
  ));
  
  const getTotal = () => Object.values(cart).reduce((sum, { quantity, price }) => {
    return sum + quantity * price;
  }, 0);


  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    // Evita que la página se recargue al enviar el formulario
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe o los elementos no están disponibles
      return;
    }

  const result = await stripe.createToken(elements.getElement(CardElement));

    if (result.error) {
      // Muestra el mensaje de error
      setError(result.error.message);
    } else {
      // Envía el token al servidor
      // ...
      clearCart();
  
     
    dispatch(clearCart())
    Swal.fire({
      title: "Your payment has been processed",
      icon: "success"
    })
    navigate("/shop");
    }
  };

  const handleChange = (event) => {
    // Muestra el mensaje de error si hay algún problema con los datos de la tarjeta de crédito
    setError(event.error ? event.error.message : null);
  };

  return (
    <form onSubmit={handleSubmit} className="card card-body">
      <Cart />
      {getCartItems()}
      <br />

      {/* Muestra el mensaje de error si hay algún problema con los datos de la tarjeta de crédito */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="form-group">
      <h4>Enter your card details</h4>
      <CardElement onChange={handleChange} 
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
      }}/>
      </div>
      <br />

      <button type="submit" className="btn btn-primary" 
      disabled={!
        stripe}>
       Buy</button>

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







  

 




