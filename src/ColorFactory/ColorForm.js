import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import './ColorForm.css'
import { colors } from "./ColorList";

const ColorForm = ()=>{
    const [color, setColor] = useState("white");
    const history = useHistory()

    const handleChange = (event) =>{
        setColor(event.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        colors.unshift(color)
        history.push('/colors')
    }
    return(
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Add Color: </legend>
                <div>
                    <label htmlFor="colorName" >Color Name: </label>
                    <input type='text' value={color} onChange={handleChange} id='colorName' />
                </div>
                <div>
                    <label htmlFor="colorPicker" >Color Picker: </label>
                    <input type='color' id='colorPicker' />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </fieldset>
        </form>
    )
}
export default ColorForm;
