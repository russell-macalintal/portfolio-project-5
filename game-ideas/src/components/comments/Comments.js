import React, { Component } from 'react';
import Comment from './Comment';

export default class Comments extends Component {
    renderComments = () => {
        return this.props.comments.map( comment => <Comment key={comment.uid} comment={comment} remove={this.props.remove} />)
    }

    render() {
        return (
            <div>
                <h2>Comments</h2>
                {this.renderComments()}
            </div>
        )
    }
}