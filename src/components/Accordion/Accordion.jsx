import React, { useState } from "react";
import { accordion_data } from "../../assets/index.js";
import { arrow } from "../../assets/faq/index.js";
import "./Accordion.css";

function Accordion() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    setSelected(selected === i ? null : i);
  };

  function createItem(item, i) {
    return (
      <div className="accordion-item" key={i}>
        <div className="accordion-title" onClick={() => toggle(i)}>
          {item.question}
          <img className={selected === i ? 'opened' : 'closed'} src={arrow} alt="" />
        </div>
        <div className={selected === i ? 'accordion-content show-content' : 'accordion-content'}>
          {item.answer.split('\n\n').map((paragraph, index) => (
            <p key={index} className="accordion-paragraph">{paragraph}</p>
          ))}
        </div>
      </div>
    )
  }

  return (
    <faq>
      <div className="wrapper">
        <div className="accordion">
          {accordion_data.map((item, i) => createItem(item, i))}
        </div>
      </div>
    </faq>
  );
}

export default Accordion;