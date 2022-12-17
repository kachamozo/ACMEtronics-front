import React from 'react'
import { useSelector } from 'react-redux'

export default function CartItem() {
    const all = useSelector((state) => state.cart)


    return (<div>
        {all.map(el => (<div> 
            <h2>{el.name}</h2>
            <p>${el.price}</p>
            <img src={el.image} width='100px' alt="" />
            <button> Delete product </button>
        </div>))}
    </div>)
    
}
