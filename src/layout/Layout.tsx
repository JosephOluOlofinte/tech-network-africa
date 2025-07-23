import { Fragment } from "react";

import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Layout;
