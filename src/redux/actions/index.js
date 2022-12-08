import axio from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

export const getAllProducts = () => {
  return async function (dispatch) {
    const response = await axio.get("http://localhost:3001/product");
    console.log(response.data)
    return dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response.data,
    });
  };
};
