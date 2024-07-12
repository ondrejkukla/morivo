import React from 'react';
import SubNavbar from '../SubNavbar/SubNavbar';
import SubPageHead from '../SubPageHead/SubPageHead';
import SubContent from '../SubContent/SubContent';
import SubExamples from '../SubExamples/SubExamples';
import Footer from '../Footer/Footer';
import './SubPage.css';


function SubPage() {
  return (
    <>
      <SubNavbar />
      <SubPageHead />
      <SubContent />
      <SubExamples />
      <Footer />
    </>
  );
}

export default SubPage;