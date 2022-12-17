import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../CartItem/CartItem'

export default function Cart() {

const cart = useSelector((state) => state.cart)

/* let [items, setItems] = useState(JSON.parse(localStorage.getItem("items"))) || [] */


// -- el item se guarda en el carrito ---
useEffect(()=> {
  localStorage.setItem("items", JSON.stringify(cart))
}, [cart])



  return (
    <div>
      <h1>Carrito</h1>
      {cart.map(item => <div> <CartItem key={item.id} /> </div>)}
     
    </div>
    
  )
}
