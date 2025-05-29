import React from "react";
import { Link } from 'react-router-dom';
import "./Button.css";
import $ from "jquery";

function Button(props) {

    $(document).ready(function () {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    });

    // eslint-disable-next-line react/prop-types
    switch (props.type) {
        case 'header':
            return (
                <button className="header" onClick={props.onClick}>
                    <a href={props.link} target="_blank" rel="noreferrer">{props.text} </a>
                </button>
            );
        case 'status':
            return (
                <button className="status" onClick={props.onClick}>
                    <a href={props.link} target="_blank" rel="noreferrer">{props.text} </a>
                </button>
            );
        case 'back':
            return (
                <button className="back" onClick={props.onClick}>
                    <a href={props.link}>{props.text} </a>
                </button>
            );
        case 'example':
            return (
                <Link to={props.link} />
            );

        default:
            return (
                <button className={props.type} onClick={props.onClick}>
                    <a href={props.link} target="_blank" rel="noreferrer">{props.text} </a>
                </button>
            );
    }
}

export default Button;