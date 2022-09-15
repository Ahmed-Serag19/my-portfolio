import React, { useEffect } from 'react';
import ProjectContainer from '../../Ui/ProjectContainer/ProjectContainer';
import Title from '../../Ui/Title/Title';
import MoviesImage from '../../images/movie.png';
import YogurtImage from '../../images/yogurt.png';
import GameImage from '../../images/game.png';
import PortfolioImage from '../../images/personal.png';
import ProfileImage from '../../images/Profile.png';
import AOS from 'aos';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="projects ">
      <div className="container">
        <div
          data-aos-duration="2500"
          data-aos="zoom-in"
          className="py-5 my-5"
        >
          <Title intro="Showcasing some of my best work">
            Projects
          </Title>
        </div>
        <div className="row">
          <div
            data-aos-duration="2500"
            data-aos="fade-down-right"
            className="col-lg-6"
          >
            <ProjectContainer
              src={MoviesImage}
              about="Movie Database with Authentication using React"
              alt="movie database project"
              code="https://github.com/Ahmed-Serag19/movie-db"
              live="https://ahmed-serag19.github.io/movie-db/"
            />
          </div>
          <div
            data-aos-duration="2500"
            data-aos="fade-down-left"
            className="col-lg-6"
          >
            <ProjectContainer
              src={YogurtImage}
              about="Frozen Yogurt Shop website"
              alt="Frozen Yogurt website"
              code="https://github.com/Ahmed-Serag19/Yogurt-Heaven"
              live="https://ahmed-serag19.github.io/Yogurt-Heaven/"
            />
          </div>
          <div
            data-aos-duration="2500"
            data-aos="fade-up-right"
            className="col-lg-6"
          >
            <ProjectContainer
              src={GameImage}
              about="Guessing number game Arcadish Style"
              alt="Guess my number game "
              code="https://github.com/Ahmed-Serag19/guess-my-number"
              live="https://ahmed-serag19.github.io/guess-my-number/"
            />
          </div>
          <div
            data-aos-duration="2500"
            data-aos="fade-up-left"
            className="col-lg-6"
          >
            <ProjectContainer
              src={PortfolioImage}
              about="Dummy Portfolio Website"
              alt="Portfolio Website"
              code="https://github.com/Ahmed-Serag19/DevFolio"
              live="https://ahmed-serag19.github.io/DevFolio/"
            />
          </div>
          <div
            data-aos-duration="2500"
            data-aos="zoom-in-up"
            className="col-lg-12"
          >
            <ProjectContainer
              src={ProfileImage}
              about="My Github for more Projects"
              alt="Profile"
              code="https://github.com/Ahmed-Serag19"
              live="https://github.com/Ahmed-Serag19"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
