import React, {useContext} from "react"
import {ChecklistContext} from "./ChecklistContext"

export default function ChecklistForm(props){

    const {checklistItem} = useContext(ChecklistContext)

    const init = {
        item: props.item || "",
    }

    const [formData, setFormData] = React.useState(init)

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
        props.submit(formData, props._id)
        setFormData(init)
    }


    return(
        <form onSubmit = {handleSubmit}>
            <input className = "checklistInput" type = "text" name = "item" id = "item" value = {formData.item} onChange = {handleChange}></input>
            <button className = {props.style}>submit</button>
        </form>
    )
}