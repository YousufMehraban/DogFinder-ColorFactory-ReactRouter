import React from "react";
import { Redirect, Switch, Route} from 'react-router-dom';
import DogsDetails from "./DogsDetails";
import DogsList from "./DogsList";


const DogRoutes = ({dogs})=>{
    return(
        <Switch>
            <Route path="/dogs/:name"> <DogsDetails dogs={dogs} /> </Route>
            <Route path="/dogs"> <DogsList dogs={dogs} /> </Route>
            <Route > <Redirect to='/dogs' /> </Route>
        </Switch>
    )
}

export default DogRoutes;
