import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites, removeFavorite } from "../../redux/actions";
import w from "../WishList/WishList.module.css";
import { Link } from "react-router-dom";
import { HiHeart } from "react-icons/hi"
import Swal from "sweetalert2";


function WishList() {
  const dispatch = useDispatch();
  let favorites = useSelector((state) => state.favorites);
  let user = JSON.parse(localStorage.getItem("loggedUser"))

  useEffect(() => {
    if(user) dispatch(getFavorites(user.email))
  }, [dispatch]);
  
  let favs = favorites["Favorites"]

  const handleDeleteFavorite = async(productId) => {
  Swal.fire({
  title: 'Removing from wishlist',
  text: "Do you want to delete this product from your wishlist?",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    dispatch(removeFavorite(user.email, productId))
    Swal.fire(
      'Deleted!',
      'The product has been deleted.',
      'success'
      )
      dispatch(getFavorites(user.email))
  }})
}
 
if(user)
  return(
    <div className={w.wCont}> 
    <h1> My wishlist</h1>
      {Array.isArray(favs) && favs.length? favs.map(el => (<div className={w.wItem} key={el.id}>
         <img src={el.image} height='120px' width='auto' alt={el.name} />
         <div className={w.productName}>
          <h3>{el.name}</h3>
          <Link to={'/shop/'+el.id}> <p>View product details</p> </Link>
         </div>
         <div className={w.likeBtn}>
           <button onClick={()=> handleDeleteFavorite(el.id)}> <HiHeart size={'2em'} /> </button>
         </div>
         </div>)) : 
         <div className={w.empty}>
          <h2> Your wishlist is empty. </h2>
          <Link to='/shop'><button className={w.searchBtn}>Search products</button></Link>
         </div>
         }
    </div>
  )
  else 
  return (
    <div className={w.wCont}>
      <h1> Please Log in to see your wishlist </h1>
    </div>
  )
 
}

export default WishList;