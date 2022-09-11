import { NavLink } from 'react-router-dom';

import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes['header-content']}>
        <div>Logo</div>
        <nav>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : '')}
                to="/"
              >
                Main
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : '')}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : '')}
                to="/details"
              >
                Details
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : '')}
                to="/faq"
              >
                FAQ
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
