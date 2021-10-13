export function addIdea(idea) {
    return {
        type: 'ADD_IDEA',
        idea: idea
    }
}

export function removeIdea(ideaId) {
    return {
        type: 'REMOVE_IDEA',
        id: ideaId
    }
}

export function fetchIdeas() {
    return (dispatch) => {
        dispatch( {type: 'LOADING_IDEAS'} );
        fetch('http://127.0.0.1:3000/game_ideas')
            .then(response => response.json())
            .then(ideas_obj => {
                let ideas = ideas_obj.data.map(idea_obj => idea_obj.attributes);
                return dispatch( {type: 'ADD_IDEAS', ideas: ideas});
            })
    }
}