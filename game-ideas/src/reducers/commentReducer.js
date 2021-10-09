function commentReducer(state = [], action) {
    switch (action.type) {
        case "ADD_COMMENT":
            return [...state, action.idea]
        case "REMOVE_COMMENT":
            return state.filter(idea => idea.id !== action.id)
        default:
            state;
    }
}