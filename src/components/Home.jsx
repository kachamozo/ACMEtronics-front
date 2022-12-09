import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/actions";
import Carousel from "./Carousel/Carousel";
import Card from "./Card"

function Home() {
  const allProducts = useSelector((state) => state.Products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  },[dispatch]);

  return (
    <div>
      <Carousel />
      {allProducts?.slice(0,5).map((e) => (
          <div key={e.id}>
            <Card
              id={e.id}
              name={e.name}
              brand={e.brand}
              price={e.price}
              stock={e.stock}
              rating={e.rating}
              image={e.image}
            />
          </div>
        ))}
    </div>
  );
}

export default Home;
