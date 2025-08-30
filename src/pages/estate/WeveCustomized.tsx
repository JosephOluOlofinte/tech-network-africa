// import React from 'react'

import { NavLink } from 'react-router-dom';
import houseImg from '../../assets/images/apartments.png';

const WeveCustomized = () => {
  return (
    <section className='bg-brandWhite flex justify-center'>
      <div className='inner-container'>
        <div className='py-14 grid grid-cols-2 items-center'>
          <h2 className='max-w-[20ch] font-medium'>
            We've customized our apartments to ease living and work experience
            for you
          </h2>
          <div className='bg-brandBlue5 p-5 rounded-lg'>
            <h3 className='font-bold text-brandBlue1 mb-3'>
              Rent, move in, work and Enjoy.
            </h3>
            <p className='font-medium text-brandDeepGray2'>
              You don’t have to worry about how to furnish your apartment or how
              to set up your workstation, we have it all in place. Just move in
              and experience comfort with productivity
            </p>
          </div>
        </div>

        <div className='w-full py-14 flex max-tablet:flex-col-reverse justify-center items-center gap-5 flex-wrap'>
          {/* THis is where I left. trying to setup perfect responsiveness */}
          <div className='relative'>
            <img
              src={houseImg}
              alt=''
              className='h-[200px] w-[265px] rounded-xl'
            />
            <span className='bg-white py-[6px] px-3 rounded-3xl text-xs font-medium absolute top-8 left-4'>
              New
            </span>
          </div>

          <div className='relative'>
            <img
              src={houseImg}
              alt=''
              className='h-[200px] w-[265px] rounded-xl'
            />
            <span className='bg-white py-[6px] px-3 rounded-3xl text-xs font-medium absolute top-8 left-4'>
              New
            </span>
          </div>

          <div className='relative'>
            <img
              src={houseImg}
              alt=''
              className='h-[200px] w-[265px] rounded-xl'
            />
            <span className='bg-white py-[6px] px-3 rounded-3xl text-xs font-medium absolute top-8 left-4'>
              New
            </span>
          </div>

          <p className='font-medium w-[265px]'>
            <span className='font-semibold'>FACT:</span> New apartments cost
            more
          </p>
        </div>

        <div className='py-12'>
          <div>
            <h2 className='max-w-[20ch] font-medium'>All apartments</h2>
            <NavLink to='#'>See all</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeveCustomized;
