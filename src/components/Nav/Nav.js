import React, { useState } from 'react';
import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';
const Nav = () => {
  function menuOnClick() {
    document.getElementById('menu-bar').classList.toggle('change');
    document.getElementById('nav').classList.toggle('change');
    document.getElementById('menu-bg').classList.toggle('change-bg');
  }
  return (
    <nav className={`py-4 ${classes.navbar}`}>
      <div className="container">
        <div className={classes.settler}>
          <div className={classes.logo}>
            <NavLink to="/">
              <h2 className="mouse-pointer">Ahmed Mohamed</h2>
            </NavLink>
          </div>

          <div className={classes.links}>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? `${classes.active}` : 'inactive'
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? `${classes.active}` : 'inactive'
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? `${classes.active}` : 'inactive'
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skills"
                  className={({ isActive }) =>
                    isActive ? `${classes.active}` : 'inactive'
                  }
                >
                  Skills
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
