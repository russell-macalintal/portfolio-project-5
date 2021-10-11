import React, { Component } from 'react';
import CommentsInput from '../components/comments/CommentsInput';
import Comments from '../components/comments/Comments';
import { connect } from 'react-redux';
import { addComment, removeComment } from '../actions/commentsActions';

class CommentsContainer extends Component {
    render() {
        return (
            <div>
                <CommentsInput idea={this.props.idea} add={this.props.add} />
                <Comments idea={this.props.idea} comments={this.props.comments.filter(comment => comment.ideaId === this.props.idea.id)} remove={this.props.remove} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: comment => dispatch(addComment(comment)),
        remove: commentId => dispatch(removeComment(commentId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);