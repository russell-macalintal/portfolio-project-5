export function addComment(comment) {
    return (dispatch) => {
        dispatch( {type: 'LOADING COMMENTS'} );
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Accept':'applicatin/json'
            },
            body: JSON.stringify(comment)
        };
        fetch('http://localhost:3000/comments', configObj)
            .then(response => response.json())
            .then(comment_obj => {
                window.alert(comment_obj['Alert']);
                // return dispatch( {type: 'ADD_COMMENT', comment: comment} );
                return dispatch(fetchComments());
            })
    }
}

export function removeComment(commentId) {
    return (dispatch) => {
        dispatch( {type: 'LOADING_COMMENTS'} );
        const configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
                'Accept':'applicaiton/json'
            },
            body: JSON.stringify({uid: commentId})
        };
        fetch(`http://localhost:3000/comments/${commentId}`, configObj)
            .then(response => response.json())
            .then(comment_obj => {
                window.alert(comment_obj['Alert']);
                // return dispatch( {type: 'REMOVE_COMMENT', uid: commentId} );
                return dispatch(fetchComments());
            });
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