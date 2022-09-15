import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import classes from './Main.module.css';
import Coder from '../../images/typing-bro.png';
import Projects from '../../images/projects-bro.png';
import AOS from 'aos';
import Button from '../../Ui/Button/Button';
import { Link } from 'react-router-dom';

const Main = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <main className={`${classes.main} mt-5`}>
      <div className="container text-white">
        <div className="row">
          <div className="py-5 px-3 col-lg-6 m-auto ">
            <h1>Hello I'm</h1>

            <h1>
              <Typewriter
                options={{
                  strings: [
                    'Ahmed Mohamed Amin',
                    'A Front-End Developer',
                    'A Hardcore Gamer',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
          <div className="p-5 px-3 col-lg-6 m-auto">
            <div data-aos={'fade-down-left'} data-aos-duration="2500">
              <img className="w-75" src={Coder} alt="coding img" />
            </div>
          </div>
          <div className="py-5 px-3 col-lg-6 m-auto">
            <Link to="/projects">
              <Button>My Projects</Button>
            </Link>
          </div>
          <div className="p-5 px-3 col-lg-6 m-auto ">
            <div data-aos={'fade-up-left'} data-aos-duration="2500">
              <img
                className="w-75"
                src={Projects}
                alt="projects img"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
