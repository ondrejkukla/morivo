import React from 'react';
import { useParams } from 'react-router-dom';
import SubNavbar from '../SubNavbar/SubNavbar';
import SubPageHead from '../SubPageHead/SubPageHead';
import SubContent from '../SubContent/SubContent';
import SubExamples from '../SubExamples/SubExamples';
import Footer from '../Footer/Footer';
import { useScroll } from '../../hooks/scrollProvider';
import './SubPage.css';

function SubPage() {
  const { productId } = useParams();


  return (
    <>
      <SubNavbar />
      <SubPageHead />
      <SubContent productId={productId} />
      <SubExamples />
      <Footer />
    </>
  );
}

export default SubPage;