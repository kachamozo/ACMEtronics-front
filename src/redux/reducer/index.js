import {
  CLEAN,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAIL,
  SEARCH_NAME,
  GET_CATEGORIES,
} from "../actions";

const initialState = {
  products: [],
  detail: [],
  copyProducts: [],
  categories: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        copyProducts: action.payload,
      };
    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case SEARCH_NAME: {
      const all = state.products;
      const search = all.filter((f) =>
        f.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      //console.log(state.copy)
      return {
        ...state,
        copyProducts: search,
      };
    }
    case CLEAN:
      return {
        ...state,
        detail: [],
      };

    case "CREATE_PRODUCT":
      return { ...state };

    case GET_CATEGORIES:
      return { ...state, categories: action.payload };

    default:
      return { ...state };
  }
}

export default rootReducer;
