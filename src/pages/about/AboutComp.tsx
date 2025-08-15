import { Fragment } from 'react';
import AboutHero from './AboutHero';
import WhatYouMust from './WhatYouMust';
import WhyUs from './WhyUs';
import Contact from '../../components/static/Contact';
import FAQ from '../../components/static/FAQ';
import { JoinNewsletter } from '../../components';

const AboutComp = () => {
  return (
    <Fragment>
      <AboutHero />
      <WhatYouMust />
      <WhyUs />
      <Contact />
      <FAQ />
      <JoinNewsletter />
    </Fragment>
  );
};

export default AboutComp;
