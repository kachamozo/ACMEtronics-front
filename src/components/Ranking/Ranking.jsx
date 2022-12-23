import React from "react";
import Slider from "react-slick";
import Card from "../Card/Card";

export const Ranking = ({allProducts}) => {
    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
          />
        );
      }
      
      function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
          />
        );
      }
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        speed: 500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 960,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
                }             
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
          ]
    };
    return (
        <div>
        <Slider {...settings}>
        {  allProducts?.slice(0, 9).map((e) => {
          // se mappea los 10 primeros productos pero se muestra solo 5
          return (
            
              <div className="product-card" key={e.id}>
                <Card 

                  id={e.id}
                  name={e.name}
                  price={e.price}
                  rating={e.rating > 3 ? e.rating : 3}
                  image={e.image}
                /> 
              </div>
          );
          
        })}
        </Slider>
      </div> 
    );
}

export default Ranking;
