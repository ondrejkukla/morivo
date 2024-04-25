import React from "react";
import Button from "../Button/Button";
import "./Example.css";

function Example(props) {
    return (
        // eslint-disable-next-line react/prop-types
        <div className="colab" style={{ backgroundImage: `url(${props.img})` }}>
            <Button type="example" text="Zobrazit projekt" />
        </div>
    );
}

export default Example;