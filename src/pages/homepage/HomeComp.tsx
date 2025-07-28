// import React from 'react'

import { JoinNewsletter } from '../../components';
import AnEstateMajorly from './AnEstateMajorly';
import EForTechies from './EForTechies';
import ExploreMarket from './ExploreMarket';
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
      <JoinNewsletter />
    </>
  );
};

export default HomeComp;
