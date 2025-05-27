import React from "react";
import Button from "../Button/Button";
import Title from "../Title/Title";
import Identity from "../Identity/Identity";
import "./Hero.css";

function Hero() {
    return (
        <hero>
            <div className="container">
                <div className="left">
                    <Button type="status" text="● Nyní k dispozici" />
                    <Title name={<>Reklamní kampaně od nápadu...<br />...po realizaci</>} color="white" />
                    <Button className="btn-main" type="header" text="Na čem pracujeme" link="#projects" />
                </div>
                <div className="identity">
                    <Identity />
                </div>
            </div>
        </hero>
    );
}

export default Hero;