import React from 'react';
import Title from "../Title/Title";
import Example from '../Example/Example';
import {
    alarm, mlsne_kornoutky_small, fit_meal
} from "../../assets/projects";
import './SubExamples.css';

function SubExamples() {
  return (
    <subexamples id='projects'>
        <div className='container'>
            <div className='subexample-title'>
                <Title name={'Ukažte \nmi další práce'}></Title>
            </div>
            <div className='subexaples-grid'>
                <div className="subpage-example1"> <Example img={fit_meal} link="fitmeal" /></div>
                <div className="subpage-example2"> <Example img={alarm} link="alarm" /></div>
                <div className="subpage-example3"> <Example img={mlsne_kornoutky_small} link="mlsne_kornoutky" /></div>
            </div>
        </div>
    </subexamples>
  );
}

export default SubExamples;