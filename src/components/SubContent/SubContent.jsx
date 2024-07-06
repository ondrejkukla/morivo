import React from 'react';
import Button from '../Button/Button';
import BusinessCard from "../BusinessCard/BusinessCard.jsx";
import './SubContent.css';

function SubContent() {
  return (
    <subcontent>
        <div className='subcontent-container'>
            <div className='subcontent-modal'>
                <iframe src="https://drive.google.com/file/u/0/d/1T-039Hetoe7cZD17huWKkGjfyjVNjDHS/view" frameborder="0"></iframe>
            </div>
            <div className="subcontent-button">
                <Button type="header" text="Vrátit se na hlavní stránku" link="/" />
            </div>
            <div className="subcontent-businessCard">
                <BusinessCard/>
            </div>
        </div>
    </subcontent>
  );
}

export default SubContent;