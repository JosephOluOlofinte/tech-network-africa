// import React from 'react'

import { Fragment } from 'react/jsx-runtime';
import EstateHero from './EstateHero';
import WhyTheEstate from './WhyTheEstate';
import WeveCustomized from './WeveCustomized';
import Contact from '../../components/static/Contact';
import FAQ from '../../components/static/FAQ';
import { JoinNewsletter } from '../../components';

const EstateComp = () => {
  return (
    <Fragment>
      <EstateHero />
      <WhyTheEstate />
      <WeveCustomized />
      <Contact />
      <FAQ />
      <JoinNewsletter />
    </Fragment>
  );
};

export default EstateComp;
