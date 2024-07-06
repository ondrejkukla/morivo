import React from 'react';
import { Link } from 'react-router-dom';
import SubPageHead from '../SubPageHead/SubPageHead';
import SubContent from '../SubContent/SubContent';
import SubExamples from '../SubExamples/SubExamples';
import './SubPage.css';


function SubPage() {
  return (
    <subpage>
        <SubPageHead />
        <SubContent />
        <SubExamples />
    </subpage>
  );
}

export default SubPage;