export default function commentsReducer(state = [], action) {
    switch (action.type) {
        case "ADD_COMMENT":
            return [...state, action.comment]
        case "REMOVE_COMMENT":
            return state.filter(comment => comment.id !== action.id)
        default:
            return state;
    }
}