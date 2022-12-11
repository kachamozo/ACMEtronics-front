import { CLEAN, GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL, SEARCH_NAME } from "../actions";
const initialState = {
  Products: [],
  detail: [],
  copyProducts: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        Products: action.payload,
        copyProducts: action.payload,
      };
    /* case GET_PRODUCT_DETAIL: 
			return {
				...state,
				detail: action.payload
			} */

 

    case CREATE_PRODUCT:
      return { ...state };

    case "CLEAR_DETAIL":
      return {
        ...state,
        detail: [],
      };

    default:
      return { ...state };
  }

		case SEARCH_NAME: {
			const all = state.Products
			const search = all.filter(f => f.name.toLowerCase().includes(action.payload.toLowerCase()))
			//console.log(state.copy)
			return {
				...state,
				copyProducts: search
			}
		}

		default:
			return {...state}
	}

}

export default rootReducer;
