import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites, removeFavorite } from "../../redux/actions";
import w from "../WishList/WishList.module.css";
import { Link } from "react-router-dom";
import { HiHeart } from "react-icons/hi"

function WishList() {
  const dispatch = useDispatch();
  //let user = useSelector((state) => state.users);
  let favorites = useSelector((state) => state.favorites);
  
  // después se modifica para traer el user que está logueado
  const userId = 1

  useEffect(() => {
    dispatch(getFavorites(userId))
  }, [dispatch]);
  
  let favs = favorites["Favorites"]

  const handleDeleteFavorite = async(productId) => {
    await dispatch(removeFavorite(userId, productId))
    dispatch(getFavorites(userId))
    }
 if(favs === undefined)
  return (
    <div className={w.wCont}>
      <h1>Loading...</h1>
    </div>
  )  
if(userId)
  return(
    <div className={w.wCont}> 
    <h1> My wishlist</h1>
      {Array.isArray(favs)? favs.map(el => (<div className={w.wItem} key={el.id}>
         <img src={el.image} height='120px' width='auto' alt={el.name} />
         <div className={w.productName}>
          <h3>{el.name}</h3>
          <Link to={'/shop/'+el.id}> <p>View product details</p> </Link>
         </div>
         <div className={w.likeBtn}>
           <button onClick={()=> handleDeleteFavorite(el.id)}> <HiHeart size={'2em'} /> </button>
         </div>
        
        
         </div>)) : <div>
          <h1> Your wishlist is empty. </h1>
      <button><Link to='/shop'>Search products</Link></button>
         </div>
         }
    </div>
  )
  else 
  return (
    <div className={w.wCont}>
      <h1>Loading...</h1>
    </div>
  )
 
}

export default WishList;