import React, {useState} from 'react';
import archiveIcon from "../img/icons/download.svg";
import unArchive from "../img/icons/upload.svg";
import trashIcon from "../img/icons/trash.svg";
import edit from "../img/icons/edit.svg";
import EditNote from "./EditNote";
import {useDispatch} from "react-redux";
import {deleteNote, toArchiveHandler} from "../redux/noteItemsReducer";
import {getCategoryImage} from "../getCategoryImage";


const ToDoItem = ({content}) => {

    const [ItemEditor, setItemEditor] = useState(false)
    const dispatch = useDispatch()


    const getNewDate = (dateArr) => dateArr.map((e,i)=>` ${e.getDate()}/${e.getMonth()+1}/${e.getFullYear()} ` )



    return (
        <>
            <div className="row todoItem mt-2">
                <div className="col-2 todoItem__desc">
                <span>
                    <p><img alt="" className="todoItem__img" src={getCategoryImage(content.category)}/>{content.name}</p>
                </span>
                </div>
                <div className="col-2 todoItem__desc">
                    <p>{content.date.getDate()} {content.date.getMonth()+1} {content.date.getFullYear()}</p>
                </div>
                <div className="col-2 todoItem__desc">
                    <p>{content.category}</p>
                </div>
                <div className="col-2 todoItem__desc">
                    <p>{content.content}</p>
                </div>
                <div className="col-2 todoItem__desc">
                    <p>{content.changedDate ? getNewDate(content.changedDate) : ""}</p>
                </div>
                <div className="col-2 text-end todoItem__buttonsBlock ">
                    { content.isActive && <img alt="" src={edit}
                          onClick={() => setItemEditor(prevState => !prevState)}
                    />}
                    <img alt="" src={content.isActive ? archiveIcon : unArchive}
                         onClick={()=>dispatch(toArchiveHandler(content.id))}
                    />
                    <img alt="" src={trashIcon}
                         onClick={()=>dispatch(deleteNote(content.id))}
                    />
                </div>
            </div>
            {ItemEditor && <EditNote setItemEditor={setItemEditor}  itemKey={content.id}/>}
        </>
    );
};

export default ToDoItem;
