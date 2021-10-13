import React, { Component } from 'react';
import {v1 as uuid} from 'uuid';

export default class CommentsInput extends Component {
    state = {
        content: ""
    }
    
    handleOnSubmit = (event) => {
        event.preventDefault();
        const comment = {...this.state, uid: uuid(), ideaId: this.props.idea.uid}
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
        return(
            <div>
                <h3>Do You Like This Idea? Comment Below!</h3>
                <form onSubmit={this.handleOnSubmit} >
                    <textarea name="content" rows="4" cols="50" onChange={this.handleOnChange} value={this.state.content} placeholder="Provide Constructive Feedback Here" />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}