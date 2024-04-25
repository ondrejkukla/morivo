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
                    <Title name="Tvoříme výkonnostní grafický design" color="white" />
                    <Button type="header" text="Na čem pracujeme" link="#projects" />
                </div>
                <div className="identity">
                    <Identity />
                </div>
            </div>
        </hero>
    );
}

export default Hero;