import React from "react";
import { Formik, Form } from "formik";

function Form() {
  return (
    <>
      <form className="form">
        <div>
          <label htmlFor="name">Nombre: </label>
          <input type="text" id="name" placeholder="Nombre del producto" />
        </div>
        <div>
          <label htmlFor="description">Descripcion: </label>
          <input
            type="text"
            id="description"
            placeholder="Descripcion del producto"
          />
        </div>
        <div>
          <label htmlFor="brand">Marca: </label>
          <input type="text" id="name" placeholder="Nombre del producto" />
        </div>
        <div>
          <label htmlFor="price">Precio: </label>
          <input type="text" id="price" placeholder="Precio del producto" />
        </div>
        <div>
          <label htmlFor="stock">Cantidadades Disponibles: </label>
          <input type="text" id="stock" placeholder="Cantidades disponibles" />
        </div>
        <div>
          <label htmlFor="image">Imágen del producto: </label>
          <input
            type="text"
            id="image"
            placeholder="Inserta la imágen del producto"
          />
        </div>

        <button type="submit">Agregar producto</button>
      </form>
    </>
  );
}

export default Form;
