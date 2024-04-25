import React from "react";
import "./Link.css";
import $ from 'jquery';

function Link(props) {

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

    return (
        // eslint-disable-next-line react/prop-types
        <a href={props.link} className="nav-link"> {props.text} </a>
    )
}

export default Link;