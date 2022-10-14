import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import './ColorList.css'
const colors = ['red', 'yellow', 'orange', 'tomato']

const ColorLists = () =>{
    const [color, setColor] = useState('white');
    window.document.body.style.backgroundColor = color
    const handleChange = (event) =>{
        setColor(event.target.value)
    }
    return(
        <div>
            <div style={{backgroundColor: 'gray', padding: '20px'}} >
                <h1> Welcome to Color Factory!</h1>
                <NavLink to='/colors/new'> Add a New Color</NavLink>
            </div>
            <div className="NavLinkBar" >
                {colors.map((color, indx) => <NavLink to={`/colors/${color}`} key={indx} > {color} </NavLink>)}
            </div>
            <h3>Or pick a color from the below color picker box</h3>
            <label htmlFor="colorPicker" >Color Picker: </label>
            <input type='color' value={color} onChange={handleChange} id='colorPicker' />
        </div>
    )
}
export default ColorLists;
export {colors};
