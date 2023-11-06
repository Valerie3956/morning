import React, { useState, useEffect } from "react"
import axios from "axios"


const JournalContext = React.createContext()

function JournalContextProvider(props) {

    const [journalEntries, setJournalEntries] = React.useState([])


    const init = {
        date: "",
        entry: ""
    }

    const [formData, setFormData] = React.useState(init)

    //JOURNAL FORM SUBMIT

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        axios.post("/morning/journal", formData)
            .then(res => setJournalEntries(prevEntries => [...prevEntries, formData]))
            .catch(err => console.log(err.res.data.errMsg))
        // setJournalEntries(prevEntries => [...prevEntries, formData])
        setFormData(init)
        // POST REQUEST TO DB
    }

useEffect(() => {

    // GET REQUEST FROM DB
    axios.get("/morning/journal")
    .then(res => {setJournalEntries(res.data)})
    .catch(err => console.log(err.response.data.errMsg))
}, [])











    return (
        <JournalContext.Provider
            value={{
                journalEntries,
                handleChange,
                handleSubmit,
                formData
            }}
        >
            {props.children}
        </JournalContext.Provider>
    )
}

export { JournalContext, JournalContextProvider }