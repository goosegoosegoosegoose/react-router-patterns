import React, { useState } from "react";
import { useHistory } from "react-router-dom"

const ColorForm = ({addColor}) => {
    const INITIAL_STATE = {
        color: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const history = useHistory();


    const handleChange = (e) => {
        const {value} = e.target;
        setFormData(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(formData);
        setFormData(INITIAL_STATE);
        history.push("/colors");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Color: </label>
            <input name="color" type="text" placeholder="color" onChange={handleChange}/><br/>
            <button type="submit">Add Color!</button>
        </form>
    )
}

export default ColorForm;