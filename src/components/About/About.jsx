import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="background">
      <div className="about-container">
        <h1 className="about-title">About us </h1>
        <p className="about-description">
        We are an online technology store that distributes its products to
          buyers from all over Latin America. We offer guarantee and security in
          the purchase.
        </p>
        <h2 className="about-faq-title">Frequently asked questions</h2>
        <ul className="about-faq-list">
          <li className="about-faq-item">
            <h3 className="about-faq-question">
            What is our return policy?
            </h3>
            <p className="about-faq-answer">
            We offer refund and/or exchange within the first 30 days of
              your purchase. If 30 days have passed since your purchase, you will not be
              will offer a refund and/or exchange of any kind. Eligibility for
              refunds and exchanges Your item must be unused and in the
              same condition in which you received it. The item must be in the
              original packaging. To complete your return, we require a
              receipt or proof of purchase. You can only refund
              regular priced items; sale items cannot be
              reimburse. If the item in question was marked as a gift
              when it was purchased and shipped directly to you, you will receive a
              gift credit for the value of your return. changes (if
              applicable) We only replace items if they are defective or
              damaged. If you need to exchange it for the same item, send us a
              email to (Add relevant email address) and send
              your item to: (Relevant Address).
            </p>
          </li>
          <li className="about-faq-item">
            <h3 className="about-faq-question">
            What payment methods do we accept?
            </h3>
            <p className="about-faq-answer">To define......</p>
          </li>
        </ul>
        <h2 className="about-contact-title">Contact Us</h2>
        <p className="about-contact-info">
          Direction: Nobody 22215
          <br />
          Telephone: (+54) 456-789023
          <br />
          Email: acmetronics@gmail.com
        </p>
        <h2 className="about-links-title">Links</h2>
        <ul className="about-links-list">
          <li className="about-links-item">
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li className="about-links-item">
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
          </li>
        </ul>
        <h2 className="about-social-title">Follow us</h2>
        <ul className="about-social-list">
          <li className="about-social-item">
            <a href="https://facebook.com/acmetronicstore">Facebook</a>
          </li>
          <li className="about-social-item">
            <a href="https://twitter.com/acmetronicstore">Twitter</a>
          </li>
        </ul>
        <h2 className="about-subscribe-title">
        Subscribe to our newsletter
        </h2>
        <div />{" "}
      </div>
    </div>
  );
}

export default About;
