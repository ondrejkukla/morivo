import React from "react";
import Title from "../Title/Title";
import Example from "../Example/Example";
import Feedback from "../Feedback/Feedback";
import Button from "../Button/Button";
import {
    fitmeal, mlsne_kornoutky, mlsne_kornoutky_small, miner, medarek, alarm, inowatti, ozdob_dort, my_prom, dron, izzi, pekarstvi_makovec_small, natu, natu_small, primavent, beauty_manifesto, miband, vinisto
} from "../../assets/projects";
import {
    feedback1, feedback2, feedback3, feedback4, feedback5, sign1, sign2, sign3, sign4, sign5
} from "../../assets/index";
import "./Projects.css";

function Projects() {
    return (
        <projects id="projects">
            <div className="container">
                <div className="projects-title">
                    <Title name="Výřez z portfolia" color="black" />
                </div>
                <div className="grid-projects">
                    <div className="feedback-1"> <Feedback text={feedback1} signature={sign1} center="false" /></div>
                    <div className="project-2"> <Example img={fitmeal} link="fitmeal" /></div>
                    <div className="project-3"> <Example img={mlsne_kornoutky} link="mlsne_kornoutky" /></div>
                    <div className="project-3-small"> <Example img={mlsne_kornoutky_small} link="mlsne_kornoutky" /></div>
                    <div className="project-4"> <Example img={miner} link="miner" /></div>
                    <div className="feedback-5"> <Feedback text={feedback2} signature={sign2} center="true" /></div>
                    <div className="project-6"> <Example img={medarek} link="medarek" /></div>
                    <div className="project-7"> <Example img={alarm} link="alarm" /></div>
                    <div className="feedback-8"> <Feedback text={feedback3} signature={sign3} center="true" /></div>
                    <div className="project-9"> <Example img={inowatti} link="inowatti" /></div>
                    <div className="project-10"> <Example img={ozdob_dort} link="ozdob_dort" /></div>
                    <div className="project-10-small"> <Example img={pekarstvi_makovec_small} /></div>
                    <div className="project-11"> <Example img={my_prom} link="my_prom" /></div>
                    <div className="feedback-19"> <Feedback text={feedback4} signature={sign4} center="false" /></div>
                    <div className="feedback-20"> <Feedback text={feedback5} signature={sign5} center="false" /></div>
                    <div className="project-12"> <Example img={dron} link="dron" /></div>
                    <div className="project-13"> <Example img={izzi} link="izzy" /></div>
                    <div className="project-14"> <Example img={natu} link="natu" /></div>
                    <div className="project-14-small"> <Example img={natu_small} link="natu" /></div>
                    <div className="project-15"> <Example img={primavent} link="primavent" /></div>
                    <div className="project-16"> <Example img={beauty_manifesto} link="beauty_manifesto" /></div>
                    <div className="project-17"> <Example img={miband} link="miband" /></div>
                    <div className="project-18"> <Example img={vinisto} link="vinisto" /></div>
                </div>
                <Button
                    type="header"
                    text="Zobrazit další ukázky práce"
                    link="https://drive.google.com/drive/folders/1FCB01AQQoIMeopkk0WVTXFLAcJ6IZfuk" />
            </div>
        </projects>
    );
}

export default Projects;