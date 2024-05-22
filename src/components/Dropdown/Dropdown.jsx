import React from 'react';
import './Dropdown.css'; // Create and import a CSS file for styling

function Menu() {
    return (
        <div className="menu">
            <div className="dropdown">
                <div className="icons">
                    <div className="close-icon">x</div>
                    <div className="dropdown-item">
                        <span>Práce</span>
                        <span>sipka</span>
                    </div>
                    <div className="dropdown-item">
                        <span>Práce</span>
                        <span>sipka</span>
                    </div>
                    <div className="dropdown-item">
                        <span>Práce</span>
                        <span>sipka</span>
                    </div>
                    <div className="dropdown-item">
                        <span>Práce</span>
                        <span>sipka</span>
                    </div>
                </div>
                <div className="dropdown-logo">
                    LOGO
                </div>
            </div>
        </div>
    );
}

export default Menu;