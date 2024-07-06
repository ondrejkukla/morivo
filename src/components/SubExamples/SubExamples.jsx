import React from 'react';
import Title from "../Title/Title";
import Example from '../Example/Example';
import {
    alarm, mlsne_kornoutky_small, pekarstvi_makovec_small
} from "../../assets/projects";
import './SubExamples.css';

function SubExamples() {
  return (
    <subexamples>
        <div className='container'>
            <div className='subexample-title'>
                <Title name={'Ukažte \nmi další práce'}></Title>
            </div>
            <div className='subexaples-grid'>
                <div className="subpage-example1"> <Example img={pekarstvi_makovec_small} /></div>
                <div className="subpage-example2"> <Example img={alarm} /></div>
                <div className="subpage-example3"> <Example img={mlsne_kornoutky_small} /></div>
            </div>
        </div>
    </subexamples>
  );
}

export default SubExamples;