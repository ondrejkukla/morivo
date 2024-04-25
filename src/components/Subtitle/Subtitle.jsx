import React from "react";
import "./Subtitle.css";

function Subtitle(props) {
    // eslint-disable-next-line react/prop-types
    const titleClass = props.color === 'white' ? 'subtitle-white' : 'subtitle-black';

    return (
        // eslint-disable-next-line react/prop-types
        <h2 className= { titleClass }>{props.text}</h2>
    )
}

export default Subtitle;