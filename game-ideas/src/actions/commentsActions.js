export function addComment(comment) {
    return {
        type: 'ADD_COMMENT',
        comment: comment
    }
}

export function removeComment(commentId) {
    return {
        type: 'REMOVE_COMMENT',
        id: commentId
    }
}