import axios from 'axios';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
export const SEARCH_NAME = 'SEARCH_NAME'

export const getAllProducts = () => {
  return async function (dispatch) {
    const response = await axios.get('http://localhost:3001/product');
    //console.log(response.data)
    return dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response.data,
    });
  };
};
/* ---- GET PRODUCT BY ID - descomentar cuando esté la ruta -------
export const getProductDetail = (id) =>{
  return async function(dispatch){
    const response = await axios.get('http://localhost:3001/product/:'+id)
    return dispatch({
      type: GET_PRODUCT_DETAIL,
      payload: response.data
    })
  }
} */

export const searchName = (name) => {
  return {
    type: SEARCH_NAME,
    payload: name
  }
}