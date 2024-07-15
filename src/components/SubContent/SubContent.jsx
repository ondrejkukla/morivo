import React from 'react';
import { links } from '../../assets/index.js';
import Button from '../Button/Button';
import BusinessCard from "../BusinessCard/BusinessCard.jsx";
import './SubContent.css';


function SubContent({ productId }) {
    const productData = links[productId];
    return (
        <subcontent>
            <div className='subcontent-container'>
                <div className='subcontent-modal'>
                    <iframe src={productData} frameBorder="0"></iframe>
                </div>
                <div className="subcontent-button">
                    <Button type="header" text="Vrátit se na hlavní stránku" link="/" />
                </div>
                <div className="subcontent-businessCard">
                    <BusinessCard />
                </div>
            </div>
        </subcontent>
    );
}

export default SubContent;
