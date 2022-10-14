import React from "react";
import { NavLink } from "react-router-dom";


function ColorNavBar(){

    return(
        <div>
            <NavLink exact to="/colors/new" ></NavLink>
            <NavLink exact to="/colors/:name" ></NavLink>
            <NavLink exact to="/colors"></NavLink>
        </div>
    )
}
export default ColorNavBar;
