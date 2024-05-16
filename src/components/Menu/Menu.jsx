import React, {useState} from "react";
import {menu} from "../../assets/header/index.js";
import "./Menu.css";

function Menu() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div>
            <button className="hamburger" onClick={toggleMenu}>
            <img src={menu} alt="Menu" />
            </button>
            {isMenuOpen && <Menu />}
        </div>
    );
}

export default Menu;