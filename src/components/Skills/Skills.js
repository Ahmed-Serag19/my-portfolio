import React, { useEffect } from 'react';
import classes from './Skills.module.css';
import SkillsImage from '../../images/Skills.png';
import Title from '../../Ui/Title/Title';
import AOS from 'aos';

const Skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className={classes.skills}>
      <div className="container">
        <div
          data-aos="zoom-in"
          data-aos-duration="2500"
          className="py-5 my-5"
        >
          <Title intro="Skills & Hobbies">My Skills</Title>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h1 className="mt-5 pt-5 mb-3">Skills</h1>
            <ul className={` ${classes['skills-ul']}`}>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Redux</li>
              <li>Typescript</li>
              <li>Tailwind(basics)</li>
            </ul>
            <h1 className="mt-2 pt-2 mb-3">Hobbies</h1>
            <ul>
              <li>Cooking (very good at it) </li>
              <li>Gaming (very good at it) </li>
              <li>Nutrition & Working out</li>

              <li>Swimming</li>
              <li>Walking</li>
              <li>Watching Movies & Reading</li>
            </ul>
          </div>
          <div
            data-aos-duration="2500"
            data-aos="zoom-in-up"
            className={`col-lg-6 pt-5 ${classes['skillsImg-container']}`}
          >
            <img
              className="w-100"
              src={SkillsImage}
              alt="skills img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
