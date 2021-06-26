//
//
// let initialState = {
//     isEditorActive: false,
//     id: "",
//     name: "",
//     category: ["idea", "Quote", "Random", "task"],
//     content: "",
//     date: "",
//     changedDate:""
// }
//
// export let chosenItemReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SHOW_EDITOR:
//             return {...state, isEditorActive: true}
//         case SAVE_CHANGES:
//             return {...state, isEditorActive: false}
//         case SHOW_NEW_ITEM_EDITOR:
//             return {...state, isEditorActive: true}
//         case CHANGE_NAME:
//             return {...state, name: action.payload}
//         case CHANGE_CONTENT:
//             return {...state, content: action.payload}
//         case CHANGE_DATE:
//             return {...state, date: action.payload}
//         case CHANGE_CATEGORY:
//             let otherTypes = state.category.filter(e=>e!==action.payload)
//             return {...state, category: [action.payload, ...otherTypes]}
//         case CLEAR_DATA:
//             return {...initialState}
//         default :
//             return state
//     }
// }
//
//
//
//
//
//
//
//
//
//
