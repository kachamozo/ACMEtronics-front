import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import checkout from "../../redux/actions/index";
import { useNavigate } from "react-router-dom";
import "./Stripe.css";

const stripePromise = loadStripe(
  "pk_test_51MGiEBJf3Ra7t0LIpbXGmuheCzm64uisAtUjjerxb3LCv7AEkdcfVfUWRlVRWcScZU5oLKXKRHSP45u6LIPRS66y00oG54GCjY"
);

function Stripe() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stripe = useStripe();

  return <div>Stripe</div>;
}

export default Stripe;
