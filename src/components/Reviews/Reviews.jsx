import React, { useState } from 'react';

function AddReviewForm() {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(review, rating);

        // verifica que el usuario está logueado
        // si no está logueado, redirige a la página de login
        // si está logueado, hace un post a la ruta /products/:id/reviews
        // con el body { review, rating }
        // y luego hace un dispatch a la acción getProductDetail(id)
    }
    if(!isLoggedIn()) {
      // muestra un mensaje de que debe estar logueado para enviar una reseña
        alert('You must be logged in to send a review');
        // redirige a la página de login
        return;

    
    }
 

    // guarda la reseña y la calificacion en el almacenamiento local
    localStorage.setItem('review', review);
    localStorage.setItem('rating', rating);

    // muestra un mensaje de que la reseña se ha enviado
    alert('Review sent!');

    // redirige a la página de detalle del producto


return (
    <form onSubmit={handleSubmit}>
        <label>
            Review:
            <textarea value={review} onChange={(e) => setReview(e.target.value)} />
        </label>
<br />
        <label>
            Rating:
            <input type='number' value={rating} onChange={(e) => setRating(e.target.value)} />
        </label>
<br />
        <button type='submit'>Submit</button>
    </form>
);
}






export default AddReviewForm;


  


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

  