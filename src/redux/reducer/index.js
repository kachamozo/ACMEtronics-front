import { GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL, SEARCH_NAME } from "../actions";
const initialState = {
	Products: [], 
	detail: [],
	search: []
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
		case SEARCH_NAME: {
			const search = state.payload === ""
			? state.Products
			: state.Products.filter(f => f.name.toLowerCase().includes(action.payload.toLowerCase()))
			console.log(state.payload)
			return {
				...state,
				Products: search
			}
		}
		default:
			return {...state}
	}
}

export default rootReducer;
