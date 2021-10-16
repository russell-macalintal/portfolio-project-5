import React, { Component } from 'react';
import CommentsInput from '../components/comments/CommentsInput';
import Comments from '../components/comments/Comments';
import { connect } from 'react-redux';
import { addComment, removeComment, fetchComments } from '../actions/commentsActions';

class CommentsContainer extends Component {
    componentDidMount() {
        this.props.fetchComments();
    }

    render() {
        return (
            <div>
                <CommentsInput idea={this.props.idea} add={this.props.add} userId={this.props.userId} />
                <Comments idea={this.props.idea} comments={this.props.comments.filter(comment => comment.ideaId === this.props.idea.uid)} remove={this.props.remove} user={this.props.user} userId={this.props.userId} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comments.list,
        user: state.user.current_username,
        userId: state.user.current_userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: comment => dispatch(addComment(comment)),
        remove: commentId => dispatch(removeComment(commentId)),
        fetchComments: () => dispatch(fetchComments())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);