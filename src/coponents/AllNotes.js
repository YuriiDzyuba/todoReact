import React from 'react';
import {useSelector} from "react-redux";
import CategoryItem from "./CategoryItem";
import AllNotesHeader from "./AllNotesHeader";

const AllNotes = (props) => {
    const notes = useSelector(state => state.notes)

    const allCategories = {}


    Object.values(notes).forEach((e,i)=>{
        if (e.category ){
        if (allCategories[e.category]){
            e.isActive
                ? allCategories[e.category].active=allCategories[e.category].active+1
                : allCategories[e.category].archived=allCategories[e.category].archived+1
        } else {
            allCategories[e.category]={active: 0, archived: 0}
            e.isActive
                ? allCategories[e.category].active=1
                : allCategories[e.category].archived=1
        }
        }
    })
    let catItems = []

    for (let key in allCategories){
        catItems.push(<CategoryItem
            key={catItems.length}
            category={key}
            activeNote={allCategories[key].active}
            archivedNote={allCategories[key].archived}
        />)
    }


    return (
        <>
            <AllNotesHeader/>
            {catItems}
            {props.children}
        </>
    )
};

export default AllNotes;
