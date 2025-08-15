// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import EcomHero from "./EcomHero"
import WeveSimplified from "./WeveSimplified"
import AllGadgets from "./AllGadgets"
import SpecialPlan from "./SpecialPlan"
import Contact from "../../components/static/Contact"
import FAQ from "../../components/static/FAQ"
import { JoinNewsletter } from "../../components"

const EcomComp = () => {
  return (
    <Fragment>
      <EcomHero />
      <WeveSimplified />
      <AllGadgets />
      <SpecialPlan />
      <Contact />
      <FAQ />
      <JoinNewsletter />
    </Fragment>
  );
}

export default EcomComp