import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../redux/actions";
import ShopCard from "../ShopCard/ShopCard";
import Pagination from "../Pagination/Pagination";
import "./Shop.css";
import Filter from "../Filter/Filter"
import { Link } from "react-router-dom";
import { Orderaz } from "../Order/Orderaz";

function Shop() {
  const selectProduct = useSelector((state) => state.copyProducts);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = selectProduct.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

 
  useEffect(() => {
    dispatch(getAllProducts());
    document.getElementById('search').value = ''   
  }, [dispatch]);
  return (
    <>
    <div className="shop-background">
      <Filter />
      <Orderaz />
  
      {currentPosts?.map((e) => {
        return (
        <Link to={'/shop/'+e.id} className="cardLink" >
          <div className="card-container" key={e.id}>
            <ShopCard
              id={e.id}
              name={e.name}
              brand={e.brand}
              price={e.price}
              stock={e.stock}
              rating={e.rating}
              image={e.image}
            />
          </div>
        </Link>
        );
      })}
    </div>
      <div className="pagination-container">
        <Pagination
          paginate={paginate}
          currentPage={currentPage}
          postPerPage={postPerPage}
          totalPost={selectProduct.length}
        />
      </div>
    </>
  );
}

export default Shop;
