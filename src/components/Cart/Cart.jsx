import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {

const cart = useSelector((state) => state.cart)


// -- el item se guarda en el carrito ---
useEffect(()=> {
  localStorage.setItem("items", JSON.stringify(cart))
}, [cart])


  return (
    <div>
      <h1> Cart </h1>
      {cart.map(item => <div>
        <h3>{item.name}</h3> 
        <h4>${item.price}</h4>
      <img src={item.image} width='100px' />
      <button> Eliminar </button>
      </div>)}
    </div>
    
  )
}
