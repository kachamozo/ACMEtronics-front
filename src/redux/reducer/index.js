import {
  CLEAN,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAIL,
  SEARCH_NAME,
  GET_CATEGORIES,
  ORDERBYAZ,
  FILTER_CATEGORY,
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

    case ORDERBYAZ: {
        let filterorder = [...state.products]
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
    
    case FILTER_CATEGORY:{
      const filterCat = state.products.filter(e => e.CategoryProduct[0].name?.includes(action.payload))
      return {
        ...state,
        copyProducts: filterCat
      }
    }
    default:
      return { ...state };
  }
}

export default rootReducer;
