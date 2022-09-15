import React from 'react';
import classes from './Footer.module.css';
const Footer = () => {
  return (
    <footer>
      <div className={classes.footer}>
        Made with ♥ Copyright ©{new Date().getFullYear()} All rights
        reserved to Serga
      </div>
    </footer>
  );
};

export default Footer;
