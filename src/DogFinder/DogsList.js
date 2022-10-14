import React from "react";
import { NavLink } from "react-router-dom";

const DogsList = ({dogs}) => {
    return(
        dogs.map((dog) => (
            <NavLink to={`/dogs/${dog.name.toLowerCase()}`} key={dog.name}>
                <img src={dog.src} 
                alt="dog picture" 
                width='200px'
                height='200px'
                />
            </NavLink>
            )
        )
    )
}
export default DogsList;

