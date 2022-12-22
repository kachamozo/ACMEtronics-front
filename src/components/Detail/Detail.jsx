import React, { useEffect } from "react";
import d from '../Detail/detail.module.css'
import { useDispatch, useSelector } from "react-redux";
import { clean } from "../../redux/actions";


export default function Detail(){
    const dispatch = useDispatch()
    const product = useSelector((state) => state.detail)
    const {id} = useParams()
    
    useEffect(()=> {
      dispatch(getProductDetail(id))
      return () => {dispatch(clean())}
  }, [dispatch, id])

  const notify = () => toast.success("Item added to cart");
    
    const handleAddToCart= () => {
      dispatch(addToCart(product.product.id))
      notify()
      }


     if (product.length !== 0)
     return (
      <div className={d.detail}>
       <div className={d.container}>
         <div className={d.img}>
           <img src={product.product.image}  />
         </div>
           <div className={d.content}>
           <h1>{product.product.name} <a href="#">
            <span class="material-symbols-outlined"> favorite
</span></a> </h1> 
           <p>Rating: {product.product.rating}</p>
           <h2>${product.product.price}</h2>
           <h3>{product.product.description}</h3>
           <div className={d.button}>
           <button onClick={()=> handleAddToCart()}> Add to cart 
            <span class="material-symbols-outlined"> shopping_cart </span>
            </button>
           </div>
         </div>
         </div>
       <div className={d.reviews}>
       <h2>Reviews: </h2>
           {product.product.reviews ? (
             product.product.reviews.map((r) => (
               <div className={d.reviewsContent}>
                 <h3> {r} </h3>
               </div>
             ))
           ) : (
             <div className={d.reviewsContent} >
               {" "}
               <h3> This product does not have reviews yet. </h3>
             </div>
           )}
           <div className={d.reviewsBtn}>
            <button> Add a review </button>
           </div>
       </div>
       <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
     );
    else return (
        <div>
          <NavLink to='/reviews'>Reviews</NavLink>

            Loading...
        </div>
    )
}