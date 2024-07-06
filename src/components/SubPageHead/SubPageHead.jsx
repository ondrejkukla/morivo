import React from 'react';
import { Link } from 'react-router-dom';
import './SubPageHead.css';

function SubPageHead() {
  return (
    <subhead>
        <div className='subpage-head'>
            <Link className='link-subpage' to="/">← Vrátit se na hlavní stránku</Link>
        </div>
    </subhead>
  );
}

export default SubPageHead;