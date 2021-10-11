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

const sample = [
    {
        id: "1",
        title: "Super Mario",
        content: "Mustachioed plumber saves a princess from an evil turtle."
    },
    {
        id: "2",
        title: "Halo",
        content: "Enhanced super soldier battles religious aliens and zombie-like monster infestations to save humanity from extinction."
    },
    {
        id: "3",
        title: "God of War",
        content: "Spartan battles beasts and gods to enact vengeance on Ares, the Greek God of War."
    },
]

export default function ideasReducer(state = sample, action) {
    switch (action.type) {
        case "ADD_IDEA":
            return [...state, action.idea]
        case "REMOVE_IDEA":
            return state.filter(idea => idea.id !== action.id)
        default:
            return state;
    }
}