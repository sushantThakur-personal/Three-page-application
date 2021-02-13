import React, { useReducer } from "react";

import AddUser from "./AddUser";
import UserComment from "./UserComment";
import { UserReducer } from "../reducers/CombinedReducer";

import AddBlog from "./AddBlog";
import "../styles/App.css";

const App = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user: "",
  //   };
  // }
  const [users, dispatch] = useReducer(UserReducer, {});
  console.log(users);
  return (
    <div>
      <UserComment />
      {/* {users} */}
      {/* <AddBlog onSubmit={this.handleSubmit} /> */}
      <AddUser onSubmit={dispatch} />
    </div>
  );
};

export default App;
