// import React from 'react'

import { Fragment } from 'react/jsx-runtime';
import { Button, Header } from '../../components';
import heroImage from '../../assets/images/hero-image.png';

const Hero = () => {
  return (
    <Fragment>
      <section className='bg-hero h-[750px] flex justify-center items-center'>
        <div className='inner-container h-[90%] flex flex-col'>
          <Header />

          <main className='w-full h-full flex justify-between items-center'>
            <div className='max-w-[580px] flex flex-col gap-[17px]'>
              <div className='flex flex-col gap-3'>
                <h1 className='text-heroDesktop w-[16ch] text-absoluteWhite font-medium '>
                  Making Lifestyle and work easy for all tech enthusiasts across
                  Africa
                </h1>
                <p className='text-[rgba(244,247,255,0.8)] text-xl w-[40ch]'>
                  We provide estates with custom Apartments, dedicated workspace
                  & online Marketplace for tech enthusiasts
                </p>
              </div>
              <div className='flex gap-9'>
                <Button text='Contact Us' variant='secondary' type='button' />
                <Button
                  text='Learn more'
                  variant='textBtn'
                  type='button'
                  className='text-white !px-0'
                />
              </div>
            </div>

            <div className='max-w-[525px] h-auto'>
              <img src={heroImage} alt='' className='w-full object-cover' />
            </div>
          </main>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
