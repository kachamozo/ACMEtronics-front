import React from 'react';
import './Carousel.css';
import img from '../../Assets/auri.jpg';
import img1 from '../../Assets/iphone.jpeg';
import img2 from '../../Assets/laptop.jpg';
import img3 from '../../Assets/samsumg.jpg';
import img7 from '../../Assets/smart2.jpg';
import img4 from '../../Assets/iphone14.jpg';
import img5 from '../../Assets/template.jpg';
import img6 from '../../Assets/smart.jpg';



function Carousel1() {
    return (
        
        <div id="demo" className="carousel slide" data-ride="carousel">

  <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" className="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
    <li data-target="#demo" data-slide-to="3"></li>
    <li data-target="#demo" data-slide-to="4"></li>
    <li data-target="#demo" data-slide-to="5"></li>
    <li data-target="#demo" data-slide-to="6"></li>
    <li data-target="#demo" data-slide-to="7"></li>
  </ul>
  
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img} />
    </div>
    <div className="carousel-item">
      <img src={img1} />
    </div>
    <div className="carousel-item">
      <img src={img2} />
    </div>
    <div className="carousel-item">
      <img src={img3} />
    </div>
    <div className="carousel-item">
      <img src={img4} />
    </div>
    <div className="carousel-item">
      <img src={img5} />
      </div>
      <div className="carousel-item">
      <img src={img6} />
      </div>
      <div className="carousel-item">
      <img src={img7} />
      </div>
  </div>

  <a className="carousel-control-prev" href="#demo"  data-slide="prev">
    <span className="carousel-control-prev-icon" ></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon" ></span>
  </a>
</div>
        
    );
}





export default Carousel1;