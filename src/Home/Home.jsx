import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/actions";
import Carousel from "../components/Carousel/Carousel";
import Card from "../components/Card/Card";
import "./Home.css";
import Filter from "../components/Filter/Filter"
import { Link } from "react-router-dom";

function Home() {
  const allProducts = useSelector((state) => state.copyProducts);
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getAllProducts());
    document.getElementById('search').value = ''   
  }, [dispatch]);

  return (
    <div className="background">
      <Carousel />
      <Filter />
      <div className="card-container">
        {  allProducts?.slice(0, 12).map((e) => {
          return (
              <div className="product-card" key={e.id}>
                <Link to={'/shop/'+e.id}>
                <Card
                  id={e.id}
                  name={e.name}
                  price={e.price}
                  rating={e.rating}
                  image={e.image}
                />
                </Link>
              </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
