import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"

export default function Meditation(){

const [time, setTime] = React.useState(300)
const [isTimeRunning, setIsTimeRunning] = React.useState(false)
const [meditationDone, setMeditationDone] = React.useState(false)

const counter = {
    minutes: Math.floor((time / 60) % 60),
        seconds: String(Math.floor((time) % 60)).padStart(2, '0')
}

function startMeditation(){
    setIsTimeRunning(true)
}

function decrementTime(){
    setTime(prevTime => prevTime - 1)
}

useEffect(() => {
    if(isTimeRunning && time !==0){
        setTimeout(decrementTime, 1000)
    } else if (time === 0){
        endMeditation()
    }
}, [isTimeRunning, time])

function endMeditation(){
setMeditationDone(true)
setIsTimeRunning(false)
setTime(300)
}

    return(

        <div className = "main">
            {meditationDone && <h1>Thank you for meditating this morning</h1>}
        <h1>{counter.minutes}:{counter.seconds}</h1>
        <button className = "meditationButton" onClick = {startMeditation}>Meditate</button>
        <div className = "navButtons">
                <Link to="/" >
                <button className = "button">Home</button>
                </Link>
            <Link to="/journal" >
                <button className = "button">Journal</button>
                </Link>
                <Link to="/checklist" >
                <button className = "button">Checklist</button>
                </Link>
            </div>
    </div>
        )
}