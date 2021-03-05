import React, { useReducer } from "react";

import AddUser from "./AddUser";
import UserComment from "./UserComment";
import { UserReducer, questionReducer } from "../reducers/CombinedReducer";

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
  const [questions, dispatchQuestion] = useReducer(questionReducer, {});

  console.log(users);
  console.log(questions);
  return (
    <div style={{ display: "flex" }}>
      {/* {users} */}
      <AddBlog onSubmit={dispatchQuestion} />
      <AddUser onSubmit={dispatchUser} />
      <UserComment />
    </div>
  );
};

export default App;
