import React from "react";
import Title from "../Title/Title";
import Example from "../Example/Example";
import Feedback from "../Feedback/Feedback";
import {
bushcraft, ozdob_dort_small, fitmeal, mlsne_kornoutky, mlsne_kornoutky_small, nandej, pure_rituals, miner, medarek, ozdob_dort, natu, beauty_manifesto, miband, vinisto
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
                    <div className="project-2"> <Example img={fitmeal} link="https://drive.google.com/file/d/1l0ieasRgOHpFlpjCOknmmIx3z7R9grEK/view?usp=drive_link" /></div>
                    <div className="project-3"> <Example img={mlsne_kornoutky} link="https://drive.google.com/file/d/1XuhIFIrE7CrZwWE8XVaPq_AOwp3ux4S2/view?usp=sharing" /></div>
                    <div className="project-3-small"> <Example img={mlsne_kornoutky_small} link="https://drive.google.com/file/d/1XuhIFIrE7CrZwWE8XVaPq_AOwp3ux4S2/view?usp=sharing" /></div>
                    <div className="project-4"> <Example img={nandej} link="https://drive.google.com/file/d/1U9ItQqjGYBblOUDXC-r2iT5A7oYxl5xH/view?usp=drive_link" /></div>
                    <div className="feedback-5"> <Feedback text={feedback2} signature={sign2} center="true" /></div>
                    <div className="project-6"> <Example img={pure_rituals} link="https://drive.google.com/file/d/1jeVz7J1MJN3Q29voRb8pm7G8HFyRspY6/view?usp=drive_link" /></div>
                    <div className="project-7"> <Example img={vinisto} link="https://drive.google.com/file/d/1b8fdVEgriXoR3PWUAXB5HEwc7URnt4rG/view?usp=drive_link" /></div>
                    <div className="feedback-8"> <Feedback text={feedback3} signature={sign3} center="true" /></div>
                    <div className="project-9"> <Example img={miner} link="https://drive.google.com/file/d/17Vy3-PmWOq_ca06D3D93jshVLvfY0LO8/view?usp=drive_link" /></div>
                    <div className="project-10"> <Example img={natu} link="https://drive.google.com/file/d/1F55i0B-WgeFIGzNYBh3u28OoYu0OhCp0/view?usp=drive_link" /></div>
                    <div className="project-10-small"> <Example img={beauty_manifesto} link="https://drive.google.com/file/d/1BaYZyR73rVD672z9D_kTDX5kaPu2MwCq/view?usp=drive_link" /></div>
                    <div className="project-11"> <Example img={medarek} link="https://drive.google.com/file/d/10_2cYLPqDICly7EQWcTLfXLYKe4MplhQ/view?usp=drive_link" /></div>
                    <div className="feedback-18"> <Feedback text={feedback4} signature={sign4} center="false" /></div>
                    <div className="feedback-19"> <Feedback text={feedback5} signature={sign5} center="false" /></div>
                    <div className="feedback-20"> <Feedback text={"Parťáci, ne jen dodavatel. Mluvíme na rovinu, sliby plníme i s extra nápady. Nevíme? Ptáme se. Něco se pokazí? Přiznáme chybu a řešíme. Proto s námi partneři spolupracují dlouhodobě."} signature={"Vojtěch Moric - Kapitán kreativního týmu morivo"} center="false" /></div>
                    <div className="project-12"> <Example img={miband} link="https://drive.google.com/file/d/18IUMuQWZ3PLmexOAKFCTv10bDkcTnSva/view?usp=drive_link" /></div>
                    <div className="project-14"> <Example img={ozdob_dort} link="https://drive.google.com/file/d/1jhks_3WGVgpthHoxIHgaouw0qAGvQIJb/view?usp=drive_link" /></div>
                    <div className="project-14-small"> <Example img={ozdob_dort_small} link="https://drive.google.com/file/d/1jhks_3WGVgpthHoxIHgaouw0qAGvQIJb/view?usp=drive_link" /></div>
                    <div className="project-15"> <Example img={bushcraft} link="https://drive.google.com/file/d/1nMa2vrpA--NI6kaA_SEGOTNgRo4UgBhN/view?usp=drive_link" /></div>
                </div>
            </div>
        </projects>
    );
}

export default Projects;