import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../../redux/actions";
import "./WishList.css";

function WishList() {
  const dispatch = useDispatch();
  let user = useSelector((state) => state.userDetail);
  let favorites = useSelector((state) => state.favorites);

  const removeFavoriteProduct = (event, productId, userId) => {
    event.preventDefault();

    favorites = favorites.filter((p) => p.id !== productId);
    if (user.id) {
      dispatch(removeFavorite(userId, productId));
    }
  };

  useEffect(() => {
    if (user.id) {
    }
  }, [dispatch, favorites, user.id]);

  return (
    <div>
      <h1>Your WishList</h1>

      <div className="conteiner">
        {favorites.map((p) => {
          return (
            <div key={p.id}>
              <button>
                <Link to="/product/{id}">View in detail</Link>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WishList;
