import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'

const NavBar = ({dogs}) =>{

    return(
        <div>
        <NavLink exact to='/dogs' > Home </NavLink>
        {dogs.map(dog =>{
            return(
            <NavLink to={`/dogs/${dog.name.toLowerCase()}`}  key={dog.name} > {dog.name} </NavLink>
            )
        })}
        </div>
    )
}

export default NavBar;
