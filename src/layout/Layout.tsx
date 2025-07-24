// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import { Footer, Header } from "../components"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
      <Fragment>
          <Header />
          <Outlet />
          <Footer />
    </Fragment>
  )
}

export default Layout