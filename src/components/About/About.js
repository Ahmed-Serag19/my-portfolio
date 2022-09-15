import React, { useEffect } from 'react';
import Title from '../../Ui/Title/Title';
import AOS from 'aos';
import AboutPic from '../../images/About.jpg';
import classes from './About.module.css';
import Button from '../../Ui/Button/Button';
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import ResumeBox from '../../Ui/ResumeBox/ResumeBox';
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className={`my-5 py-5 ${classes.about}`}>
      <div className="container">
        <div data-aos="zoom-in" data-aos-duration="2500">
          <Title intro="Get to know me">About Me</Title>
        </div>
        <div className={`row py-5 ${classes['main-about']}`}>
          <div className={`py-5 px-3 col-lg-6 ${classes.info}`}>
            Hello, I am frontend developer with a particular interest
            in making things simple and automating daily tasks. I try
            to keep up with security and best practices, and am always
            looking for new languages and methods to learn and I
            always seek best practice to make my projects unique and
            creative and I do so by keeping my eyes on the new
            tools,after discovering my passion for web development, I
            couldn’t get enough. I made websites for friends and
            family, I’m looking forward to bringing that passion to a
            full-time role.
            <div className="row pt-5">
              <div className="col-lg-12">
                <p>
                  <span className="text-white">Name : </span> Ahmed
                  Mohamed Amin
                </p>
                <p>
                  <span className="text-white">Phone : </span>{' '}
                  01001386765
                </p>
              </div>
              <div className="col-lg-12">
                <p>
                  <span className="text-white">Email : </span>{' '}
                  ahmedmohamed.amin@hotmail.com
                </p>
                <p>
                  <span className="text-white">From : </span> have 2
                  Homes , Downtown Cairo and Lebeny Haram
                </p>
                <div className="row">
                  <div className="col-lg-6 mt-5">
                    <p>
                      <a
                        href="https://drive.google.com/file/d/1ufqUlk3CpjSyhuCovekJmXfxMAb8ae-L/view"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button>Download C.V</Button>
                      </a>
                    </p>
                  </div>
                  <div
                    className={`col-lg-6 mt-5 ${classes['personal-links']}`}
                  >
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/A7med.Serag/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaFacebook />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/Ahmed-Serag19"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaGithub />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/ahmed-mohamed-41b081186/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaLinkedinIn />
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto: ahmedmohamed.amin@hotmail.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <MdAlternateEmail />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`col-lg-6 ${classes['about-img']}`}
            data-aos={'flip-up'}
            data-aos-duration="2500"
          >
            <img
              className="w-100"
              src={AboutPic}
              alt="about me img"
            />
          </div>
        </div>
        <section className={`${classes.resume} row mt-5`}>
          <div data-aos="zoom-in" data-aos-duration="2500">
            <Title intro="Check out my Resume">My Resume</Title>
          </div>
          <div className="col-lg-12">
            <div className="row mt-5">
              <div
                data-aos="zoom-out-right"
                data-aos-duration="2500"
                className="col-lg-6"
              >
                <ResumeBox
                  title="Bachelor C.S"
                  details="Modern Academy 2009-2013"
                  description="Introduction to Programming and Many programming Languages"
                />
                <ResumeBox
                  title="The Web Developer Bootcamp"
                  details="Udemy Jan-2021 July-2021"
                  description="Basics of HTML, CSS, Javascript and few Projects"
                />
                <ResumeBox
                  title="Route Frontend Diploma"
                  details="Route Academy July 2021- Feb 2022"
                  description="Deep Dive in HTML, CSS, Javascript, AJAX, JSON and basics of React"
                />
              </div>
              <div
                data-aos="zoom-out-left"
                data-aos-duration="2500"
                className="col-lg-6"
              >
                <ResumeBox
                  title="React Tutorial and Projects"
                  details="Udemy(by John Smilga) May 2022- untill now"
                  description="did not finish it yet but did few projects with him planning to continue"
                />
                <ResumeBox
                  title="React - The Complete Guide "
                  details="Udemy(by Maxmilian) Feb 2021- Sep 2022"
                  description="Deep dive in React , React-router and hooks , Redux"
                />
                <ResumeBox
                  title="
                  The Complete JavaScript Course !
                  "
                  details="Udemy(by Maxmilian) Feb 2022- untill now"
                  description="Deep dive in Javascript (finished 40% so far)"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
