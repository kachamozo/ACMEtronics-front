import React, { useEffect, useState } from "react";
import "./UpdateProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllProducts,
  updateProduct,
  deleteProduct,
} from "../../redux/actions/index";
import { Edit, Delete, Duo } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Modal,
  Button,
  TextField,
} from "@mui/material";

function UpdateProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allProducts = useSelector((state) => state.products);

  const [input, setInput] = useState([]);
  const [mEdit, setMEdit] = useState(false);

  const [modalDel, setModalDel] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState({
    id: "",
    name: "",
    brand: "",
    description: "",
    price: "",
    stock: "",
    image: "",
  });

  function handleSubmit() {
    dispatch(updateProduct(selectedProduct));

    setInput(
      input.map((product) =>
        product.id === selectedProduct.id ? selectedProduct : product
      )
    );
    dispatch(getAllProducts());
    reload();
    // navigate("/shop/updateproduct");
    modalEdit();

    window.scroll(0, 0);
  }

  function handleDelete() {
    setInput(input.filter((product) => product.id !== selectedProduct.id));
    dispatch(deleteProduct(selectedProduct.id));
    dispatch(getAllProducts());
    reload();
    modalDelete();
    //reload();
    window.scroll(0, 0);
  }

  function handleChange(event) {
    setSelectedProduct((prevS) => ({
      ...prevS,
      [event.target.name]: event.target.value,
    }));
  }

  const selectProduct = (product, situation) => {
    setSelectedProduct(product);
    situation === "Edit" ? modalEdit() : modalDelete();
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);// acabo de agregar esto para que se actualice la pagina

  function modalEdit() {
    setMEdit((prevM) => !prevM);
  }

  function modalDelete() {
    setModalDel((prevM) => !prevM);
  }

  const editBody = (
    <div className="modal">
      <h2>Edit Product</h2>

      <TextField
        type="text"
        className="input"
        name="name"
        label="Name"
        onChange={(event) => handleChange(event)}
        value={selectedProduct && selectedProduct.name}
      />
      <br />

      <TextField
        className="input"
        type="text"
        name="brand"
        label="Brand"
        onChange={(event) => handleChange(event)}
        value={selectedProduct && selectedProduct.brand}
      />
      <br />

      <TextField
        type="number"
        className="input"
        name="price"
        label="Price"
        onChange={(event) => handleChange(event)}
        value={selectedProduct && selectedProduct.price}
      />
      <br />
      <TextField
        type="number"
        className="input"
        name="stock"
        label="Stock"
        onChange={(event) => handleChange(event)}
        value={selectedProduct && selectedProduct.stock}
      />
      <br />
      <TextField
        type="text"
        className="input"
        name="description"
        label="Description"
        onChange={(event) => handleChange(event)}
        value={selectedProduct && selectedProduct.description}
      />
      <br />

      <TextField
        type="text"
        className="input"
        name="image"
        label="Image"
        onChange={(event) => handleChange(event)}
        value={selectedProduct && selectedProduct.image}
      />
      <br />

      <br />

      <div>
        <Button onClick={(e) => handleSubmit(e)}>Edit</Button>
        <Button onClick={(e) => modalEdit(e)}>Cancel</Button>
      </div>

      <br />
    </div>
  );

  const deleteBody = (
    <div className="modal">
      <p>
        Are you sure that you want to eliminate the product
        <b> {selectedProduct && selectedProduct.name}</b>?
      </p>

      <div>
        <Button onClick={() => handleDelete()}>YES</Button>
        <Button onClick={() => modalDel()}>NO</Button>
      </div>
    </div>
  );

  function reload() {
    window.location.reload();
  }

  const products = allProducts?.length;
  console.log(products);


  return (
    <>
    
      <div className="container">

        <h1 className="title">Edit Products</h1>

      <div className="add">
        <Button >
          <Link to="/form"><p>Add Product</p></Link>
        </Button>
        <br />
        <Button >
          <Link to="/dashboard"><p>Back to Dashboard</p></Link>
        </Button>
      </div>
      
        <TableContainer>
          <Table className="table">
            <TableHead className="th">
              <TableRow>
                <TableCell className="cell">Name</TableCell>
                <TableCell className="cell">Brand</TableCell>
                <TableCell className="cell">Price</TableCell>
                <TableCell className="cell">Stock</TableCell>
                <TableCell className="cell">Description</TableCell>
                <TableCell className="cell">Image</TableCell>

                <TableCell>Edit</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>

            <TableBody className="tb">
              {allProducts &&
                allProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.brand}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>{product.description}</TableCell>
                    <TableCell className="td">{product.image}</TableCell>

                    <TableCell>
                      <Edit
                        size={"18px"}
                        onClick={(e) => selectProduct(product, "Edit")}
                      />
                    </TableCell>
                    <TableCell>
                      <Delete
                        size={"18px"}
                        onClick={(e) => selectProduct(product, "Delete")}
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Modal keepMounted open={mEdit} onClose={(e) => modalEdit(e)}>
          {editBody}
        </Modal>
        <Modal keepMounted open={modalDel} onClose={(e) => modalDelete(e)}>
          {deleteBody}
        </Modal>
      </div>
      
    </>
  );
}

export default UpdateProduct;
