import React, {useState} from 'react';
import ToDoItem from "./ToDoItem";
import {useSelector} from "react-redux";
import EditNote from "./EditNote";
import Header from "./Header";

const NoteItems = (props) => {
    const [itemEditor, setItemEditor] = useState(false)
    const notes = useSelector(state => state.notes)

    const noteItems = Object.values(notes).map((e,i)=>e.id!=="emptyNote" && e.isActive===props.isNotesActive
        ? <ToDoItem key={i} content={e}/>
        : null)

    console.log(noteItems,"noteItems")
    return (
        <>
            <Header isNotesActive={props.isNotesActive}/>
            {noteItems}
            {itemEditor && <EditNote setItemEditor={setItemEditor} itemKey="emptyNote"/>}
            {props.isNotesActive && <div className="row justify-content-end pb-2 pr-1">
                <div className="col-2 d-flex g-0 justify-content-end mt-2">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        name="addNewNote"
                        onClick={() => setItemEditor(prevState => !prevState)}
                    >{itemEditor ? "cancel" : "Create Note"}
                    </button>
                </div>
            </div>}
        </>
    );
};

export default NoteItems;
