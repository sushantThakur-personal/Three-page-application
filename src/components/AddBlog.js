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
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <div className="ui pointing below label">Add a funny Question</div>
            <textarea
              name="question"
              value={this.state.question}
              onChange={(event) =>
                this.setState({ question: event.target.value })
              }
              placeholder="Add a funny Question"
            />
          </div>
          <div className="field ">
            <button type="submit" className="ui primary button">
              submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default AddBlog;
