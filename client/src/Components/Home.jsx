import React, {useEffect, useState} from "react"
import axios from "axios"
import { Link } from 'react-router-dom'

export default function Footer(){

    const [quoteOfTheDay, setQuoteOfTheDay] = React.useState({
        q: '',
        a: "",
        h: ''
    }
        )
        
useEffect(() => {
    axios.get('https://request-forwarder.onrender.com?url=https://zenquotes.io/api/today', {
        contentType: "application/json"
    })
    .then(res => setQuoteOfTheDay(res.data[0]))
    .catch(err => console.log(err))
}, [])


console.log(quoteOfTheDay)
    return(
        <div className = "main">
            <div className = "quote">
            <h2>{quoteOfTheDay.q}</h2>
            <h3>{quoteOfTheDay.a}</h3>
            <p className = "zen">Inspirational quotes provided by <a href="https://zenquotes.io/" target="_blank">ZenQuotes API</a></p>
            </div>
            <div className = "navButtons">
            <Link to="journal" >
                <button className = "button">Journal</button>
                </Link>
                <Link to="meditation" >
                <button className = "button">Meditate</button>
                </Link>
                <Link to="checklist" >
                <button className = "button">Checklist</button>
                </Link>
            </div>
        </div>
    )
}