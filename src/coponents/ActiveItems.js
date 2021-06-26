import React, {useState} from 'react';
import ToDoItem from "./ToDoItem";
import {useSelector} from "react-redux";
import EditNote from "./EditNote";

const ActiveItems = () => {
    const [itemEditor, setItemEditor] = useState(false)

    const activeNotes = useSelector(state => state.notes)
    return (
        <>
            {Object.values(activeNotes).map((e,i)=>e.id!=="emptyNote" ?  <ToDoItem key={i} content={e}/> : null)}

            {itemEditor && <EditNote setItemEditor={setItemEditor} itemKey="emptyNote"/> }

            <div className="row justify-content-end g-1">
                <div className="col-2 d-grid justify-content-end mt-2">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        name="addNewNote"
                        onClick={() => setItemEditor(prevState => !prevState)}
                    >{itemEditor ?"cancel" : "Create Note"}
                    </button>
                </div>
            </div>
        </>
    );
};

export default ActiveItems;
