import React from 'react'
import { useDispatch } from 'react-redux'
import { orderaz } from '../../redux/actions'

export const Orderaz = () => {
  const dispatch = useDispatch()

  function handleOrdenar(e) {
    e.preventDefault()
    dispatch(orderaz(e.target.value))
  }

  return (
    <div>
      <select onChange={(e) => handleOrdenar(e)}>
        <option value='all'>Ordenar por Nombre</option>
        <option value='asc'> A a Z  </option>
        <option value='desc'> Z a A  </option>
      </select>
    </div>
  )
}
