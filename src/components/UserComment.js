import React from 'react'
// import { Button, Comment, Form, Header } from 'semantic-ui-react'

class UserComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        };
    }


    commentSection = () => {

        return this.state.comments.map(() => {
            return (
                <div>
                    <h3 className="ui dividing header">Comments</h3>
                    <div className="comment">
                        <div className="avatar">
                            <img src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
                        </div><div className="content">
                            <a className="author">Matt</a>
                            <div className="metadata"><div>Today at 5:42PM</div>
                            </div><div className="text">How artistic!</div>
                            <div className="actions">
                                <a className="">Reply</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

    }

    commentForm = () => {
        return (
            <form className="ui reply form">
                <div className="field">
                    <textarea rows="3"></textarea>
                </div>
                <button className="ui icon primary left labeled button">
                    <i aria-hidden="true" className="edit icon"></i>Add Reply</button>
            </form>)
    }


    render() {
        return (
            <div className="ui comments">
                <div>{this.commentSection()}</div>
                <div>{this.commentForm()}</div>
            </div>

        )
    }
}



export default UserComment