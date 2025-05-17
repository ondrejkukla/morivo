import React from 'react';
import Button from '../Button/Button';
import './Example.css';

function Example(props) {
  return (
    <div className="colab" style={{ backgroundImage: `url(${props.img})` }}>
      <Button type="header" text="Zobrazit projekt" link="https://drive.google.com/drive/folders/1FCB01AQQoIMeopkk0WVTXFLAcJ6IZfuk" />
    </div>
  );
}

export default Example;