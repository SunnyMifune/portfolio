import React from 'react';

const Card = (props) => {
  return (
    <div className="timeline_item">
      <i className={props.icon}></i>
      <span className="timeline_date">{props.year}</span>
      <h3 className="timeline_title">{props.title}</h3>
      <span className="timeline_posit">{props.posit}</span>
      <p className="timeline_text">{props.desc}</p>
      <p className="timeline_text">{props.more}</p>
      <p className="timeline_text">{props.third}</p>
    </div>
  )
}

export default Card
