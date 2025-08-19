// import React from 'react'

import { Fragment } from 'react/jsx-runtime';
import { Button } from '../../components';

const EForTechies = () => {
  return (
    <Fragment>
      <section className='bg-e-for-techies w-full min-h-[630px] flex justify-center laptop:h-[850px]'>
        <div className='inner-container flex items-center max-tablet:justify-center xltablet:justify-start'>
          <div className='backdrop-blur-md bg-[#797979]/10 rounded-[20px] shadow-md py-[50px] px-10 grid gap-6 w-fit'>
            <header>
              <h2 className='text-brandBlue5 text-3xl font-bold max-tablet:w-[12ch]'>
                An Estate for Techies
              </h2>
            </header>
            <p className='text-brandBlue5 text-lg leading-7 w-[21ch] tablet:w-[30ch] tablet:text-xl tablet:leading-8 laptop:w-[35ch] laptop:text-2xl laptop:leading-9'>
              Embrace a tech-savvy neighbor, leaving behind discrimination and misconceptions. Together, we can exchange innovative ideas and foster a supportive community.
            </p>
            <Button
              variant='secondary'
              text='Rent Apartment'
              className='!text-black font-satoshi'
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default EForTechies;
