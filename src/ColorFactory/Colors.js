import React from "react";
import { useParams, Link } from "react-router-dom";

const Colors = () =>{
    const {name} = useParams()
    window.document.body.style.backgroundColor = name

    return(
        <div>
            <h1>It is {name}! Isn't it beautifull!</h1>
            <Link to='/colors'>Go Back</Link>
        </div>
    )
}
export default Colors;
