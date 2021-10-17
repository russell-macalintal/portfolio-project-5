import React from 'react';

const Comment = (props) => {
    const renderDelete = () => {
        if (props.comment.userId === props.userId) {
            return (
                <>
                    <br></br>
                    <button className="button delete" onClick={() => props.remove(props.comment.uid)}>Delete</button>
                    <span className="user-id">This is your comment.</span>
                </>
            )
        }
    }
    return (
        <div>
            <li className="comment-detail"><span className="content">{props.comment.content}</span>
            {renderDelete()}
            </li>
        </div>
    )
}

export default Comment;