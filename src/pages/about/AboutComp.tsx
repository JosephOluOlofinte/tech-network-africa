import { Fragment } from 'react';
import AboutHero from './AboutHero';
import WhatYouMust from './WhatYouMust';
import WhyUs from './WhyUs';

const aboutComp = () => {
  return (
    <Fragment>
      <AboutHero />
      <WhatYouMust />
      <WhyUs />
    </Fragment>
  );
};

export default aboutComp;
