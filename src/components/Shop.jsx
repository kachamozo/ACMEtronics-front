import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { useEffect, useState } from "react";
import { getAllProducts } from "../redux/actions";
import ShopCard from "./ShopCard";
import Pagination from "./Pagination";

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
  }, [dispatch]);
  return (
    <div>
      {currentPosts?.map((e) => {
        return (
          <div key={e.id}>
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
        );
      })}
      <div>
        <Pagination
          paginate={paginate}
          currentPage={currentPage}
          postPerPage={postPerPage}
          totalPost={selectProduct.length}
        />
      </div>
    </div>
  );
}

export default Shop;
