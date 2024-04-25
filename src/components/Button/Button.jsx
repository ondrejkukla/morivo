import React from "react";
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

    // eslint-disable-next-line react/prop-types
    switch (props.type) {
        case 'header':
            type = 'header';
            break;
        case 'status':
            type = 'status';
            break;
        case 'example':
            type = 'example';
            break;

        default:
            type = '';
    }

    return (
        // eslint-disable-next-line react/prop-types
        <button className={props.type}>
            <a href={props.link} target="_blank" rel="noreferrer">{props.text} </a>
        </button>
    )
}

export default Button;