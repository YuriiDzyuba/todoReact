import React from 'react';
import DatePicker from "react-datepicker";
import "./react-datepicker.scss";
import {useDispatch, useSelector} from "react-redux";
import uuid from 'react-uuid'
import {
    addNewNote,
    changeCategory,
    changeContent,
    changeDate,
    changeName,
} from "../redux/noteItemsReducer";

const EditNote = (props) => {

    console.log(props.itemKey,"props,itemKey")

    const chosenItem = useSelector(state => state.notes[props.itemKey])
    const settings = useSelector(state => state.settings)
    const dispatch = useDispatch()

    const saveNote = () => {
        props.setItemEditor()
        if (props.itemKey!=="emptyNote") {
        } else {
            dispatch(addNewNote(uuid(), new Date()))
        }
    }

    console.log(chosenItem, "notes")
    return (
        <div className="row editNote ">
            <div className="col-12 text-center">
                <h6>{props.itemKey==="emptyNote" ? "Create new note" : "Edit note"}</h6>
            </div>
            <div className="col-4">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Category :</span>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={chosenItem.category ? chosenItem.category : settings.availableCategory[0]}
                        onChange={(event) => (dispatch(changeCategory(event.target.value, props.itemKey )))}
                    >
                        {settings.availableCategory.map((e, i) => (
                            <option value={`${e}`} key={i}>{e}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="col-8">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Name</span>
                    <input type="text"
                           className="form-control"
                           placeholder=""
                           aria-describedby="basic-addon1"
                           value={chosenItem.name}
                           onChange={(event) => (dispatch(changeName(event.target.value, props.itemKey)))}
                    />
                </div>
            </div>
            <div className="col-4">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">{props.itemKey === "emptyNote" ? "end date" : "new end date"}</span>
                    <DatePicker style={{height: "60px"}}
                                selected={chosenItem.changedDate[chosenItem.changedDate.length-1]
                                    ? chosenItem.changedDate[chosenItem.changedDate.length-1]
                                    : new Date()}
                                onChange={(date) => dispatch(changeDate(date, props.itemKey))}
                    />
                </div>
            </div>
            <div className="col-8">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">content</span>
                    <textarea type="text"
                              className="form-control"
                              placeholder=""
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              value={chosenItem.content}
                              onChange={(event) => (dispatch(changeContent(event.target.value, props.itemKey)))}

                    />
                </div>
            </div>
            <div className="col-12 d-grid justify-content-center mt-2">
                <button
                    type="button"
                    className="btn btn-secondary"
                    disabled={!chosenItem.content || !chosenItem.name || !chosenItem.category}
                    onClick={saveNote}
                >Save Note
                </button>
            </div>
        </div>
    );
};

export default EditNote;
