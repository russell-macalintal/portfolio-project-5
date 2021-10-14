// User Object Properties
// - has many ideas
// - has many comments
// Structure
// { 
//     uid:
//     username:
// }


export default function userReducer(state = {current_user: "", submitting: false}, action) {
    switch (action.type) {
        case "SUBMITTING":
            return {
                ...state,
                submitting: true
            };
        case "SET_USER":
            return {
                ...state,
                current_user: action.user,
                submitting: false
            };
        default:
            return state;
    }
}