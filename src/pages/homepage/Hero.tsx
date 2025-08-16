// import React from 'react'

import { Fragment } from 'react/jsx-runtime';
import { Button, Header } from '../../components';
import heroImage from '../../assets/images/hero-image.png';

const Hero = () => {
  return (
    <Fragment>
      <section className='bg-hero h-[750px] flex justify-center items-center'>
        <div className='inner-container h-[95%] pb-5 laptop:h-[90%] flex flex-col'>
          <Header />

          <main className='w-full h-full pt-[40px] flex flex-col justify-between items-center xltablet:flex-row laptop:pt-0'>
            <div className='xllaptop:max-w-[580px] flex flex-col gap-4 laptop:gap-12'>
              <div className='flex flex-col gap-4'>
                <h1 className='text-[28px] leading-[32px] font-bold w-[16ch] tablet:w-[25ch] text-brandWhite xltablet:w-[16ch] laptop:text-[36px] laptop:leading-[36px] xllaptop:text-[52px] xllaptop:leading-[52px] laptop:font-medium'>
                  Making Lifestyle and work easy for all tech enthusiasts across
                  Africa
                </h1>
                <p className='text-lg text-brandWhite w-[25ch] tablet:w-[40ch] xltablet:text-xl xltablet:w-[25ch] laptop:w-[35ch] xllaptop:w-[40ch]'>
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

            <div className='h-[50%] xltablet:h-auto xltablet:max-w-[45%] xllaptop:w-[480px] desktop:w-[525px]'>
              <img
                src={heroImage}
                alt=''
                className='h-full xltablet:h-auto xltablet:w-full object-cover'
              />
            </div>
          </main>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
