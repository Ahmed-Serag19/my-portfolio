import React from 'react';
import classes from './ProjectContainer.module.css';
import { AiFillCode } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';

const ProjectContainer = (props) => {
  return (
    <div className={`${classes['project-container']}  my-5 mx-1 `}>
      <img src={props.src} alt={props.alt} className="w-100" />

      <div className={classes.overlay}>
        <div className={classes.innerContainer}>
          <p className="fs-3 text-black">{props.about}</p>
          <div
            className={`${classes.content} text-center text-black`}
          >
            <a href={props.code} target="_blank" rel="noreferrer">
              <p>Code</p>
              <AiFillCode />
            </a>
            {props.alt !== 'Profile' && (
              <a href={props.live} target="_blank" rel="noreferrer">
                <p>Live</p>
                <AiFillEye />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
