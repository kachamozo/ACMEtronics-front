import React, { useState, useEffect } from "react";
import "./Category.css";
import { useDispatch, useSelector } from "react-redux";
import { Edit, Delete } from "@mui/icons-material";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Button,
  Modal,
  TextField,
} from "@mui/material";
import {
  getCategories,
  updateCategory,
  deleteCategory,
} from "../../redux/actions/index";
import { useParams } from "react-router";

function UpdateCategory() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const allCategories = useSelector((state) => state.categories);

  console.log(allCategories);

  const [mEdit, setMEdit] = useState(false);
  const [input, setInput] = useState(allCategories);

  const [modalDel, setModalDel] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({
    name: "",
  });

  function handleSubmit() {
    dispatch(updateCategory(selectedCategory));
    setInput(
      input.map((category) =>
        category.id === selectedCategory.id ? selectedCategory : category
      )
    );
    // dispatch(getCategories());
    modalEdit();
    reload();
    window.scroll(0, 0);
  }

  function handleDelete() {
    setInput(input.filter((category) => category.id !== selectedCategory.id));
    dispatch(deleteCategory(selectedCategory.id));
    // dispatch(getCategories());
    reload();
    modalDelete();
    window.scroll(0, 0);
  }

  function handleChange(event) {
    setSelectedCategory({
      ...selectedCategory,
      [event.target.name]: event.target.value,
    });
  }

  const selectCategory = (category, situation) => {
    setSelectedCategory(category);
    situation === "Edit" ? modalEdit() : modalDelete();
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  function modalEdit() {
    setMEdit((prevM) => !prevM);
  }

  function modalDelete() {
    setModalDel((prevM) => !prevM);
  }

  const editBody = (
    <div className="modal">
      <h2>Edit Category</h2>
      <TextField
        type="text"
        className="input"
        name="name"
        label="Edit Category"
        onChange={(event) => handleChange(event)}
        value={selectedCategory && selectedCategory.name}
      />
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
        Are you sure that you want to eliminate the category
        <b> {selectedCategory && selectedCategory.name}</b>?
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
  return (
    <>
      <div className="container">
        <h1 className="title">Edit Categories</h1>
        <TableContainer>
          <Table className="table">
            <TableHead className="th">
              <TableRow>
                <TableCell className="cell">Id</TableCell>
                <TableCell className="cell">Name</TableCell>
                <TableCell className="cell">Actions</TableCell>
              </TableRow>
            </TableHead>

            {/* Marce si se te cae, de aqui hasta donde termine el TableBody lo comentas, guardas y ahi vuelve a recargar */}

             <TableBody className="tb">
              {allCategories &&
                allCategories.categories?.map((category) => (
                  <TableRow key={category.id}>
                    <TableCell>{category.id}</TableCell>
                    <TableCell>{category.name}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => selectCategory(category, "Edit")}
                        className="button-table"
                      >
                        <Edit />
                      </Button>
                      <Button
                        onClick={() => selectCategory(category, "Delete")}
                        className="button-table"
                      >
                        <Delete />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody> 

            {/* Hasta aqui */}
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

export default UpdateCategory;
