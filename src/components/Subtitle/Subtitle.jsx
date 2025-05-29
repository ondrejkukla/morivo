import React from "react";
import "./Subtitle.css";

function Subtitle(props) {
     
    const titleClass = props.color === 'white' ? 'subtitle-white' : 'subtitle-black';

    return (
         
        <h2 className= { titleClass }>{props.text}</h2>
    )
}

export default Subtitle;