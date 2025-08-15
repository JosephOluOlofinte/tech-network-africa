// import React from 'react'

import { Fragment } from 'react/jsx-runtime';
import { Footer } from '../components';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Fragment>
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export const AuthLayout = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  )
}