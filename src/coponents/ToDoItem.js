import React, {useState} from 'react';
import archiveIcon from "../img/icons/download.svg";
import trashIcon from "../img/icons/trash.svg";
import edit from "../img/icons/edit.svg";
import idea from "../img/icons/bell.svg";
import Quote from "../img/icons/feather.svg";
import Random from "../img/icons/droplet.svg";
import task from "../img/icons/code.svg";
import EditNote from "./EditNote";
import {useDispatch} from "react-redux";
import {deleteNote} from "../redux/noteItemsReducer";


const ToDoItem = ({content}) => {

    const [ItemEditor, setItemEditor] = useState(false)
    const dispatch = useDispatch()

    const getCategoryImage = (categoryType) => {
        switch (categoryType) {
            case "idea":
                return idea;
            case "Quote":
                return Quote;
            case "Random":
                return Random;
            case "task":
                return task;
            default:
                return null
        }
    }

    const getDate = (date) => {
        let datestring = date.toString().split(" ").filter((e, i) => i < 4)
        return (
            datestring
        )
    }

    return (
        <>
            <div className="row todoItem mt-2">
                <div className="col-2 todoItem__desc">
                <span>
                    <p><img className="todoItem__img" src={getCategoryImage(content.category)}/>{content.name}</p>
                </span>
                </div>
                <div className="col-2 todoItem__desc">
                    <p>{getDate( content.date)}</p>
                </div>
                <div className="col-2 todoItem__desc">
                    <p>{content.category}</p>
                </div>
                <div className="col-2 todoItem__desc">
                    <p>{content.content}</p>
                </div>
                <div className="col-2 todoItem__desc">
                    <p>{content.changedDate ? getDate(content.changedDate) : ""}</p>
                </div>
                <div className="col-2 text-end todoItem__buttonsBlock ">
                    <img src={edit}
                         onClick={()=>setItemEditor(prevState => !prevState)}
                    />
                    <img src={archiveIcon}

                    />
                    <img src={trashIcon}
                         onClick={()=>dispatch(deleteNote(content.id))}
                    />
                </div>
            </div>
            {ItemEditor && <EditNote setItemEditor={setItemEditor}  itemKey={content.id}/>}
        </>
    );
};

export default ToDoItem;
