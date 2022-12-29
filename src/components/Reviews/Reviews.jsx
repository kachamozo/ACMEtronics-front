import React from "react";
import "./Reviews.css";
import image from "../../Assets/rate.png";




function Reviews() {
  return (
   

      <div className="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content" >
            <div className="text-right cross"> <i class="fa fa-times mr-2"></i> </div>
            <div className="card-body text-center"> <img src={image} height="100" width="100"/>
                <div className="comment-box text-center">
                <h4>Add a comment</h4>
                <div className="rating"> <input type="radio" name="rating" value="5" id="5"/><label for="5">☆</label> <input type="radio" name="rating" value="4" id="4"/><label for="4">☆</label> <input type="radio" name="rating" value="3" id="3"/><label for="3">☆</label> <input type="radio" name="rating" value="2" id="2"/><label for="2">☆</label> <input type="radio" name="rating" value="1" id="1"/><label for="1">☆</label> </div>
                <div className="comment-area"> <textarea className="form-control" placeholder="what is your view?" rows="4"></textarea> </div>
                    
                    <div className="text-center mt-4"> <button className="btn btn-success send px-5" style={{width:"100%"}}>Send message <i className="fa fa-long-arrow-right ml-2"></i></button>
                        <p>By clicking on the button, you agree to our <a href="#">Terms and Conditions</a></p>
                        <br></br>
                        <button style={{width:"100%", height:"100%", fontSize:"20px"}}><a href='/shop'>Back to Shop</a></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    
  );
}

export default Reviews; 




/* import React, { useState, useEffect } from "react";
import "./Reviews.css";

function RatingForm() {
  const [rating, setRating] = useState(0);
  const[comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // almacenar la calificación y el comentario en el localStorage

    localStorage.setItem("rating", rating);
    localStorage.setItem("comment", comment);
  }
  
  return (
    <div className="formulario">
    <form onSubmit={handleSubmit}>
      <div className="rating">
        <input type="radio" name="rating" value="5" id="5" onChange={(e) => setRating(e.target.value)} />
        <label for="5">☆</label>
        <input type="radio" name="rating" value="4" id="4" onChange={(e) => setRating(e.target.value)} />
        <label for="4">☆</label>
        <input type="radio" name="rating" value="3" id="3" onChange={(e) => setRating(e.target.value)} />
        <label for="3">☆</label>
        <input type="radio" name="rating" value="2" id="2" onChange={(e) => setRating(e.target.value)} />
        <label for="2">☆</label>
        <input type="radio" name="rating" value="1" id="1" onChange={(e) => setRating(e.target.value)} />
        <label for="1">☆</label>
      </div>
      <div className="comment-area">
        <textarea className="form-control" placeholder="what is your view?" rows="4" onChange={(e) => setComment(e.target.value)}></textarea> 
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-success send px-5" style={{width:"100%"}}>Send message <i className="fa fa-long-arrow-right ml-2"></i></button>
        <p>By clicking on the button, you agree to our <a href="#">Terms and Conditions</a></p>
      </div>
    </form>
    </div>
  );
}

export default RatingForm; */





















