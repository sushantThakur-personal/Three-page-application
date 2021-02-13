import React from "react";
// import { ADD_USER } from "../actions/Types";

import { addUser } from "../actions/Actions";

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      contact: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const response = addUser(this.state);
    this.props.onSubmit(response);
  };
  render() {
    return (
      <div className="ui segment inverted " id="form-div">
        <form className="ui form main-form-div" onSubmit={this.handleSubmit}>
          <div className="field">
            <div
              className="ui pointing below label"
              style={{ backgroundColor: "#474747", color: "white" }}
            >
              User Name
            </div>
            <input
              type="text"
              id="dark-mode"
              name="UserName"
              value={this.state.userName}
              onChange={(event) =>
                this.setState({ userName: event.target.value })
              }
              placeholder="Name"
            />
          </div>
          <div className="field">
            <div
              className="ui pointing below label"
              style={{ backgroundColor: "#474747", color: "white" }}
            >
              Password
            </div>
            <input
              type="password"
              id="dark-mode"
              name="password"
              value={this.state.password}
              onChange={(event) =>
                this.setState({ password: event.target.value })
              }
              placeholder="Password"
            />
          </div>
          <div className="field">
            <div
              className="ui pointing below label"
              style={{ backgroundColor: "#474747", color: "white" }}
            >
              Email
            </div>
            <input
              type="text"
              id="dark-mode"
              name="password"
              value={this.state.contact}
              onChange={(event) =>
                this.setState({ contact: event.target.value })
              }
              placeholder="Email"
            />
          </div>
          <div className="field ">
            <button
              type="submit"
              className="ui violet button"
              style={{ width: "100%" }}
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddUser;
