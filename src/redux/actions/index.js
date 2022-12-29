import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const SEARCH_NAME = "SEARCH_NAME";
export const CLEAN = "CLEAN";
export const GET_CATEGORIES = "GET_CATEGORIES";

export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const ORDERBYAZ = "ORDERBYAZ";
export const FILTER_CATEGORY = "FILTER_CATEGORY";
export const GET_PRODUCT_RATING = "GET_PRODUCT_RATING";
export const PRICE_FILTER = "PRICE_FILTER";

export const GET_FAVORITES = "GET_FAVORITES"
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_USER_BY_ID = "GET_USER_BY_ID";
export const CREATE_USERS = "CREATE_USERS"
// ------- CART ACTIONS ----------------
export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_ONE_FROM_CART = "DELETE_ONE_FROM_CART";
export const DELETE_ALL_FROM_CART = " DELETE_ALL_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const PAYMENT_STRIPE = "PAYMENT_STRIPE";
export const LOGIN_USER = "LOGIN_USER";

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

// GET PRODUCT BY PRICE MIN AND MAX

// export const priceFilter = (price) => {
//   return async function (dispatch) {
//     const response = await axios.get("http://localhost:3001/product/price/" + price);
//     return dispatch({
//       type: PRICE_FILTER,
//       payload: response.data.products,
//     });
//   };
// };

/* export const priceFilter = (price) => {
  return {
    type: PRICE_FILTER,
    payload: price,
  };
}; */

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
    payload: payload,
  };
};

export const filterCategory = (payload) => {
  return {
    type: FILTER_CATEGORY,
    payload: payload,
  };
};

export const getFavorites = (userId) => {
  return async function(dispatch){
    const response = await axios.get(`http://localhost:3001/favorites/?userId=${userId}`)
    return dispatch({
      type: GET_FAVORITES,
      payload: response.data
    })
  }
}

export const addFavorite = (userId, productId) => {
  return async function (dispatch) {
    const response = await axios.post(`http://localhost:3001/favorites/?userId=${userId}&productId=${productId}`);
    return dispatch({
      type: ADD_FAVORITE,
      payload: response.data,
    });
  };
};

export const removeFavorite = (userId, productId) => {
  return async function (dispatch) {
    const response = await axios.delete(`http://localhost:3001/favorites/?userId=${userId}&productId=${productId}`);
    return dispatch({
      type: REMOVE_FAVORITE,
      payload: response.data,
    });
  };
};

export const getAllUsers = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/user");
    return dispatch({
      type: GET_ALL_USERS,
      payload: response.data,
    });
  };
};

export const getUserById = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/user/${id}`);
    return dispatch({
      type: GET_USER_BY_ID,
      payload: response.data,
    });
  };
};
export function createUser(payload) {
  return async function (dispatch) {
      const info = await axios.post('http://localhost:3001/user', payload)
    return info;
  }
}

export const checkout = (payload) => {
  return async function (dispatch) {
    const response = await axios.post("http://localhost:3001/stripe", payload);
    return dispatch({
      type: PAYMENT_STRIPE,
      payload: response.data,
    });
  };
};

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    payload: id,
  };
};

export const deleteOneFromCart = (id) => {
  return {
    type: DELETE_ONE_FROM_CART,
    payload: id,
  };
};

export const deleteAllFromCart = (id) => {
  return {
    type: DELETE_ALL_FROM_CART,
    payload: id,
  };
};

export function increaseQuantity(id) {
  return {
    type: INCREASE_QUANTITY,
    payload: id,
  };
}

export const clearCart = (id) => {
  return {
    type: CLEAR_CART,
    payload: id,
  };
};

export const loginUser = (payload) => {
  return async function (dispatch) {
    const response = await axios.post(
      "http://localhost:3001/user/login",
      payload
    );
    localStorage.setItem("token", response.data.token);
    return dispatch({
      type: LOGIN_USER,
      payload: response.data,
    });
  };
};

//ROLY SI PUEDES REVISAR ESTA ACTION PARA GUARDAR EL TOKEN EN UNA COOKIE, AL PRINCIPIO ME FUNCIONO, LUEGO ME EMPEZO A DAR ERROR CON EL CORS.. PUEDES DESCOMENTARLA Y COMENTAR LA DE ARRIBA QUE GUARDA EL TOKEN EN EL LOCALSTORAGE PARA MIRAR Q SUCEDE, EN LA CONSOLA DE GOOGLE APARECE EL ERROR

// export const loginUser = (payload) => {
//   return async function (dispatch) {
//     try {
//       const response = await axios.post(
//         "http://localhost:3001/login",
//         payload,
//         {
//           withCredentials: true,
//         }
//       );
//       document.cookie = `token=${response.data.token}; path=/; expires=${response.data.expires}; HttpOnly`;
//       dispatch({
//         type: LOGIN_USER,
//         payload: response.data,
//       });
//       return true; // login was successful
//     } catch (error) {
//       return false; // login was not successful
//     }
//   };
// };
