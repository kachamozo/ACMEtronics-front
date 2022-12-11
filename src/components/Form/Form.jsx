import React, { useState, useEffect } from "react";
import { createProduct, getCategories } from "../../redux/actions/index";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Form.css";

const AddProduct = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.Products);

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    description: "",
    brand: "",
    price: "",
    stock: "",
    image: "",
    category: [],
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
    if (!input.category.includes(event.target.value)) {
      setInput({
        ...input,
        category: [...input.category, event.target.value],
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
        category: [],
      });
      history.push("/home");
    } else {
      alert("Debe completar la informacion para crear el producto");
    }
  }

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  function validation(input) {
    let errors = {};

    if (!input.name) {
      errors.name = "Debes ingresar el nombre del producto.";
    }

    if (
      products.find(
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

    if (!input.description) {
      errors.description = "Debes ingresar una descripción del producto.";
    }

    return errors;
  }

  function handleDelete(event) {
    setInput({
      ...input,
      category: input.category.filter((category) => category !== event),
    });
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

            {errors.name && <p className="error">{errors.name}</p>}
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
            <label htmlFor="image">Imagen del producto: </label>
            <input
              type="text"
              id="image"
              name="image"
              placeholder="Imagen del producto"
              value={input.image}
              onChange={(e) => handleChange(e)}
            />

            {errors.image && <p className="error">{errors.image}</p>}
          </div>
          <div>
            <label htmlFor="description">Descripción: </label>
            <input
              type="text-area"
              id="description"
              name="description"
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
              <option value="" hidden>
                Select Categories
              </option>
              <option value="1">Smartphones</option>
              <option value="2">Laptops</option>
              <option value="3">Tablets</option>
              <option value="4">E-readers</option>
              <option value="5">Smartwatches</option>
              <option value="6">Headphones</option>
            </select>

            {input.category.map((category) => (
              <div>
                {category}
                <button
                  className="btnX"
                  type="button"
                  onClick={() => handleDelete(category)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <button type="submit">Agregar producto</button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
