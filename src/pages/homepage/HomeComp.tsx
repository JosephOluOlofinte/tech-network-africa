// import React from 'react'

import { JoinNewsletter } from '../../components';
import AnEstateMajorly from './AnEstateMajorly';
import Contact from './Contact';
import EForTechies from './EForTechies';
import ExploreMarket from './ExploreMarket';
import FAQ from './FAQ';
import Hero from './Hero';
import Mission from './Mission';
import SpreadTheNetwork from './SpreadTheNetwork';
import WhatWeOffer from './WhatWeOffer';

const HomeComp = () => {
  return (
    <>
      <Hero />
      <WhatWeOffer />
      <EForTechies />
      <Mission />
      <AnEstateMajorly />
      <ExploreMarket />
      <SpreadTheNetwork />
      <Contact />
      <FAQ />
      <JoinNewsletter />
    </>
  );
};

export default HomeComp;
