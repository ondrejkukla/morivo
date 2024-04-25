import React from "react";
import "./Badge.css";

function Badge(props) {

    const bgColor = props.bg === "white" ? "badge white" : "badge color";

    return (
        <button className= { bgColor } >
            { props.text }
        </button>
    );
}

export default Badge;