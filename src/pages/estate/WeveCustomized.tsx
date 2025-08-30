// import React from 'react'

import { NavLink } from 'react-router-dom';
import houseImg from '../../assets/images/apartments.png';
import heartIcon from '../../assets/img_icons/heart-icon.png'
import starIcon from '../../assets/img_icons/star-icon.png'
import { Button } from '../../components';

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
          
          <div className='relative border border-brandDeepGray4 rounded-xl overflow-hidden'>
            <img src={houseImg} alt='' className='h-[200px] w-[265px]' />
            <span className='bg-white py-[6px] px-3 rounded-3xl text-xs text-brandGreen3 font-medium absolute top-8 left-4'>
              New
            </span>
            <div className='p-3 grid gap-3'>
              {/* product name + heart */}
              <div className='flex justify-between items-center'>
                <p className='text-xl font-semibold'>A room self contain</p>
                <img src={heartIcon} alt='' className='size-5' />
              </div>
              {/* price + rating */}
              <div className='flex justify-between items-center'>
                <p className='text-sm text-brandDeepGray100 font-semibold'>
                  ₦800,000
                </p>
                <p className='text-xs flex items-center py-1 gap-1'>
                  (5.0) <img src={starIcon} alt='' className='size-3' />
                </p>
              </div>
              {/* divider */}
              <hr className='border border-brandNeutral100' />
              {/* buttons */}
              <div className='flex justify-between items-center'>
                <Button
                  variant='textBtn'
                  size='small'
                  text='View more'
                  url='#'
                  className='!px-0'
                />
                <Button
                  size='small'
                  text='Contact Us'
                  url='#'
                />
              </div>
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
