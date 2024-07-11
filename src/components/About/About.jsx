import React from "react";
import Subtitle from "../Subtitle/Subtitle";
import Badge from "../Badge/Badge";
import "./About.css";

function About() {
    return (
        <about>
            <div className="container">
                <Subtitle text="Bannery, vizuální identity, webdesign a další" color="black" />
                <iframe
                    src="https://www.youtube.com/embed/FEpKUCXNSVo"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <div className="badges">
                    <Badge text="Vizuální identity" />
                    <Badge text="Bannery" />
                    <Badge text="PPC sady" />
                    <Badge text="Loga" />
                    <Badge text="Webdesign" />
                    <Badge text="Design tiskovin" />
                    <Badge text="Ikony" />
                    <Badge text="Vizuální strategie" />
                    <Badge text="Brandmanuály" />
                    <Badge text="Mobilní aplikace" />
                    <Badge text="Animace" />
                    <Badge text="Sociální sítě" />
                </div>
            </div>
        </about>
    );
}

export default About;