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
    'ddsf-dfsd-dfdf-sdfsd': {
        id: 'ddsf-dfsd-dfdf-sdfsd',
        name: 'Shopping list',
        category: 'Random',
        content: 'buy this and that',
        date: new Date(),
        changedDate: '',
        isActive: true
    },
    'ebed726-8edf-04c0-3628-77578a3a4758': {
        id: 'ebed726-8edf-04c0-3628-77578a3a4758',
        name: 'Where does it come from?',
        category: 'Random',
        content: ' years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, cons',
        date: new Date(),
        changedDate: '',
        isActive: false
    },
    '163d38-3775-2024-5f0a-0e7ab02e51': {
        id: '163d38-3775-2024-5f0a-0e7ab02e51',
        name: 'Why do we use',
        category: 'task',
        content: 'e content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it loo',
        date: new Date(),
        changedDate: '',
        isActive: true
    },
    'acc1bb8-4f6a-0838-4ce-a71abbaf8347': {
        id: 'acc1bb8-4f6a-0838-4ce-a71abbaf8347',
        name: 'What is Lorem',
        category: 'task',
        content: '3 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of eth',
        date: new Date(),
        changedDate: '',
        isActive: false
    },
    '01dabc-2ddd-ae6e-484-e8b36840ca1': {
        id: '01dabc-2ddd-ae6e-484-e8b36840ca1',
        name: 'The standard Lorem Ipsum passag',
        category: 'idea',
        content: 'ection 1.10.32 of "de Finibus Bonorum et',
        date: new Date(),
        changedDate: '',
        isActive: true
    },
    'cc82ea-1f03-50bc-68c-48cc60fba01a': {
        id: 'cc82ea-1f03-50bc-68c-48cc60fba01a',
        name: 'inibus Bonorum et',
        category: 'Quote',
        content: '1914 translation by H. Rackham',
        date: new Date(),
        changedDate: '',
        isActive: false
    },
    '8de7e82-12d6-db03-82c-45f3c0707b': {
        id: '8de7e82-12d6-db03-82c-45f3c0707b',
        name: 't Malorum", written by Cicero in 45 BC',
        category: 'idea',
        content: 't Malorum", written by Cicero in 45 BCt Malorum", written by Cicero in 45 BC',
        date: new Date(),
        changedDate: '',
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


export const changeCategory = (payload, key) => ({type: CHANGE_CATEGORY, payload, key})

export const changeName = (payload, key) => ({type: CHANGE_NAME, payload, key})

export const changeContent = (payload, key) => ({type: CHANGE_CONTENT, payload, key})

export const changeDate = (payload, key) => ({type: CHANGE_DATE, payload, key})

export const clearData = () => ({type: CLEAR_DATA})

export const addNewNoteToState = (date, key) => ({type: ADD_NEW_NOTE, date, key})

export const deleteNote = (key) => ({type: DELETE_NOTE, key})

export const toArchiveHandler = (key) => ({type: ADD_TO_ARCHIVE, key})


export const addNewNote = (id, date) => (dispatch) => {
    dispatch(addNewNoteToState(date, id))
    dispatch(clearData())
}









