// import React from 'react'

import { Fragment } from 'react/jsx-runtime';
import { Button } from '../../components';

const EForTechies = () => {
  return (
    <Fragment>
      <section className='bg-e-for-techies w-full min-h-[630px] py-[275px] flex justify-center'>
        <div className='inner-container'>
          <div className='backdrop-blur-md bg-[#79797961]/10 rounded-[20px] shadow-md py-[50px] px-10 grid gap-6 w-[65ch]'>
            <header>
              <h2 className='text-3xl leading-[44px] text-white font-bold'>
                An Estate for Techies
              </h2>
            </header>
            <p className='text-white text-2xl'>
              Embrace a tech-savvy neighborhood, leaving behind discrimination
              and misconceptions. Together, we can exchange innovative ideas and
              foster a supportive community.
            </p>
            <Button
              variant='secondary'
              text='Rent Apartment'
              className='text-black font-satoshi'
            />
          </div>
        </div>
      </section>
      <div className='min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600 flex items-center justify-center'>
        <div className='backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-10 shadow-xl text-white max-w-md w-full'>
          <h2 className='text-2xl font-bold mb-4'>Glassmorphism Card</h2>
          <p>This is a translucent card using Tailwind CSS.</p>
        </div>
      </div>
    </Fragment>
  );
};

export default EForTechies;
