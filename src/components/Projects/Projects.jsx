import React from "react";
import Title from "../Title/Title";
import Example from "../Example/Example";
import Feedback from "../Feedback/Feedback";
import Button from "../Button/Button";
import {
    fit_meal, mlsne_kornoutky, mlsne_kornoutky_small, miner, medarek, alarm, inowatti, ozdob_dort, my_prom, dron, izzi, pekarstvi_makovec_small, natu, natu_small, prima_vent
} from "../../assets/projects";
import {
    feedback1, feedback2, feedback3, sign1, sign2, sign3
} from "../../assets/index";
import "./Projects.css";

function Projects() {
    return (
        <projects id="projects">
            <div className="container">
                <div className="projects-title">
                    <Title name="Na čem pracujeme?" color="black" />
                </div>
                <div className="grid-projects">
                    <div className="feedback-1"> <Feedback text={feedback1} signature={sign1} center="false" /></div>
                    <div className="project-2"> <Example img={fit_meal} /></div>
                    <div className="project-3"> <Example img={mlsne_kornoutky} /></div>
                    <div className="project-3-small"> <Example img={mlsne_kornoutky_small} /></div>
                    <div className="project-4"> <Example img={miner} /></div>
                    <div className="feedback-5"> <Feedback text={feedback2} signature={sign2} center="true" /></div>
                    <div className="project-6"> <Example img={medarek} /></div>
                    <div className="project-7"> <Example img={alarm} /></div>
                    <div className="feedback-8"> <Feedback text={feedback3} signature={sign3} center="true" /></div>
                    <div className="project-9"> <Example img={inowatti} /></div>
                    <div className="project-10"> <Example img={ozdob_dort} /></div>
                    <div className="project-10-small"> <Example img={pekarstvi_makovec_small} /></div>
                    <div className="project-11"> <Example img={my_prom} /></div>
                    <div className="project-12"> <Example img={dron} /></div>
                    <div className="project-13"> <Example img={izzi} /></div>
                    <div className="project-14"> <Example img={natu} /></div>
                    <div className="project-14-small"> <Example img={natu_small} /></div>
                    <div className="project-15"> <Example img={prima_vent} /></div>
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