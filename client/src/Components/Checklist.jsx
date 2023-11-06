import React, { useContext, useState } from "react";
import ChecklistForm from "./ChecklistForm";
import { Link } from "react-router-dom"
import { ChecklistContext } from "./ChecklistContext"
import ChecklistItem from "./ChecklistItem";

export default function Checklist(props) {




    const { checklistItem, addItem, editItem, submit, editToggle, toggle } = useContext(ChecklistContext)

    const checklist = checklistItem.map(x => {
        return (
            <ChecklistItem
                item={x.item}
                id={x._id} />
        )
    }

    )

    return (
        <div className="main">
            <div className="checklistContainer">

                <div className="checklist">
                    {checklist}
                {editToggle &&  <ChecklistForm submit={addItem} style="button" />}
                </div>
                   {editToggle && <button className="button" onClick={() => toggle()}>Close</button>}
                
            {!editToggle && <button className="button" onClick={() => toggle()}>Edit List</button>}
            </div>
            <div className="navButtons">
                <Link to="/" >
                    <button className="button">Home</button>
                </Link>
                <Link to="/journal" >
                    <button className="button">Journal</button>
                </Link>
                <Link to="/meditation" >
                    <button className="button">Meditate</button>
                </Link>
            </div>
        </div>
    )
}