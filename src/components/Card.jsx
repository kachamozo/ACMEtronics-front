import React from 'react'

function Card  (props)  {
  return (
    <div>
        <div>
            <h3>{props.name}</h3>
            <p>{props.brand}</p>
            <p>{props.price}</p>
            <p>{props.stock}</p>
            <p>{props.rating}</p>
            <img src={props.image} alt="image not found" width={"50px"} height={"50px"} />
        </div>
    </div>
  )
}

export default Card