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