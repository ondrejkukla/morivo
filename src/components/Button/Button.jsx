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

    let type;
    let buttonContent

    // eslint-disable-next-line react/prop-types
    switch (props.type) {
        case 'header':
            buttonContent = (
                <button className="header" onClick={props.onClick}>
                    <a href={props.link} target="_blank" rel="noreferrer">{props.text} </a>
                </button>
            );
            break;
        case 'status':
            buttonContent = (
                <button className="status" onClick={props.onClick}>
                    <a href={props.link} target="_blank" rel="noreferrer">{props.text} </a>
                </button>
            );
            break;
        case 'back':
            buttonContent = (
                <button className="back" onClick={props.onClick}>
                    <a href={props.link}>{props.text} </a>
                </button>
            );
            break;
        case 'example':
            type = 'example';
            buttonContent = (
                <Link to={props.link} />
              );
            break;

        default:
            type = '';
    }

    return (
        // eslint-disable-next-line react/prop-types
        <button className={props.type} onClick={props.onClick}>
            <a href={props.link}>{props.text} </a>
        </button>
    )
}

export default Button;