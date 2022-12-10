import React, { useCallback, useRef, useEffect } from "react";
import Glider from "react-glider";
import './Carousel.css';
import "glider-js/glider.min.css";
import img from "../../Assets/img.jpg";
import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";


function Carousel() {


  return (
    <>
    <Glider
      slidesToShow={1}
      slidesToScroll={1}
      draggable={false}
      dots={".dots"}
      scrollLock={true}


      autoPlay="true"
      duration={0.5}
      hasArrows={true}


      

      responsive={[
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]}

    >
        <div className="item0" >
      <img src={img} alt="Slide " width="100%" height="40%"/>
      </div>
      <div className="item1">
      <img src={img1} alt="Slide 1" width="100%" height="40%" />
      </div>
      <div className="item2">
      <img src={img2} alt="Slide 2" width="100%" height="40%"/>
      </div>
      <div className="item3">
      <img src={img3} alt="Slide 3" width="100%" height="40%"/>
      </div>
      <div className="item4">
      <img src={img4} alt="slides 4"width="100%" height="40%" />
      </div>

    </Glider>
 
  </>


  );
} 

export default Carousel;
