import React, { useReducer } from "react";

//=======================================================Local Dependencies==========================================================
import AddUser from "./AddUser";
import UserComment from "./UserComment";
import { UserReducer, questionReducer } from "../reducers/CombinedReducer";
import AddBlog from "./AddBlog";

//=======================================================Defining Hooks==============================================================


//========================================================Component definition========================================================

const PrimaryDisplay = (props) => {
  // console.log(users);
  // console.log(questions);
  const [users, dispatchUser] = useReducer(UserReducer, {});
  const [questions, dispatchQuestion] = useReducer(questionReducer, {});
  return (
    <>
      {/* {users} */}
      <AddBlog onSubmit={dispatchQuestion} />
      <AddUser onSubmit={dispatchUser} />
      <UserComment />
    </>
  );
};

export default PrimaryDisplay;
