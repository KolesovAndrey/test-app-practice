import { Fragment } from 'react';

import Navigation from './Navigation';
import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <Fragment>
      <Navigation />
      <main className={classes['main-container']}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
