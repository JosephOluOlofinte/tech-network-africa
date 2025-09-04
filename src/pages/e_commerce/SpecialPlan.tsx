// import React from 'react'

import banner from '../../assets/images/guy-with-laptop-on-blue-gradient-bg.png'
import { Button } from '../../components';

const SpecialPlan = () => {
  return (
    <section className='section-py flex justify-center bg-brandBlue5'>
      <div className='inner-container'>
        <div className='grid max-w-[550px] xltablet:min-w-full xltablet:grid-cols-2 min-[870px]:grid-cols-[1fr,_40%] gap-10 justify-center xltablet:justify-between items-center my-0 mx-auto place-items-center'>
          <div className='grid h-fit gap-10'>
            <div className='h-fit grid gap-8'>
              <div className='h-fit grid gap-1'>
                <p className='text-brandBlue2 font-medium'>Special plan</p>
                <h3 className='font-bold'>
                  Giveback to the community Initiative
                </h3>
                <p className='text-brandDeepGray2 font-medium max-w-[500px] laptop:max-w-[450px]'>
                  Allocate tasks to participants to ensure that the winner of
                  the giveaway will utilize it effectively.
                </p>
              </div>

              <hr className='border-[3px] border-brandBlue3 max-w-[500px] laptop:max-w-[450px]' />

              <div className='h-fit grid gap-4 max-w-[500px] laptop:max-w-[450px]'>
                <p>
                  We encourage users and industry seniors to give back to the
                  community by donating their gently used gadgets and
                  accessories instead of selling them. This generosity will help
                  newbies coming into the industry to get their career started.
                </p>
                <p>
                  Note: You still have the option to list your items for sale as
                  usual or choose to giveback to the community.
                </p>
              </div>
            </div>
            <Button text='Download App' url='#' />
          </div>

          <div className='max-xltablet:max-w-[455px] max-xltablet:flex justify-center xltablet:w-full'>
            <img src={banner} alt='' className='w-[80%] xltablet:w-full' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialPlan