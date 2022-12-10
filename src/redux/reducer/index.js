import { GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL, SEARCH_NAME } from "../actions";
const initialState = {
	Products: [], 
	detail: [],
	copy: []
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_PRODUCTS:
			return {
				...state,
				Products: action.payload,
				copy: action.payload
			}
		/* case GET_PRODUCT_DETAIL: 
			return {
				...state,
				detail: action.payload
			} */
		case SEARCH_NAME: {
			const all = state.Products
			const search = all.filter(f => f.name.toLowerCase().includes(action.payload.toLowerCase()))
			console.log(state.copia)
			return {
				...state,
				copy: search
			}
		}
		default:
			return {...state}
	}
}

export default rootReducer;
