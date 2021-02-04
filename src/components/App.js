import React from "react";

import AddBlog from "./AddBlog";
import '../styles/App.css'

class App extends React.Component {
  handleSubmit = (questionState) => {
    console.log(questionState);
  };
  render() {
    return <AddBlog onSubmit={this.handleSubmit} />;
  }
}

export default App;
