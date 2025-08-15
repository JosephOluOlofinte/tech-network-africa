// import React from 'react'

import { Fragment } from 'react/jsx-runtime';
import { Header } from '../../components';
import heroImage from '../../assets/images/hero-image.png';

const AboutHero = () => {
  return (
    <Fragment>
      <section className='bg-hero h-[750px] flex justify-center items-center'>
        <div className='inner-container h-[90%] flex flex-col'>
          <Header />

          <main className='w-full h-full flex flex-col justify-between items-center'>
            <div className='max-w-[580px] flex flex-col gap-[17px]'>
              <div className='flex flex-col gap-3'>
                <h1 className='text-heroDesktop w-[16ch] text-brandWhite font-medium '>
                  TECH NETWORK AFRICA
                </h1>
                <p className='text-[rgba(244,247,255,0.8)] text-xl w-[40ch]'>
                  Making living and work convenient for enhanced productivity
                  and career growth.
                </p>
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

export default AboutHero;
