import { GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL } from "../actions";
const initialState = {
	Products: [], 
	detail: []
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_PRODUCTS:
			return {
				...state,
				Products: action.payload
			}
		/* case GET_PRODUCT_DETAIL: 
			return {
				...state,
				detail: action.payload
			} */
		default:
			return {...state}
	}
}

export default rootReducer;
