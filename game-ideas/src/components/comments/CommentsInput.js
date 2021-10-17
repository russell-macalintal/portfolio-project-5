import React, { Component } from 'react';
import {v1 as uuid} from 'uuid';

export default class CommentsInput extends Component {
    state = {
        content: ""
    }
    
    handleOnSubmit = (event) => {
        event.preventDefault();
        const comment = {...this.state, uid: uuid(), userId: this.props.userId, ideaId: this.props.idea.uid}
        this.props.add(comment);
        this.setState({
            content: ""
        })
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        if (this.props.userId !== "") {
            return(
                <div id="comment-input">
                    <h4>Do You Like This Idea? Comment Below!</h4>
                    <form onSubmit={this.handleOnSubmit} >
                        <textarea id="comment-box" name="content" rows="4" cols="50" onChange={this.handleOnChange} value={this.state.content} placeholder="Provide Feedback Here..." />
                        <input className="button" type="submit" value="Comment" />
                    </form>
                </div>
            )
        }
        return null;
    }
}