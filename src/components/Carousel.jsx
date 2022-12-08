import React, { useCallback, useRef,useEffect } from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import img from "../Assets/img.jpg";
import img1 from "../Assets/img1.jpg";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg";
import img4 from "../Assets/img4.jpg";
function Carousel() {
  const INTERVAL = 2000;
  const MAX = 5;

  const intervalRef = useRef(null);

  const callbackRef = useCallback((glider) => {
    if (glider) {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          let index = glider.page;
          if (index < MAX) {
            index += 1;
          } else {
            index = 0;
          }
          glider.scrollItem(index);
        }, INTERVAL);
      }
    }
  }, []);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  return (
    <Glider
    slidesToShow={1} scrollLock hasDots draggable={false} ref={callbackRef}
    >
      <img src={img} alt="Slide " />
      <img src={img1} alt="Slide 1" />
      <img src={img2} alt="Slide 2" />
      <img src={img3} alt="Slide 3" />
      <img src={img4} alt="slides 4" />
    </Glider>
  );
}

export default Carousel;
