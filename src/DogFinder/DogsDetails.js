import React from "react";
import { useParams, NavLink, Redirect } from "react-router-dom";
import './DogsDetails.css'

const DogsDetails = ({dogs}) =>{
    const {name} = useParams();
    const dog = dogs.find((val, indx, arr) => val.name.toLowerCase() == name );
    if (!dog) return <Redirect to="/dogs" />
    return(
        <div>
            <h1>{dog.name}</h1>
            <h4>{dog.name} is {dog.age} years old.</h4>
            <ul>
                {(dog.facts).map((fact, indx) => {
                    return <li key={indx}>{fact}</li>
                    }
                )}
            </ul>
            <img src={dog.src}/>
            <div>
            <NavLink to='/dogs'> Go Back </NavLink>

            </div>
        </div>
    )
}
export default DogsDetails;
