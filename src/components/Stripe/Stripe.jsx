import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { checkout } from "../../redux/actions/index.js";
import { useNavigate } from "react-router-dom";
import "./Stripe.css";

const stripePromise = loadStripe(
  "pk_test_51MGiEBJf3Ra7t0LIpbXGmuheCzm64uisAtUjjerxb3LCv7AEkdcfVfUWRlVRWcScZU5oLKXKRHSP45u6LIPRS66y00oG54GCjY"
);

function CheckoutForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

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
        dispatch(checkout(id));
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} className="card card-body ">
      <img
        src="https://http2.mlstatic.com/D_NQ_NP_2X_702914-MLA47249717122_082021-F.webp"
        alt="pic"
      />
      <h3 className="text-center my-2">Price: $250</h3>
      <CardElement />
      <button>Buy</button>
    </form>
  );
}

function Stripe() {
  return (
    <Elements stripe={stripePromise}>
      <div className="container p-6">
        <div className="row">
          <div className="col-md-6 offset-md-4">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </Elements>
  );
}

export default Stripe;
