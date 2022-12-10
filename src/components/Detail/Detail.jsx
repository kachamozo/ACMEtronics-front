import React from "react";
import d from '../Detail/detail.module.css'
//import { useSelector } from "react-redux";

export default function Detail(){
    const product = {
        id: 1,
        title: "iPhone 13 Pro Max",
        description: "An ultra-wide angle sensor of 12 megapixels and an angle of 120 °; An improved 12-megapixel telephoto lens also with X3 Optical Zoom and optical stabilization.",
        brand: "Apple",
        price: 908,
        stock: 94,
        rating: 4.69,
        category: "Smartphones",
        image: "https://m.media-amazon.com/images/I/61FZC+6hDFL._AC_SL1500_.jpg"
    }
    
    //const product = useSelector((state) => state.detail)
     if (product)
     return (
      <div className={d.detail}>
       <div className={d.container}>
         <div className={d.img}>
           <img src={product.image}  />
         </div>
           <div className={d.content}>
           <h1>{product.title} <a href="#">
            <span class="material-symbols-outlined"> favorite
</span></a> </h1> 
           <p>Rating: {product.rating}</p>
           <h2>${product.price}</h2>
           <h3>{product.description}</h3>
           <div className={d.button}>
           <button> Add to cart 
            <span class="material-symbols-outlined"> shopping_cart </span>
            </button>
           </div>
         </div>
         </div>
       <div className={d.reviews}>
       <h2>Reviews: </h2>
           {product.reviews ? (
             product.reviews.map((r) => (
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
           <button > Add review </button>
           </div>
       </div>
      </div>
     );
    else return (
        <div>
            Loading...
        </div>
    )
}