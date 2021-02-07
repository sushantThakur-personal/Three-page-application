import {
  ADD_QUESTION,
  UPDATE_QUESTION,
  DELETE_QUESTION,
  ADD_USER,
  GET_USER,
  UPDATE_USER,
  DELETE_USER,
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT,
  ADD_LIKE,
} from "../actions/Types";

export const UserReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return state;
    case GET_USER:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_USER:
      return state;
    case DELETE_USER:
      return state;
  }
};
