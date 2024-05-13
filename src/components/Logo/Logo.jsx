import React from "react";
import { morivo } from "../../assets/header/";
import "./Logo.css"

function Header() {
  return (
    <div className="logo-container">
      <img className="logo" src={morivo} alt="morivo" width={216} height={64}/>
    </div>
  );
}

export default Header;
