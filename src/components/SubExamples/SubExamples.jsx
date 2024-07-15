import React from 'react';
import { useParams } from 'react-router-dom';
import Title from "../Title/Title";
import Example from '../Example/Example';
import { tab_images, tab_links } from '../../assets';
import './SubExamples.css';



function getRandomValueFromObject(obj, excludeKeys) {
    const keys = Object.keys(obj);
    const filteredKeys = keys.filter(key => !excludeKeys.includes(key));
    const randomKey = filteredKeys[Math.floor(Math.random() * filteredKeys.length)];
    return obj[randomKey];
}

function SubExamples() {
    const { productId } = useParams();

    const link1 = getRandomValueFromObject(tab_links, [productId]);
    const link2 = getRandomValueFromObject(tab_links, [productId, link1]);
    const link3 = getRandomValueFromObject(tab_links, [productId, link1, link2]);

    const img1 = tab_images[link1];
    const img2 = tab_images[link2];
    const img3 = tab_images[link3];

    return (
        <subexamples id='projects'>
            <div className='container'>
                <div className='subexample-title'>
                    <Title name={'Ukažte \nmi další práce'}></Title>
                </div>
                <div className='subexaples-grid'>
                    <div className="subpage-example1"> <Example img={img1} link={tab_links[link1]} /></div>
                    <div className="subpage-example2"> <Example img= {img2} link={tab_links[link2]} /></div>
                    <div className="subpage-example3"> <Example img={img3} link={tab_links[link3]} /></div>
                </div>
            </div>
        </subexamples>
    );
}

export default SubExamples;