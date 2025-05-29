import React from 'react';
import Button from '../Button/Button';
import './Example.css';

function Example(props) {
  return (
    <div className="colab" style={{ backgroundImage: `url(${props.img})` }}>
      <Button type="header" text="Zobrazit projekt" link={props.link} />
    </div>
  );
}

export default Example;