import { Info } from "@mui/icons-material";
import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const SEARCH_NAME = "SEARCH_NAME";
export const CLEAN = "CLEAN";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const getAllProducts = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/product");
    return dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response.data.products,
    });
  };
};

export const getCategories = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/category");
    return dispatch({
      type: GET_CATEGORIES,
      payload: response.data.categories,
    });
  };
};

//  ---- GET PRODUCT BY ID - descomentar cuando esté la ruta -------

export const getProductDetail = (id) => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/product/" + id);
    return dispatch({
      type: GET_PRODUCT_DETAIL,
      payload: response.data,
    });
  };
};

export const searchName = (name) => {
  return {
    type: SEARCH_NAME,
    payload: name,
  };
};
export const clean = (payload) => {
  return {
    type: CLEAN,
    payload,
  };
};

export const ClearDetail = () => {
  return {
    type: "CLEAR_DETAIL",
  };
};

export const createProduct = (payload) => {
  return async function (dispatch) {
    const response = await axios.post("http://localhost:3001/product", payload);
    return response;
  };
};

export const updateProduct = (payload) => {
  let id = payload.id;
  return async function (dispatch) {
    const response = await axios.put(
      `http://localhost:3001/product/${id}`,
      payload
    );
    return dispatch({
      type: UPDATE_PRODUCT,
      payload: response.data,
    });
  };
};

///sirve

// export const updateProduct = (payload) => {
//   let id = payload.id;
//   return (dispatch) => {
//     axios
//       .put(`http://localhost:3001/product/${id}`, payload)
//       .then((response) => {
//         dispatch({
//           type: UPDATE_PRODUCT,
//           payload: response.data,
//         });
//       });
//   };
// };

export const deleteProduct = (id) => {
  return async function (dispatch) {
    const response = await axios.delete("http://localhost:3001/product/" + id);
    return dispatch({
      type: DELETE_PRODUCT,
      payload: response.data,
    });
  };
};

// export const deleteProduct = (id) => {
//   return async function (dispatch) {
//     const response = await axios.delete(`http://localhost:3001/product`, {
//       params: {
//         id: id,
//       },
//     });
//     dispatch({
//       type: DELETE_PRODUCT,
//       payload: response.data,
//     });
//   };
// };
