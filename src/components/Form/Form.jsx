import React from "react";
import { Formik } from "formik";
import "./Form.css";

function AddForm() {
  return (
    <>
      <h1 className="title">Agregar Producto</h1>
      <Formik
        initialValues={{
          name: "",
          description: "",
          brand: "",
          price: "",
          stock: "",
          image: "",
        }}
        validate={(values) => {
          let error = {};
          if (!values.name) {
            error.name = "Debes ingresar el nombre del producto.";
          }

          if (!values.brand) {
            error.brand = "Debes ingresar la marca del producto.";
          }

          if (!values.price) {
            error.price = "Debes ingresar el precio del producto.";
          }

          if (!values.stock) {
            error.stock = "Debes ingresar las cantidades disponibles.";
          }

          if (!values.image) {
            error.image = "Debes ingresar la imágen del producto.";
          }

          if (!values.description) {
            error.description = "Debes ingresar una descripción del producto.";
          }
          return error;
        }}
        onSubmit={() => {}}
      >
        {({ values, handleSubmit, handleChange, handleBlur, errors }) => (
          <form className="form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nombre: </label>
              <input
                type="text"
                id="name"
                placeholder="Nombre del producto"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && <div className="error">{errors.name} </div>}
            </div>

            <div>
              <label htmlFor="brand">Marca: </label>
              <input
                type="text"
                id="brand"
                placeholder="Nombre del producto"
                value={values.brand}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.brand && <div className="error">{errors.brand} </div>}
            </div>

            <div>
              <label htmlFor="price">Precio: </label>
              <input
                type="number"
                id="price"
                placeholder="Precio del producto"
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.price && <div className="error">{errors.price} </div>}
            </div>
            <div>
              <label htmlFor="stock">Cantidadades Disponibles: </label>
              <input
                type="number"
                id="stock"
                placeholder="Cantidades disponibles"
                value={values.stock}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.stock && <div className="error">{errors.stock} </div>}
            </div>
            <div>
              <label htmlFor="image">Imágen del producto: </label>
              <input
                type="text"
                id="image"
                placeholder="Inserta la imágen del producto"
                value={values.image}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.image && <div className="error">{errors.image} </div>}
            </div>

            <div>
              <label htmlFor="description">Descripcion: </label>

              <textarea
                className="description"
                id="description"
                cols="24"
                rows="10"
                placeholder="Description"
                values={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
              ></textarea>
              {errors.description && (
                <div className="error">{errors.description} </div>
              )}
            </div>

            <button type="submit">Agregar producto</button>
          </form>
        )}
      </Formik>
    </>
  );
}

export default AddForm;
