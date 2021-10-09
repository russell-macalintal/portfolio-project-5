export default function ideasReducer(state = [], action) {
    switch (action.type) {
        case "ADD_IDEA":
            return [...state, action.idea]
        case "REMOVE_IDEA":
            return state.filter(idea => idea.id !== action.id)
        default:
            return state;
    }
}