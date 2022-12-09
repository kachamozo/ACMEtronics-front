import React from 'react'

function Card  (props)  {
  return (
    <div>
        <div>
            <h3>{props.name}</h3>
           <h5> Brand: <p>{props.brand}</p></h5>
           <h5> Price: <p>{props.price}</p></h5>
           <h5> Stock: <p>{props.stock}</p></h5>
           <h5> Rating: <p>{props.rating}</p></h5>
            <img src={props.image} alt="image not found" width={"80px"} height={"80px"} />
        </div>
    </div>
  )
}

export default Card