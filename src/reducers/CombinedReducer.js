import {
  ADD_QUESTION,
  GET_QUESTION,
  GET_QUESTIONS,
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
  GET_COMMENTS,
} from "../actions/Types";

export const UserReducer = (users, action) => {
  switch (action.type) {
    case ADD_USER:
      return users;
    case GET_USER:
      return { ...users, [action.payload.id]: action.payload };
    case UPDATE_USER:
      return users;
    case DELETE_USER:
      return users;
    default:
      return users;
  }
};
export const commentReducer = (comments, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return comments;
    case GET_COMMENTS:
      return { ...comments, [action.payload.id]: action.payload };
    case DELETE_COMMENT:
      return comments;
    case UPDATE_COMMENT:
      return comments;
    default:
      return comments;
  }
};

export const questionReducer = (questions, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      return questions;
    case GET_QUESTION:
      return { ...questions, [action.payload.id]: action.payload };
    case UPDATE_QUESTION:
      return questions;
    case DELETE_QUESTION:
      return questions;
    case GET_QUESTIONS:
      return { ...questions, [action.payload.id]: action.payload };
    default:
      return questions;
  }
};
