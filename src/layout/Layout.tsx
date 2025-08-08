// import React from 'react'

import { Fragment } from 'react/jsx-runtime';
import { Footer } from '../components';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Fragment>
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Layout;
