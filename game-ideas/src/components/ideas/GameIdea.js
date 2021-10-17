import React from 'react';
import CommentsContainer from '../../containers/CommentsContainer';
import { Redirect } from 'react-router-dom';

const GameIdea = (props) => {
    let idea = props.ideas.find(idea => (idea.uid === props.match.params.ideaId));

    const renderDelete = () => {
        if (idea.userId === props.userId) {
            return (
                <>
                    <button className="button delete" onClick={() => props.remove(idea.uid)}>Delete</button>
                    <span className="user-id">This is your post.</span>
                </>
            )
        }

    }

    if (idea) {
        return (
            <div className="idea-detail">
                <h2 className="idea">{idea.title}</h2>
                <p className="content idea">{idea.content}</p>
                {renderDelete()}
                <CommentsContainer idea={idea} />
            </div>
        )
    } else {
        return <Redirect to="/game-ideas" />
    }
}

export default GameIdea;