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

          <main className='w-full h-full pt-[40px] flex max-[639px]:flex-col justify-between items-center xltablet:flex-row laptop:pt-0'>
            <div className='flex flex-col gap-4 laptop:gap-12 xllaptop:max-w-[580px]'>
              <div className='flex flex-col gap-4'>
                <h1 className='text-[28px] leading-[32px] font-bold w-[16ch] text-brandWhite xlmobile:w-[18ch] tablet:w-[14ch] min-[740px]:w-[16ch] laptop:text-[36px] laptop:leading-[36px] xllaptop:text-[52px] xllaptop:leading-[52px] laptop:font-medium'>
                  Making Lifestyle and work easy for all tech enthusiasts across
                  Africa
                </h1>
                <p className='text-lg text-brandWhite w-[25ch] xlmobile:w-[30ch] tablet:w-[25ch] min-[740px]:w-[25ch] xltablet:text-xl laptop:w-[35ch] xllaptop:w-[40ch]'>
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

            <div className='h-[50%] tablet:w-[40%] tablet:h-auto'>
              <img
                src={heroImage}
                alt=''
                className='h-full tablet:h-auto tablet:w-full object-cover'
              />
            </div>
          </main>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
