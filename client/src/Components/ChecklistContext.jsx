import React, { useState, useEffect } from "react"
import axios from "axios"


const ChecklistContext = React.createContext()


function ChecklistContextProvider(props) {

    const [checklistItem, setChecklistItem] = React.useState([])

    // get checklist items
    useEffect(() => {
    axios.get("/morning/checklist")
    .then(res => setChecklistItem(res.data))
    .catch(err => err.response.data.errMsg)
}, [])

// console.log(checklistItem)
    //add item

    function addItem(newItem) {
        axios.post("/morning/checklist", newItem)
        .then(res => {

            setChecklistItem(prevItems => [...prevItems, res.data])
        })
        .catch(err => err.response.data.errMsg)
    }

    //edit checklist

//toggle to make the form appear to add an item to checklist as well as make edit and delete buttons appear at existing checklist items
    const [editToggle, setEditToggle] = useState(false)
    
    function toggle(){
        setEditToggle(prevToggle => !prevToggle)
    }


    function editItem(updatedItem, id) {
        console.log(updatedItem, id)
        // put checklist item
        axios.put(`/morning/checklist/${id}`, updatedItem)
        .then(res => {
            setChecklistItem(prevItems => prevItems.map(item => item._id !== id? item : res.data))
        })
        .catch(err => err.response.data.errMsg)
    }


    //delete function
    function deleteItem(id){
        console.log(id)
axios.delete(`/morning/checklist/${id}`)
.then(res => console.log(res))
.catch(err => err.response.data.errMsg)
setChecklistItem(prevList => prevList.filter(item => item._id !== id))
    }

    return (
        <ChecklistContext.Provider
            value={{
                checklistItem,
                addItem,
                editItem,
                editToggle,
                toggle,
                deleteItem
            }}

        >
            {props.children}
        </ChecklistContext.Provider>
    )
}

export { ChecklistContext, ChecklistContextProvider }