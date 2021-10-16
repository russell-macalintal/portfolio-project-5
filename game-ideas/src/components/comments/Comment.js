import React from 'react';

const Comment = (props) => {
    const renderDelete = () => {
        if (props.comment.uid === props.user.uid) {
            return (
                <button onClick={() => props.remove(props.comment.uid)}>Delete</button>
            )
        }
    }
    return (
        <div>
            <p>{props.comment.content}</p>
            {renderDelete()}
        </div>
    )
}

export default Comment;