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
  const [users, dispatchUser] = useReducer(UserReducer, {});
  console.log(users);
  return (
    <div style={{ display: "flex" }}>
      {/* {users} */}
      {/* <AddBlog onSubmit={dispatch} /> */}
      <AddUser onSubmit={dispatchUser} />
      <UserComment />
    </div>
  );
};

export default App;
