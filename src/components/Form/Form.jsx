import React, { useState, useEffect } from "react";
import {
  getAllProducts,
  createProduct,
  getCategories,
} from "../../redux/actions/index";

import { useDispatch, useSelector } from "react-redux";
import "./Form.css";

const AddProduct = () => {
  const dispatch = useDispatch();

  const allCategories = useSelector((state) => state.categories);
  const allProducts = useSelector((state) => state.copyProducts);

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    description: "",
    brand: "",
    price: "",
    stock: "",
    image: "",
    categories: [],
  });

  function handleChange(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  }

  function handleSelect(event) {
    if (!input.categories.includes(event.target.value)) {
      setInput({
        ...input,
        categories: [...input.categories, event.target.value],
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      alert("El producto fue creado satisfactoriamente");
      dispatch(createProduct(input));

      setInput({
        name: "",
        description: "",
        brand: "",
        price: "",
        stock: "",
        image: "",
        categories: [],
      });
    } else {
      alert("Debe completar la informacion para crear el producto");
    }
  }

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getAllProducts());
  }, [dispatch]);

  function validation(input) {
    let errors = {};

    if (!input.name) {
      errors.name = "Debes ingresar el nombre del producto.";
    }

    if (
      allProducts.find(
        (product) => product.name.toLowerCase() === input.name.toLowerCase()
      )
    )
      errors.name = "El producto ya existe en la base de datos.";

    if (!input.brand) {
      errors.brand = "Debes ingresar la marca del producto.";
    }

    if (!input.price) {
      errors.price = "Debes ingresar el precio del producto.";
    }

    if (!input.stock) {
      errors.stock = "Debes ingresar las cantidades disponibles. ";
    }

    if (!input.image) {
      errors.image = "Debes ingresar la imágen del producto.";
    }

    if (input.image.length > 200) {
      errors.image = "Debes ingresar un enlace más corto";
    }

    if (!input.description) {
      errors.description = "Debes ingresar una descripción del producto.";
    }

    return errors;
  }

  return (
    <>
      <h1 className="title">Agregar Productos</h1>

      <div className="form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="name">Nombre: </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre del producto"
              value={input.name}
              onChange={(e) => handleChange(e)}
            />

            {errors.name ? <p className="error">{errors.name}</p> : null}
          </div>
          <div>
            <label htmlFor="brand">Marca: </label>
            <input
              type="text"
              id="brand"
              name="brand"
              placeholder="Marca del producto"
              value={input.brand}
              onChange={(e) => handleChange(e)}
            />

            {errors.brand && <p className="error">{errors.brand}</p>}
          </div>
          <div>
            <label htmlFor="stock">Cantidades Disponibles: </label>
            <input
              type="number"
              id="stock"
              name="stock"
              placeholder="Cantidades Disponibles"
              value={input.stock}
              onChange={(e) => handleChange(e)}
            />

            {errors.stock && <p className="error">{errors.stock}</p>}
          </div>
          <div>
            <label htmlFor="price">Precio: </label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Precio del producto"
              value={input.price}
              onChange={(e) => handleChange(e)}
            />

            {errors.price && <p className="error">{errors.price}</p>}
          </div>
          <div>
            <label htmlFor="image">Imágen del producto: </label>
            <input
              type="text"
              id="image"
              name="image"
              placeholder="Enlace de la imágen"
              value={input.image}
              onChange={(e) => handleChange(e)}
            />

            {errors.image && <p className="error">{errors.image}</p>}
          </div>
          {input.image && (
            <img
              src={input.image}
              alt="Imagen del producto"
              height="200px"
              width="300px"
            />
          )}

          <div>
            <label htmlFor="image">Descripción del producto: </label>

            <textarea
              type="text"
              id="description"
              name="description"
              cols="23"
              rows="10"
              placeholder="Descripción del producto"
              value={input.description}
              onChange={(e) => handleChange(e)}
            />

            {errors.description && (
              <p className="error">{errors.description}</p>
            )}
          </div>
          <div>
            <select
              className="select"
              id="categories"
              name="categories"
              onChange={(e) => handleSelect(e)}
            >
              <option value="">Select Categories</option>

              {allCategories.map((category) => (
                <option
                  value={category.id}
                  key={category.id}
                  name={category.id}
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Agregar producto</button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
