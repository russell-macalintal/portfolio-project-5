// User Object Properties
// - has many ideas
// - has many comments
// Structure
// { 
//     id:
//     username:
// }


export default function usersReducer(state = [], action) {
    switch (action.type) {
        case "ADD.USER":
            return [...state, action.user]
        case "REMOVE_USER":
            return state.filter(user => user.id !== action.id)
        default:
            return state;
    }
}