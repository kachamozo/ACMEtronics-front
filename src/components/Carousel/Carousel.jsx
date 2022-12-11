
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
    >
    </Glider>
 
  </>


  );
} 

export default Carousel;
