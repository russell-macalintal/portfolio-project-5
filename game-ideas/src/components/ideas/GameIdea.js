import React from 'react';
import CommentsContainer from '../../containers/CommentsContainer';
import { Redirect } from 'react-router-dom';

const GameIdea = (props) => {
    let idea = props.ideas.find(idea => (idea.uid === props.match.params.ideaId));

    const renderDelete = () => {
        if (idea.uid === props.user.uid) {
            return (
                <button onClick={() => props.remove(idea.uid)}>Delete</button>
            )
        }
    }

    if (idea) {
        return (
            <div>
                <h3>{idea.title}</h3>
                <p>{idea.content}</p>
                {renderDelete()}
                <CommentsContainer idea={idea} />
            </div>
        )
    } else {
        return <Redirect to="/game-ideas" />
    }
}

export default GameIdea;