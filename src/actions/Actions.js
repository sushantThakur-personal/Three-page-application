import history from "../history";
import {
  ADD_QUESTION,
  UPDATE_QUESTION,
  DELETE_QUESTION,
  GET_QUESTION,
  GET_QUESTIONS,
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

export const updateQuestion = async (formValues) => {
  const response = await QuestionApi.patch(`/question/${formValues.id}`, { ...formValues });
  return {
    type: UPDATE_QUESTION,
    payload: response.data,
  };
}

export const deleteQuestion = async (id) => {
  const response = await QuestionApi.delete(`/question/${id}`);
  return {
    type: DELETE_QUESTION,
    payload: response.data,
  };
}

export const getQuestion = async (id) => {
  const response = await QuestionApi.get(`/question/${id}`);
  return {
    type: GET_QUESTION,
    payload: response.data,
  };
}

export const getQuestions = async () => {
  const response = await QuestionApi.get(`/question/`);
  return {
    type: GET_QUESTIONS,
    payload: response.data,
  };
}



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
