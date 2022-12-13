import { CLEAN, GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL, ORDERBYAZ, SEARCH_NAME } from "../actions";
const initialState = {
	Products: [], 
	detail: [],
	copyProducts: []
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_PRODUCTS:
			return {
				...state,
				Products: action.payload,
				copyProducts: action.payload
			}
		/* case GET_PRODUCT_DETAIL: 
			return {
				...state,
				detail: action.payload
			} */
		case SEARCH_NAME: {
			const all = state.Products
			const search = all.filter(f => f.name.toLowerCase().includes(action.payload.toLowerCase()))
			//console.log(state.copy)
			return {
				...state,
				copyProducts: search
			}
		}
		case ORDERBYAZ: {
			let filterorder = [...state.Products]
			let filterproduct = [...state.copyProducts]
			if (action.payload === "all") {
                return {
                    ...state,
					copyProducts: filterorder
                }
            }
            if (action.payload === 'asc') {
                const data =  filterproduct.sort((a, b) => (a.name?.toUpperCase() > b.name?.toUpperCase() ? 1 : -1))
                return {
                    ...state,
                    copyProducts: data
                }
            }

            const data = filterproduct.sort((a, b) => (a.name?.toUpperCase() > b.name?.toUpperCase() ? -1 : 1))
            return {
                ...state,
                copyProducts: data,
            }
		}
		case CLEAN:
			return{
				...state,
				detail:[]
			}
		default:
			return {...state}
	}
}

export default rootReducer;
