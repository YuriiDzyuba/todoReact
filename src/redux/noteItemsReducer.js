const A_A = "A_A"
const B_B = "B_B"
const C_C = "C_C"

let initialState = {
    a: "",
    b: "",
    c: ""
}

export let noteItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case A_A:
            return {...state, email: action.text}
        case B_B:
            return {...state, password: action.text}
        case C_C:
            return {...state, register: action.text}
        default :
            return state
    }
}

export const aaaaAC = (text) => ({type: A_A, text: text,})

export const bbbbAC = (text) => ({type: B_B, text: text,})

export const ccccAC = () => ({type: C_C,})







