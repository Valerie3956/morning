import React, { useContext } from "react";
import { Link } from "react-router-dom"
import {JournalContext} from "./JournalContext"

export default function Journal(props) {

    const {handleChange, handleSubmit, formData} = useContext(JournalContext)


    return (
        <div className="main">
            <form onSubmit={handleSubmit} className = "journalForm">
                <input className = "date" type="date" name="date" value={formData.date} onChange={handleChange}></input>
                <textarea className = "textarea" type="textarea" name="entry" value={formData.entry} onChange={handleChange}></textarea>
                <button className = "button">Submit Journal Entry</button>
            </form>
            <Link to="/journal/entries" >
                <button className="button">  View past journal entries</button>
            </Link>
            <div className="navButtons">
                <Link to="/" >
                    <button className="button">Home</button>
                </Link>
                <Link to="/meditation" >
                    <button className="button">Meditate</button>
                </Link>
                <Link to="/checklist" >
                    <button className="button">Checklist</button>
                </Link>
            </div>
        </div>
    )
}