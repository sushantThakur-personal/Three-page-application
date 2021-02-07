import React, { useReducer } from "react";

import AddUser from "./AddUser";
import UserComment from "./UserComment";
import { addUser } from "../actions/Actions";
import { UserReducer } from "../reducers/CombinedReducer";

import AddBlog from "./AddBlog";
import "../styles/App.css";

function HandleSubmit(questionState) {
  const response = addUser(questionState);
  console.log(response);
}
const App = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user: "",
  //   };
  // }
  const [state, dispatch] = useReducer(UserReducer, { user: "" });
  return (
    <div>
      <UserComment />
      {/* <AddBlog onSubmit={this.handleSubmit} /> */}
      <AddUser onSubmit={HandleSubmit} />
    </div>
  );
};

export default App;
