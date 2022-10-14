import React from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import { colors } from "./ColorList";

const Colors = () =>{
    const {name} = useParams()
    if (!colors.includes(name)) return <Redirect to='/colors' ></Redirect>
    window.document.body.style.backgroundColor = name

    return(
        <div>
            <h1>It is {name}! Isn't it beautifull!</h1>
            <Link to='/colors'>Go Back</Link>
        </div>
    )
}
export default Colors;
