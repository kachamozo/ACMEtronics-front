import React from "react";
import "./Reviews.css";
import image from "../../Assets/rate.png";


function Reviews() {
  return (
   

      <div className="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
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


























/* import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTextArea,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function Add() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#d94125" }}>
      <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
        <MDBRow className="justify-content-center">
          <MDBCol md="40" lg="38" xl="36">
            <MDBCard>
              <MDBCardBody className="p-4">
                <div className="d-flex flex-start w-100">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp"
                    alt="avatar"
                    width="65"
                    height="65"
                  />

                  <div className="w-100">
                    <MDBTypography tag="h5">Add a comment</MDBTypography>
                    <div>
                      <a href="">
                        <MDBIcon far icon="star text-danger me-1" />
                        <MDBIcon far icon="star text-danger me-1" />
                        <MDBIcon far icon="star text-danger me-1" />
                        <MDBIcon far icon="star text-danger me-1" />
                        <MDBIcon far icon="star text-danger me-1" />
                      </a>
                    </div>
                    <MDBTextArea label="What is your view?" rows={4} />

                    <div className="d-flex justify-content-between mt-3">
                      <MDBBtn color="success">Danger</MDBBtn>
                      <MDBBtn color="danger">
                        Send <MDBIcon fas icon="long-arrow-alt-right ms-1" />
                      </MDBBtn>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
*/












/* import React, {useState} from 'react';

//vamos a crear un componente que se va a encargar de renderizar los reviews de cada producto
//el componente va a recibir como props el id del producto y el array de reviews de ese producto
//el componente va a tener un estado que va a ser un array de objetos, cada objeto va a tener la info de un review
//el estado va a ser inicializado con el array de reviews que recibe como props
//el componente va a renderizar un div por cada review, cada div va a tener la info del review
//el componente va a tener un input y un boton, el input va a ser un controlado y va a tener un estado que va a ser el texto del review que se esta escribiendo
//el boton va a tener un evento onClick que va a agregar un nuevo objeto al array de reviews del estado, el objeto va a tener la info del review que se esta escribiendo
//el componente va a tener un boton que va a tener un evento onClick que va a enviar el array de reviews del estado al backend
//el componente va a tener un boton que va a tener un evento onClick que va a resetear el estado a su valor inicial

const Reviews = ({id, reviews}) => {
    const [reviews, setReviews] = useState(reviews);
    const [review, setReview] = useState('');
    const handleChange = (e) => {
        setReview(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setReviews([...reviews, {text: review, rating: 5}])
        setReview('');
    }
    const handleSend = () => {
        //aca va la logica para enviar los reviews al backend
    }
    const handleReset = () => {
        setReviews(reviews);
    }
    return (
        <div>
            <h2> Holasss</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' value={review} onChange={handleChange}/>
                <button type='submit'>Submit</button>
            </form>
            <button onClick={handleSend}>Send</button>
            <button onClick={handleReset}>Reset</button>
            {reviews.map((review, i) => {
                return (
                    <div key={i}>
                        <p>{review.text}</p>
                        <p>{review.rating}</p>
                    </div>
                )
            })}
        </div>
    )
} 

export default Reviews; */

  