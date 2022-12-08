import { GET_ALL_PRODUCTS } from "../actions";
const initialState = {
	Products: []
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_PRODUCTS:
			return {
				...state,
				Products: action.payload
			}
		default:
			return {...state}
	}
}

export default rootReducer;
