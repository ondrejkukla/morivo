import React from "react";
import Title from "../Title/Title";
import Example from "../Example/Example";
import Feedback from "../Feedback/Feedback";
import Button from "../Button/Button";
import {
    alarm, dron, eliterails, frankies, luno_yoga, mlsne_kornoutky, morivo, natu, pekarstvi_makovec, plysak
} from "../../assets/projects";
import {
    feedback1, feedback2, feedback3, sign1, sign2, sign3
} from "../../assets/index";
import "./Projects.css";

function Projects() {
    return (
        <projects id="projects">
            <div className="container">
                <Title name="Na čem pracujeme?" color="black" />
                <div className="grid-projects">
                    <div className="project-1"> <Feedback text={feedback1} signature={sign1} center="false" /></div>
                    <div> <Example img={natu} /></div>
                    <div className="project-3"> <Example img={mlsne_kornoutky} /></div>
                    <div> <Example img={alarm} /></div>
                    <div className="project-5"> <Feedback text={feedback2} signature={sign2} center="true" /></div>
                    <div> <Example img={dron} /></div>
                    <div> <Example img={morivo} /></div>
                    <div> <Feedback text={feedback3} signature={sign3} center="true" /></div>
                    <div> <Example img={luno_yoga} /></div>
                    <div className="project-7"> <Example img={pekarstvi_makovec} /></div>
                    <div> <Example img={frankies} /></div>
                    <div> <Example img={plysak} /></div>
                    <div> <Example img={eliterails} /></div>
                </div>
                <Button
                    type="header"
                    text="Zobrazit další ukázky práce"
                    link="https://drive.google.com/drive/folders/1OHynRxrJV4PuGRuVawfruW6jx1ZsF58Z" />
            </div>
        </projects>
    );
}

export default Projects;