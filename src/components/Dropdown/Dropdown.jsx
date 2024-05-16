import React from 'react';
import './Dropdown.css'; // Create and import a CSS file for styling

function Menu() {
    return (
        <div className="menu">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}

export default Menu;