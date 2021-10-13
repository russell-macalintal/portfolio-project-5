import React from 'react';

const Comment = (props) => {
    return (
        <div>
            <p>{props.comment.content}</p>
            <button onClick={() => props.remove(props.comment.uid)}>Delete</button>
        </div>
    )
}

export default Comment;