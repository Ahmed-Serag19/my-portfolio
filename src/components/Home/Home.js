import React, { useEffect } from 'react';
import Main from '../Main/Main';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import AOS from 'aos';
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Main />
      <About />
      <Projects />
      <Skills />
    </>
  );
};

export default Home;
