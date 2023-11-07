import React from 'react';
// import React, { useContext } from 'react';
import classes from './Layout.module.scss';
// import { ThemeContext } from '../../pages/_app';

function Layout({ children }) {
  // const theme = useContext(ThemeContext);
  return (
    // <main className={theme === 'dark' ? classes.darkTheme : classes.lightTheme}>
    <main className={classes.container}>{children}</main>
  );
}

export default Layout;
