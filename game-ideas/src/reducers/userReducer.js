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
            console.log(`New User: ${action.username}`)
            return {
                ...state,
                current_username: action.username,
                current_userId: action.userId,
                submitting: false
            };
        default:
            return state;
    }
}