// Idea Object Properties
// - belongs to user
// - has many comments
// Structure
// { 
//     id:
//     userId:
//     title:
//     content:
// }

// export default function ideasReducer(state = [], action) {
//     switch (action.type) {
//         case "ADD_IDEA":
//             return [...state, action.idea]
//         case "REMOVE_IDEA":
//             return state.filter(idea => idea.id !== action.id)
//         default:
//             return state;
//     }
// }

export default function ideasReducer(state = { list: [], loading: false }, action) {
    switch (action.type) {
        case "ADD_IDEA":
            return {
                ...state,
                list: [...state.list, action.idea],
                loading: false
            };
        case "REMOVE_IDEA":
            return {
                ...state,
                list: state.list.filter(idea => idea.id !== action.id),
                loading: false
            };
        case "LOADING_IDEAS":
            return {
                ...state,
                list: [...state.list],
                loading: true
            };
        case "ADD_IDEAS":
            return {
                ...state,
                list: action.ideas,
                loading: false
            };
        default:
            return state;
    }
}