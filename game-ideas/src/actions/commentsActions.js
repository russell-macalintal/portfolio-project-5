export function addComment(comment) {
    return {
        type: 'ADD_COMMENT',
        comment: comment
    }
}

export function removeComment(commentId) {
    return {
        type: 'REMOVE_COMMENT',
        uid: commentId
    }
}

export function fetchComments() {
    return (dispatch) => {
        dispatch( {type: 'LOADING_COMMENTS'} );
        fetch('http://127.0.0.1:3000/comments')
            .then(response => response.json())
            .then(comments_obj => {
                let comments = comments_obj.data.map(comment_obj => comment_obj.attributes);
                return dispatch( {type: 'ADD_COMMENTS', comments: comments});
            })
    }
}