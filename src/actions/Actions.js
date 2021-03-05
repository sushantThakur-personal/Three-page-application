import history from "../history";
import {
  ADD_QUESTION,
  UPDATE_QUESTION,
  DELETE_QUESTION,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT,
  ADD_LIKE,
  GET_USER,
} from "./Types";

import QuestionApi from "../api/QuestionApi";

export const addQuestion = async (formValues) => {
  const response = await QuestionApi.post("/question", { ...formValues });
  return {
    type: ADD_QUESTION,
    payload: response.data,
  };
};

export const addUser = async (formValues) => {
  const response = await QuestionApi.post("/user/", { ...formValues });
  return {
    type: ADD_USER,
    payload: response.data,
  };
};

export const getUser = (formValues) => async (dispatch) => {
  const response = await QuestionApi.get("/user", { ...formValues });
  dispatch({
    type: GET_USER,
    payload: response.data,
  });
  history.push("/");
};
