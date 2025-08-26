// import React from 'react'

import { Fragment } from 'react/jsx-runtime';
import { Header } from '../../components';
import MetricsCard from '../../components/block/MetricsCard';

const AboutHero = () => {
  return (
    <Fragment>
      <main className='bg-brandWhite h-fit  flex justify-center items-center'>
        <div className='inner-container py-12 flex flex-col'>
          <Header />

          <div className='w-full h-full flex flex-col justify-between gap-20 pt-[70px] pb-[30px]'>
            <div className='text-center grid h-fit gap-5'>
              <h1 className='text-[35px] tablet:text-[45px] xllaptop:text-[55px] text-brandDeepGray100 font-medium'>
                TECH NETWORK AFRICA
              </h1>
              <p className='text-brandDeepGray2 text-2xl pt-2'>
                Making living and work convenient for enhanced productivity and
                career growth.
              </p>
            </div>

            <div className='bg-metrics py-[60px] px-3 w-full max-w-[1220px] flex flex-wrap laptop:grid laptop:grid-cols-[repeat(3,_auto)] gap-5 justify-center'>
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
