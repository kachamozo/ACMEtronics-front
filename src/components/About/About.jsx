import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="background">
      <div className="about-container">
        <h1 className="about-title">Acerca de Nosotros </h1>
        <p className="about-description">
          Somos una tienda online de tecnología que distribuye sus productos a
          compradores de toda Latino América. Ofrecemos garantía y seguridad en
          la compra.
        </p>
        <h2 className="about-faq-title">Preguntas Frecuentes</h2>
        <ul className="about-faq-list">
          <li className="about-faq-item">
            <h3 className="about-faq-question">
              ¿Cuál es nuestra política de devolución
            </h3>
            <p className="about-faq-answer">
              Ofrecemos reembolso y/o cambio dentro de los primeros 30 días de
              tu compra. Si han transcurrido 30 días desde tu compra, no se te
              ofrecerá un reembolso y/o cambio de ningún tipo. Elegibilidad para
              reembolsos y cambios Tu artículo debe estar sin usar y en las
              mismas condiciones en que lo recibió. El artículo debe estar en el
              embalaje original. Para completar tu devolución, requerimos un
              recibo o comprobante de compra. Solo se pueden reembolsar los
              artículos de precio regular; los artículos de venta no se pueden
              reembolsar. Si el artículo en cuestión fue marcado como un regalo
              cuando fue comprado y se envió directamente a ti, recibirás un
              crédito de regalo por el valor de tu devolución. Cambios (si es
              aplicable) Solo reemplazamos los artículos si están defectuosos o
              dañados. Si necesitas cambiarlo por el mismo artículo, envíanos un
              email a (Agrega dirección de correo electrónico relevante) y envía
              tu artículo a: (Dirección relevante).
            </p>
          </li>
          <li className="about-faq-item">
            <h3 className="about-faq-question">
              ¿Cuáles métodos de pago aceptamos?
            </h3>
            <p className="about-faq-answer">A definiirrrrr......</p>
          </li>
        </ul>
        <h2 className="about-contact-title">Contacténos</h2>
        <p className="about-contact-info">
          Dirección: Ni aquí ni allá 22215
          <br />
          Telefono: (+54) 456-7890
          <br />
          Email: acmetronics@gmail.com
        </p>
        <h2 className="about-links-title">Links</h2>
        <ul className="about-links-list">
          <li className="about-links-item">
            <Link to="/privacy-policy">Politica de Privacidad</Link>
          </li>
          <li className="about-links-item">
            <Link to="/terms-and-conditions">Términos y Condiciones</Link>
          </li>
        </ul>
        <h2 className="about-social-title">Siguenos</h2>
        <ul className="about-social-list">
          <li className="about-social-item">
            <a href="https://facebook.com/acmetronicstore">Facebook</a>
          </li>
          <li className="about-social-item">
            <a href="https://twitter.com/acmetronicstore">Twitter</a>
          </li>
        </ul>
        <h2 className="about-subscribe-title">
          Suscribete a nuestro Newsletter
        </h2>
        <div />{" "}
      </div>
    </div>
  );
}

export default About;
