// import React from 'react'
import apartments from '../../assets/images/tna-apartments.png';
import marketplace from '../../assets/images/tna-marketplace.png';
import TransparentCard from '../../components/block/TransparentCard';

const WhatYouMust = () => {
  return (
    <section className='bg-white h-fit py-[75px] flex justify-center'>
      <div className='inner-container grid gap-12'>
        <div className='grid gap-4'>
          <header>
            <h2 className='font-bold text-brandDeepGray900 max-w-[20ch]'>
              What you must know about us
            </h2>
          </header>
          <p className='font-medium text-brandDeepGray500 max-w-[60ch]'>
            Success and convenience are our top priorities for everyone in the
            technological industry and this is what we do
          </p>
        </div>

        <div className='flex max-xltablet:flex-col max-xltablet:items-center justify-center gap-5'>
          <div className='bg-brandBlue2 py-6 px-8 w-full max-h-[512px] grid grid-rows-[min-content,_1fr] gap-[80px]'>
            <div className='w-[240px]'>
              <img src={apartments} alt='' />
            </div>
            <TransparentCard
              title='Real Estate'
              desc='Focused on building and designing a well conducive and well-equipped apartments tailored for tech enthusiasts.'
              url='#'
            />
          </div>

          <div className='bg-brandGreen3 py-6 px-8 w-full max-h-[512px] grid grid-rows-[min-content,_1fr] gap-[80px]'>
            <div className='w-[240px]'>
              <img src={marketplace} alt='' />
            </div>
            <TransparentCard
              title='E-commerce'
              desc='The apartment feature inbuilt customized workstations and other essential furniture needed in a standard living apartment. '
              url='#'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouMust;
