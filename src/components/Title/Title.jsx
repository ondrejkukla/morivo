import React from "react";
import "./Title.css";

function Title(props) {
    // eslint-disable-next-line react/prop-types
    const titleClass = props.color === 'white' ? 'title-white' : 'title-black';

    return (
        // eslint-disable-next-line react/prop-types
        <h1 className= { titleClass }>{props.name}</h1>
    )
}

export default Title;