import React from 'react';
import Button from '../Button/Button';
import './Example.css';

function Example(props) {
  return (
    <div className="colab" style={{ backgroundImage: `url(${props.img})` }}>
      <Button type="example" text="Zobrazit projekt" link="/subpage" />
    </div>
  );
}

export default Example;