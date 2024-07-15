import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SubNavbar from '../SubNavbar/SubNavbar';
import SubPageHead from '../SubPageHead/SubPageHead';
import SubContent from '../SubContent/SubContent';
import SubExamples from '../SubExamples/SubExamples';
import Footer from '../Footer/Footer';
import { tab_title } from '../../assets';
import './SubPage.css';

function SubPage() {
  const { productId } = useParams();
  const pageTitle = tab_title[productId];
  const favicon = '/../../assets/favicon.png'

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>
      <SubNavbar />
      <SubPageHead />
      <SubContent productId={productId} />
      <SubExamples />
      <Footer />
    </>
  );
}

export default SubPage;