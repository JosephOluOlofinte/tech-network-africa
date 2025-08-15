// import React from 'react'

import { Fragment } from 'react/jsx-runtime';
import { Header } from '../../components';
import MetricsCard from '../../components/block/MetricsCard';

const AboutHero = () => {
  return (
    <Fragment>
      <main className='bg-brandWhite h-screen max-h-[850px] flex justify-center items-center'>
        <div className='inner-container h-[90%] flex flex-col'>
          <Header />

          <div className='w-full h-full flex flex-col justify-between pt-[70px] pb-[30px]'>
            <div className='text-center'>
              <h1 className='text-6xl leading-[72px] text-brandDeepGray100 font-medium '>
                TECH NETWORK AFRICA
              </h1>
              <p className='text-brandDeepGray2 text-2xl pt-2'>
                Making living and work convenient for enhanced productivity and
                career growth.
              </p>
            </div>

            <div className='bg-metrics p-[64px] h-[360px] w-full max-w-[1220px] grid grid-cols-[repeat(3,_auto)] gap-[32px]'>
              <MetricsCard
                figure='1K+'
                title='Built apartments'
                desc='Since we started, we have built over 1000 apartments'
              />

              <MetricsCard
                figure='5K+'
                title='Satisfied customers'
                desc='Over 5000 customers who uses our marketplace are satisfied'
              />

              <MetricsCard
                figure='10K+'
                title='Total downlaods'
                desc='TNA Marketplace and TNA Apartment app has over 10,000 downloads'
              />
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default AboutHero;
