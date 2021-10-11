import React from 'react';

const GameIdea = (props) => {
    let idea = props.ideas.find(idea => (idea.id === props.match.params.ideaID));
    return (
        <div>
            <h3>{idea.title}</h3>
            <p>{idea.content}</p>
        </div>
    )
}

export default GameIdea;