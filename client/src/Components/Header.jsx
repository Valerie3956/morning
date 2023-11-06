import React from "react"
import { Link } from "react-router-dom"

export default function Header(){
    return(
<div className = "header">

        <ul className = "nav">
        <Link to="/" className = "link">
                    <li className = "navItems">Home</li>
                </Link>
                <Link to="journal" className = "link">
                    <li className = "navItems">Journal</li>
                </Link>
                <Link to="meditation" className = "link">
                    <li className = "navItems">Meditation</li>
                </Link>
                <Link to="checklist" className = "link">
                    <li className = "navItems">Checklist</li>
                </Link>
        </ul>
</div>

    )
}