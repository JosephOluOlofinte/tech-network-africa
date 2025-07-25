// import React from 'react'

import { Fragment } from 'react/jsx-runtime';
import { Header } from '../../components';

const Hero = () => {
  return (
    <Fragment>
      <section className='bg-hero h-[740px] flex justify-center items-center'>
        <div className='w-[85%] h-[90%]'>
          <Header />
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
