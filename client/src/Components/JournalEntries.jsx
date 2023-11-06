import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { JournalContext } from "./JournalContext"

export default function JournalEntries(props) {

  const { journalEntries } = useContext(JournalContext)

  const journal = journalEntries.map(entry => {
    return (
      <div key = {entry.date}>
        {/* change key to _id once connected to backend */}
        <h4>{entry.date}</h4>
        <p>{entry.entry}</p>
      </div>
    )
  })


  return (
    <div className="main">
      <div className="journal">
        {journal}
      </div>
      <Link to="/Journal" >
        <button className="button">Add New Journal Entry</button>
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