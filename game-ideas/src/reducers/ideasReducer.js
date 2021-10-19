// Idea Object Properties
// - belongs to user
// - has many comments
// Structure
// { 
//     uid:
//     userId:
//     title:
//     content:
// }

export default function ideasReducer(state = { list: [], loading: false }, action) {
    switch (action.type) {
        // case "ADD_IDEA":
        //     return {
        //         ...state,
        //         list: [...state.list, action.idea],
        //         loading: false
        //     };
        // case "REMOVE_IDEA":
        //     return {
        //         ...state,
        //         list: state.list.filter(idea => idea.uid !== action.uid),
        //         loading: false
        //     };
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