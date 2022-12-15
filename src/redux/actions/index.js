
import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const SEARCH_NAME = "SEARCH_NAME";
export const CLEAN = "CLEAN";
export const GET_CATEGORIES = "GET_CATEGORIES";

export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const ORDERBYAZ = "ORDERBYAZ";
export const FILTER_CATEGORY = 'FILTER_CATEGORY'
export const GET_PRODUCT_RATING = 'GET_PRODUCT_RATING'
export const PRICE_FILTER = 'PRICE_FILTER'


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

export const getProductDetail = (id) => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/product/" + id);
    return dispatch({
      type: GET_PRODUCT_DETAIL,
      payload: response.data,
    });
  };
};

// GET PRODUCT BY RATING

export const getProductRating = (rating) => {
  return {
    type: GET_PRODUCT_RATING,
    payload: rating,
  };
};

// GET PRODUCT BY PRICE
export const getPrice = (price) => {
  return {
    type: PRICE_FILTER,
    payload: price,
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

export const orderaz = (payload) => {
  return {
    type: ORDERBYAZ,
    payload: payload
  }
}

export const filterCategory = (payload) => {
  return{
    type: FILTER_CATEGORY,
    payload
  }
}

