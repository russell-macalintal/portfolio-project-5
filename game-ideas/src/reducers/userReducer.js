// User Object Properties
// - has many ideas
// - has many comments
// Structure
// { 
//     uid:
//     username:
// }


export default function userReducer(state = {current_username: "", current_userId: "", submitting: false}, action) {
    switch (action.type) {
        case "SUBMITTING":
            return {
                ...state,
                submitting: true
            };
        case "SET_USER":
            return {
                ...state,
                current_username: action.username,
                current_userId: action.userId,
                submitting: false
            };
        case "REMOVE_USER":
            return {
                ...state,
                current_username: "",
                current_userId: "",
                submitting: false
            }
        default:
            return state;
    }
}