const ADD_NEW_NOTE = "ADD_NEW_NOTE"
const SHOW_EDITOR = "SHOW_EDITOR"
const SHOW_NEW_ITEM_EDITOR = "SHOW_NEW_ITEM_EDITOR"
const SAVE_CHANGES = "SAVE_CHANGES"
const CHANGE_CATEGORY = "CHANGE_CATEGORY"
const CHANGE_NAME = "CHANGE_NAME"
const CHANGE_CONTENT = "CHANGE_CONTENT"
const CHANGE_DATE = "CHANGE_DATE"
const CLEAR_DATA = "CLEAR_DATA"
const DELETE_NOTE = "DELETE_NOTE"
const ADD_TO_ARCHIVE = "ADD_TO_ARCHIVE"

let initialState = {
    emptyNote: {
        id: "emptyNote",
        name: "",
        category: "",
        content: "",
        date: "",
        changedDate: "",
        isActive: true
    },
    "ddsf-dfsd-dfdf-sdfsd": {
        id: "ddsf-dfsd-dfdf-sdfsd",
        name: "Shopping list",
        category: "Random",
        content: "buy this and that",
        date: new Date(),
        changedDate: "",
        isActive: true
    }
}


export let noteItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_NOTE: {
            let stateCopy = {...state}
            stateCopy.emptyNote.id = action.key
            stateCopy.emptyNote.date = action.date
            stateCopy[action.key] = {...stateCopy.emptyNote}
            return stateCopy
        }
        case DELETE_NOTE: {
            let stateCopy = {...state}
            delete stateCopy[action.key]
            return stateCopy
        }
        case ADD_TO_ARCHIVE: {
            let stateCopy = {...state}
            stateCopy[action.key].isActive=!stateCopy[action.key].isActive
            return stateCopy
        }
        case SHOW_EDITOR:
            return {...state, isEditorActive: true}
        case SAVE_CHANGES:
            return {...state, isEditorActive: false}
        case SHOW_NEW_ITEM_EDITOR:
            return {...state, isEditorActive: true}
        case CHANGE_NAME: {
            let stateCopy = {...state}
            stateCopy[action.key].name = action.payload
            return stateCopy
        }
        case CHANGE_CONTENT: {
            let stateCopy = {...state}
            stateCopy[action.key].content = action.payload
            return stateCopy
        }
        case CHANGE_DATE: {
            let stateCopy = {...state}
            stateCopy[action.key].changedDate
                ? stateCopy[action.key].changedDate[1]=action.payload
                : stateCopy[action.key].changedDate = [action.payload]
            return stateCopy
        }
        case CHANGE_CATEGORY:
            let stateCopy = {...state}
            stateCopy[action.key].category = action.payload
            return stateCopy
        case CLEAR_DATA:
            return {
                ...state, emptyNote: {
                    id: "emptyNote",
                    name: "",
                    category: "",
                    content: "",
                    date: "",
                    changedDate: "",
                    isActive: true
                }
            }
        default :
            return state
    }
}


export const showNewItemEditor = () => ({type: SHOW_NEW_ITEM_EDITOR})

export const saveChanges = () => ({type: SAVE_CHANGES})

export const changeCategory = (payload, key) => ({type: CHANGE_CATEGORY, payload, key})

export const changeName = (payload, key) => ({type: CHANGE_NAME, payload, key})

export const changeContent = (payload, key) => ({type: CHANGE_CONTENT, payload, key})

export const changeDate = (payload, key) => ({type: CHANGE_DATE, payload, key})

export const clearData = () => ({type: CLEAR_DATA})

export const addNewNoteToState = (date, key) => ({type: ADD_NEW_NOTE, date, key})

export const deleteNote = (key) => ({type: DELETE_NOTE, key})

export const toArchiveHandler = (key) => ({type: ADD_TO_ARCHIVE, key})



export const addNewNote = (id, date) => (dispatch, getState) => {
    console.log("wdwdwddw")
    dispatch(addNewNoteToState(date, id))
    dispatch(clearData())
}









