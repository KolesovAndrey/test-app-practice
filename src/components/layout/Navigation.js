import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

import AuthContext from '../../store/auth-context';
import classes from './Navigation.module.css';

const Navigation = () => {
  // TODO скрыть все ссылки кроме Auth, если isLoggedIn false
  const authCtx = useContext(AuthContext);
  const { isLoggedIn } = authCtx;

  return (
    <header className={classes.header}>
      <div className={classes['header-content']}>
        <div className={classes['header-logo']}>TestApp Logo</div>
        <nav>
          <ul>
            <li>
              {!authCtx.isLoggedIn && (
                <NavLink
                  className={({ isActive }) => (isActive ? classes.active : '')}
                  to="/"
                >
                  Auth
                </NavLink>
              )}
            </li>
            {isLoggedIn && (
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? classes.active : '')}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? classes.active : '')}
                  to="/details"
                >
                  Details
                </NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? classes.active : '')}
                  to="/faq"
                >
                  FAQ
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
