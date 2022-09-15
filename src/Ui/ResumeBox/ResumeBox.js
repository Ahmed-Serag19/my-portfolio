import React from 'react';
import classes from './ResumeBox.module.css';
const ResumeBox = (props) => {
  return (
    <div className={`${classes['resume-box']}`}>
      <span className={classes['item-arrow']}></span>
      <h4>{props.title}</h4>
      <p>{props.details}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default ResumeBox;
