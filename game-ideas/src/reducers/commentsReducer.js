// Comment Object Properties
// - belongs to user
// - belongs to idea
// Structure
// { 
//     id:
//     userId:
//     ideaId:
//     content:
// }

// export default function commentsReducer(state = [], action) {
//     switch (action.type) {
//         case "ADD_COMMENT":
//             return [...state, action.comment]
//         case "REMOVE_COMMENT":
//             return state.filter(comment => comment.id !== action.id)
//         default:
//             return state;
//     }
// }

export default function commentsReducer(state = { list: [], loading: false }, action) {
    switch (action.type) {
        case "ADD_COMMENT":
            return [...state, action.comment];
        case "REMOVE_COMMENT":
            return state.filter(comment => comment.id !== action.id);
        case "LOADING_COMMENTS":
            return {
                ...state,
                list: [...state.list],
                loading: true
            };
        case "ADD_COMMENTS":
            return {
                ...state,
                list: action.comments,
                loading: false
            };
        default:
            return state;
    }
}