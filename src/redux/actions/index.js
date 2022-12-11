import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const SEARCH_NAME = "SEARCH_NAME";
export const GET_CATEGORIES = "GET_CATEGORIES";

export const getAllProducts = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/product");
    //console.log(response.data)
    return dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response.data,
    });
  };
};

export const getCategories = () => {
  return async function (dispatch) {
    return await axios
      .get("http://localhost:3001/category")
      .then((response) => {
        dispatch({
          type: GET_CATEGORIES,
          payload: response.data,
        });
      });
  };
};

//  ---- GET PRODUCT BY ID - descomentar cuando esté la ruta -------
export const getProductDetail = (id) => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/product/:" + id);
    return dispatch({
      type: GET_PRODUCT_DETAIL,
      payload: response.data,
    });
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

export const searchName = (name) => {
  return async function (dispatch) {
    return await axios
      .get(`http://localhost:3001/product?name=${name}`)
      .then((response) => {
        dispatch({
          type: SEARCH_NAME,
          payload: response.data,
        });
      });
  };
};
