import React from "react";

class AddBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };
  render() {
    return (
      <div className="ui segment inverted " id="form-div">
        <form className="ui form main-form-div" onSubmit={this.handleSubmit}>

          <div className="field">
            <div className="ui pointing below label" style={{ backgroundColor: "#474747", color: "white" }}>Add a funny Question</div>
            <textarea
              id="dark-mode"
              name="question"
              value={this.state.question}
              onChange={(event) =>
                this.setState({ question: event.target.value })
              }
              placeholder="Add a funny Question"
            />
          </div>
          <div className="field ">
            <button type="submit" className="ui primary button inverted">
              submit
            </button>
          </div>




        </form>
      </div>
    );
  }
}
export default AddBlog;
