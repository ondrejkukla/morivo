import React from "react";
import "./Text.css";

function Text(props) {
    const textWeight = props.bold === 'true' ? "bold" : "";
    const textColor = props.color === 'white' ? "white" : "black";

    return (
        <p className={`text ${textWeight} ${textColor}`} >{props.content}</p>
    )
}

export default Text;