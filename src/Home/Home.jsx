import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/actions";
import Carousel from "../components/Carousel/Carousel";
import Card from "../components/Card/Card";
import "./Home.css";

function Home() {
  const allProducts = useSelector((state) => state.Products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="background">
      <Carousel />{" "}
      <div className="card-container">
        {allProducts?.slice(0, 12).map((e) => {
          return (
            <div className="product-card" key={e.id}>
              <Card
                id={e.id}
                name={e.name}
                price={e.price}
                rating={e.rating}
                image={e.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
