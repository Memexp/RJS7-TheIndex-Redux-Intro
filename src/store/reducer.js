import authors from "../data.js";

const initialState = {
  authors: authors
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_AUTHOR":
      return {
        ...state, //copy all of the old state, and only manipulate the part we want to manipulate.
        authors: state.authors.concat(action.payload)
      };
    case "DELETE_AUTHOR":
      return {
        ...state,
        authors: state.authors.filter(author => author !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
