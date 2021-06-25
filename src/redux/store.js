import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {noteItemsReducer} from "./noteItemsReducer";

let rootReducer = combineReducers({
   notes: noteItemsReducer
});

export let store = createStore(rootReducer, composeWithDevTools())

