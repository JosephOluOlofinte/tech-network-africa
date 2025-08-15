// import React from 'react'

import { Fragment } from 'react/jsx-runtime';
import { Button } from '../../components';

const EForTechies = () => {
  return (
    <Fragment>
      <section className='bg-e-for-techies w-full min-h-[630px] py-[275px] flex justify-center'>
        <div className='inner-container'>
          <div className='backdrop-blur-md bg-[#797979]/10 rounded-[20px] shadow-md py-[50px] px-10 grid gap-6 w-[65ch]'>
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
    </Fragment>
  );
};

export default EForTechies;
