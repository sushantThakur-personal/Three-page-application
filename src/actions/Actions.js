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
} from "./Types";

import QuestionApi from "../api/QuestionApi";

export const addQuestion = (formValues) => async (dispatch) => {
  const response = await QuestionApi.post("/question", { ...formValues });
  dispatch({
    type: ADD_QUESTION,
    payload: response.data,
  });
  history.push("/");
};
