// import React from 'react'

import { NavLink } from 'react-router-dom';
import houseImg from '../../assets/images/apartments.png';
import heartIcon from '../../assets/img_icons/heart-icon.png'
// import starIcon from '../../assets/img_icons/star-icon.png'

const WeveCustomized = () => {
  return (
    <section className='bg-brandWhite flex justify-center'>
      <div className='inner-container'>
        <div className='py-14 grid xltablet:grid-cols-2 items-center justify-center gap-6'>
          <h2 className='max-w-[30ch] xltablet:max-w-[20ch] font-medium max-xltablet:text-center'>
            We've customized our apartments to ease living and work experience
            for you
          </h2>
          <div className='bg-brandBlue5 p-8 rounded-lg'>
            <h3 className='font-bold text-brandBlue1 mb-3'>
              Rent, move in, work and Enjoy.
            </h3>
            <p className='font-medium text-brandDeepGray2 max-w-[55ch] xltablet:max-w-[35ch]'>
              You don’t have to worry about how to furnish your apartment or how
              to set up your workstation, we have it all in place. Just move in
              and experience comfort with productivity
            </p>
          </div>
        </div>

        <div className='w-full py-14 flex max-tablet:flex-col-reverse justify-center items-center gap-5 flex-wrap'>
          {/* THis is where I left. trying to setup perfect responsiveness */}
          <div className='relative border border-brandDeepGray4 rounded-xl overflow-hidden'>
            <img src={houseImg} alt='' className='h-[200px] w-[265px]' />
            <span className='bg-white py-[6px] px-3 rounded-3xl text-xs text-brandGreen3 font-medium absolute top-8 left-4'>
              New
            </span>
            <div className='p-3 grid gap-3'>
              <div className='flex justify-between items-center'>
                <p className='text-xl font-bold'>A room self contain</p>
                <img src={heartIcon} alt='' className='size-6'/>
              </div>
              <div></div>
            </div>
          </div>

          <div className='relative border border-brandDeepGray4 rounded-xl overflow-hidden'>
            <img src={houseImg} alt='' className='h-[200px] w-[265px]' />
            <span className='bg-white py-[6px] px-3 rounded-3xl text-xs text-brandGreen3 font-medium absolute top-8 left-4'>
              New
            </span>
          </div>

          <div className='relative border border-brandDeepGray4 rounded-xl overflow-hidden'>
            <img src={houseImg} alt='' className='h-[200px] w-[265px]' />
            <span className='bg-white py-[6px] px-3 rounded-3xl text-xs text-brandGreen3 font-medium absolute top-8 left-4'>
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
