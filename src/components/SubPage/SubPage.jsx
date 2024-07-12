import React from 'react';
import SubNavbar from '../SubNavbar/SubNavbar';
import SubPageHead from '../SubPageHead/SubPageHead';
import SubContent from '../SubContent/SubContent';
import SubExamples from '../SubExamples/SubExamples';
import './SubPage.css';


function SubPage() {
  return (
    <subpage>
      <SubNavbar />
      <SubPageHead />
      <SubContent />
      <SubExamples />
    </subpage>
  );
}

export default SubPage;