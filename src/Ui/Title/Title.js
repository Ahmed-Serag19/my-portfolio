import React from 'react';
import classes from './Title.module.css';

const Title = (props) => {
  return (
    <div className={classes.titleContainer}>
      <p>{props.intro}</p>
      <h1>{props.children}</h1>
    </div>
  );
};

export default Title;
