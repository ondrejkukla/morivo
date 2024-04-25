import React from "react";
import "./Feedback.css";

function Feedback(props) {
    const containerClass = props.center === "true" ? "container-feedback center" : "container-feedback";

    return (
        <div className={containerClass}  >
            <p className="text">{props.text}</p>
            <p className="signature">{props.signature}</p>
        </div>
    );
}

export default Feedback;