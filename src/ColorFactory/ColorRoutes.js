import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Colors from "./Colors";
import ColorLists from "./ColorList";
import ColorForm from "./ColorForm";

function ColorRoutes (){
   
    return(
            <Switch>
                <Route exact path='/colors/new' > <ColorForm /> </Route>
                <Route path='/colors/:name' > <Colors /> </Route>
                <Route path='/colors' > <ColorLists /> </Route>
                <Route> <Redirect to='/colors' /> </Route>
            </Switch>
    )
}
export default ColorRoutes;
