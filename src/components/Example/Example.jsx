import React from 'react';
import Button from '../Button/Button';
import './Example.css';

function Example(props) {

  const productId = props.link;

  return (
    <div className="colab" style={{ backgroundImage: `url(${props.img})` }}>
      <Button type="example" text="Zobrazit projekt" link={`/${productId}`} />
    </div>
  );
}

export default Example;