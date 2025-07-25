// import React from 'react'

import { Fragment } from 'react/jsx-runtime';
import { Button, Header } from '../../components';

const Hero = () => {
  return (
    <Fragment>
      <section className='bg-hero h-[740px] flex justify-center items-center'>
        <div className='w-[85%] h-[90%]'>
          <Header />

          <main>
            <div>
              <div>
                <h1>
                  Making Lifestyle and work easy for all tech enthusiasts across
                  Africa
                </h1>
                <p>
                  We provide estates with custom Apartments, dedicated workspace
                  & online Marketplace for tech enthusiasts
                </p>
              </div>
              <div>
                <Button text='Contact Us' variant='secondary' type='button' />
                <Button
                  text='Learn more'
                  variant='textBtn'
                  type='button'
                  className='text-white'
                />
              </div>
            </div>
            <div></div>
          </main>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
