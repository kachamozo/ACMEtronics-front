import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAllFromCart, deleteOneFromCart, increaseQuantity } from '../../redux/actions';

export default function CartItem({item}) {

    const dispatch = useDispatch();

    const handleAdd = () => {
      dispatch(increaseQuantity(item.id));
    };
    const handleDeleteOne = () => {
      dispatch(deleteOneFromCart(item.id));
    };

    const handleDeleteAll = () => {
      dispatch(deleteAllFromCart(item.id));
    };


  return (
    <div >
      <img src={item.image} height='100px' alt={item.name} />
      <h4>{item.name}</h4>
      <button  onClick={()=> handleDeleteOne()} > - </button>
      <button  onClick={()=> handleAdd()}> + </button>
      <h4> $ {item.price} x {item.quantity} = ${item.price * item.quantity}</h4>
      <button onClick={() => handleDeleteAll()}> Delete from cart </button>
    </div>
  )
}
