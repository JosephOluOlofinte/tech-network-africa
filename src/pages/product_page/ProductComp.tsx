// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import ProductInfo from "./ProductInfo"
import OtherApartments from "./OtherApartments"
import Contact from "../../components/static/Contact";
import FAQ from "../../components/static/FAQ";
import { JoinNewsletter } from "../../components";

const ProductComp = () => {
  return (
    <Fragment>
      <ProductInfo />
      <OtherApartments />
      <Contact />
      <FAQ />
      <JoinNewsletter />
    </Fragment>
  );
}

export default ProductComp