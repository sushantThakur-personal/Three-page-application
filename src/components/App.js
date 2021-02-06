import React, { useState, useReducer } from "react";
import UserComment from "./UserComment";

import AddBlog from "./AddBlog";
import "../styles/App.css";

class App extends React.Component {
  handleSubmit = (questionState) => {
    console.log(questionState);
  };
  render() {
    return (
      <div>
        <UserComment />
        <AddBlog onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
