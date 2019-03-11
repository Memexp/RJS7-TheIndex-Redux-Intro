const ADD_AUTHOR = "ADD_AUTHOR";
const DELETE_AUTHOR = "DELETE_AUTHOR";

export const addAuthor = newAuthor => {
  return {
    type: ADD_AUTHOR,
    payload: newAuthor
  };
};

export const deleteAuthor = author => {
  return {
    type: DELETE_AUTHOR,
    payload: author
  };
};
