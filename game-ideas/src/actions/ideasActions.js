export function addIdea(idea) {
    return (dispatch) => {
        dispatch( {type: 'LOADING_IDEAS'} );
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify(idea)
        };
        fetch('http://localhost:3000/game_ideas', configObj)
            .then(response => response.json())
            .then(idea_obj => {
                window.alert(idea_obj['Alert']);
                // Less fetch requests -> better performance but does not update state based on other users' input without page refresh
                // return dispatch ({type: 'ADD_IDEA', idea: idea});
                // More fetch requests -> Updates entire store state based on all users' inputs
                return dispatch (fetchIdeas());
            });
    }
}

export function removeIdea(ideaId) {
    return (dispatch) => {
        dispatch( {type: 'LOADING_IDEAS'} );
        const configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify({id: ideaId})
        };
        fetch(`http://localhost:3000/game_ideas/${ideaId}`, configObj)
            .then(response => response.json())
            .then(idea_obj => {
                window.alert(idea_obj['Alert']);
                // return dispatch({type: 'REMOVE_IDEA', id: ideaId});
                return dispatch(fetchIdeas());
            });
    }       
}

export function fetchIdeas() {
    return (dispatch) => {
        dispatch( {type: 'LOADING_IDEAS'} );
        fetch('http://localhost:3000/game_ideas')
            .then(response => response.json())
            .then(ideas_obj => {
                let ideas = ideas_obj.data.map(idea_obj => idea_obj.attributes);
                return dispatch( {type: 'ADD_IDEAS', ideas: ideas});
            })
    }
}