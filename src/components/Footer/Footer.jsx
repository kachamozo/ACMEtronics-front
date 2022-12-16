/*import React from "react";
import "./Footer.css";
import {Navbar, Nav } from 'react-bootstrap'

function Footer() {
  
    return (
        <Navbar className="bs-green" fixed="bottom">
            <Nav className="auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/categorias">Categorías</Nav.Link>
            <Nav.Link href="/politicas-de-privacidad">Políticas de privacidad</Nav.Link>
            <Nav.Link href="/terminos-y-condiciones">Términos y condiciones</Nav.Link>
            <Nav.Link href="/preguntas-frecuentes">Preguntas frecuentes</Nav.Link>
            <Nav.Link href="/contacto">Contáctanos</Nav.Link>
        </Nav>
      <Nav className="ml-auto">
        <Nav.Link href="https://facebook.com/micomercioelectronico">Síguenos en :</Nav.Link>
        <Nav.Link href="https://twitter.com/micomercioelectronico">Twitter</Nav.Link>
        <Nav.Link href="https://instagram.com/micomercioelectronico">Instagram</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Footer; */

import React from 'react';
import './Footer.css';
import {Nav} from 'react-bootstrap'
import face from '../../assets/faceb.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'


function Footer() {
  return (
    
    <div className='footer'>
        
      
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/shop">Shopping</a>
        </li>
        <li>
          <a href="/about">Privacy policy</a>
        </li>
        <li>
          <a href="/about">Terms and conditions</a>
        </li>
        <li>
          <a href="/about">Frequently asked questions</a>
        </li>
        <li>
          <a href="/about">Contact us</a>
        </li>

        <div className='footerText'>
        <p>© 2022 ACMEtronics. Todos los derechos reservados.</p>
    </div>
        
        <Nav className="auto">
        <Nav.Link href="https://facebook.com/ACMEtronics">Follow us : <img src={face}/></Nav.Link>
        <Nav.Link href="https://instagram.com/ACMEtronics"><img src={instagram}/></Nav.Link>
        <Nav.Link href="https://twitter.com/ACMEtronics"><img src={twitter}/></Nav.Link>
      </Nav>
     
    </div>
    
  );
}

export default Footer;









