import React from 'react';
import './Brands.css';
import img from '../../Assets/18.png';
import img1 from '../../Assets/19.png';
import img2 from '../../Assets/25.png';
import img3 from '../../Assets/21.png';



function nyCarousel() {
  return (
      <div id="demo" className="carousel slide" data-ride="carousel" style={{width: '80%', height:'100%', margin:"auto"}}>
              <h2>We work with the best brands</h2>



<div className="carousel-inner" style={{width: '100%', height:'250px', borderRadius: "10px"}}>
  <div className="carousel-item active">
    <img src={img} style={{width: '100%', height:'250px'}}/>
  </div>
  <div className="carousel-item">
    <img src={img1} style={{width: '100%', height:'250px'}}/>
  </div>
  <div className="carousel-item">
    <img src={img2} style={{width: '100%', height:'250px'}}/>
  </div>
  <div className="carousel-item">
    <img src={img3} style={{width: '100%', height:'250px'}}/>
  </div>

  </div>

<a className="carousel-control-prev" href="#demo"  data-slide="prev">
  <span className="carousel-control-prev-icon" style={{marginTop:"250px", marginRight:"80px"}}></span>
</a>
<a className="carousel-control-next" href="#demo" data-slide="next">
  <span className="carousel-control-next-icon" style={{marginTop:"250px", marginLeft:"80px"}}></span>
</a>
</div>
      
  );
}





export default nyCarousel;





/* </div>function myCarousel() {
    return (
      <div className="Brands">
        <h1 className='title'>We work with the best Brands</h1>
      <div id="myCarousel" className="container" data-ride="carousel">

        <ul className="indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
        </ul>



        <div className="carousel-inner">
          <div className="item active">
            <img src= {img} />
         </div>
         <div className="item">
            <img src={img1} />
            </div>        
        </div>

        <a className="control-prev" href="#myCarousel" data-slide="prev">
          <span className="prev-icon"></span>
        </a>
        <a className="control-next" href="#myCarousel" data-slide="next">
          <span className="next-icon"></span>
        </a>
      </div>
      </div>
      
    );
}

export default myCarousel; */