import React from "react";
import Subtitle from "../Subtitle/Subtitle";
import Badge from "../Badge/Badge";
import "./About.css";

function About() {
    return (
        <about>
            <div className="container">
            <iframe
                    src="https://www.youtube.com/embed/FEpKUCXNSVo"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                <Subtitle text="Tvorba reklamních kampaní od nápadu po realizaci" color="black" />
                <div className="badges">
                    <Badge text="Kreativní výkonnostní kampaně" />
                    <Badge text="Bannery" />
                    <Badge text="PPC sady" />
                    <Badge text="Kreativní koncepty" />
                    <Badge text="Animace" />
                    <Badge text="UX/UI vč. měření" />
                    <Badge text="Loga a vizuální identity" />
                    <Badge text="Webdesign" />
                    <Badge text="Design tiskovin" />
                    <Badge text="Vizuální a komunikační strategie" />
                    <Badge text="Brandmanuály" />
                    <Badge text="Kreativní copywriting" />
                    <Badge text="Scénáře pro videa" />
                    <Badge text="Tvorba Content/Media plánu" />
                    <Badge text="Produktové REELS" />
                    <Badge text="Střih videí" />
                    <Badge text="UGC reklamy" />
                </div>
            </div>
        </about>
    );
}

export default About;