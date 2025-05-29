import React from "react";
import "./Title.css";

function Title(props) {
     
    const titleClass = props.color === 'white' ? 'title-white' : 'title-black';

    return (
         
        <h1 className= { titleClass }>{props.name}</h1>
    )
}

export default Title;