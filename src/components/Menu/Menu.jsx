import React from "react";
import { useRef } from "react";
import { menu } from "../../assets/header/index.js";
import "./Menu.css";

function Menu() {
    const menuRef = useRef();

    const showDropdown = () => {
        menuRef.current.slassList.toggle("responsive_menu")
    };

    return (
        <div>
            <button onClick={showDropdown}>
                <img className="menu-icon" src={menu} alt="Menu" />
            </button>
            <div className="menu" ref={menuRef}>
                <div className="dropdown">
                    <div className="icons">
                        <button className="close-icon" onClick={showDropdown}>x</button>
                        <a className="dropdown-item">
                            <span>Práce</span>
                            <span>sipka</span>
                        </a>
                        <a className="dropdown-item">
                            <span>Práce</span>
                            <span>sipka</span>
                        </a>
                        <a className="dropdown-item">
                            <span>Práce</span>
                            <span>sipka</span>
                        </a>
                        <a className="dropdown-item">
                            <span>Práce</span>
                            <span>sipka</span>
                        </a>
                    </div>
                    <div className="dropdown-logo">
                        LOGO
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;