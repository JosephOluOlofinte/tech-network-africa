// import React from 'react'

import { Accordion } from '../block/Accordion';
import { AccordionChild } from '../block/Accordion';
import israel1 from '../../assets/images/israel-1.png';
import israel2 from '../../assets/images/israel-2.png';
import seyi from '../../assets/images/seyi.png';
import { Button } from '../block';

const FAQ = () => {
  return (
    <section className='bg-white h-fit py-[40px] flex justify-center'>
      <div className='inner-container grid gap-[70px] place-items-center'>
        <div className='grid gap-[15px] justify-center text-center'>
          <header>
            <h2 className='font-bold text-[#0B0D12]'>
              Frequently asked questions
            </h2>
          </header>
          <p className='text-brandDeepGray500'>
            Everything you need to know about how TNA works
          </p>
        </div>

        <Accordion className='w-full max-w-[650px]'>
          <AccordionChild title='How do I rent an apartment in the estate?'>
            <p>
              Download our mobile app here to browse through a wide selection of
              apartments, with detailed pricing information.
            </p>
          </AccordionChild>

          <AccordionChild title='How do I rent an apartment in the estate?'>
            <p>
              Download our mobile app here to browse through a wide selection of
              apartments, with detailed pricing information.
            </p>
            <Button
              variant='greyBtn'
              size='regular'
              className='flex justify-between items-center mt-[20px] laptop:mt-[40px] desktop:mt-[50px]'
              url=''>
              <p className='font-medium text-grey30 max-w-[80%]'>Learn more</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                className='stroke-grey30 size-10 laptop:size-12 desktop:size-14 bg-absoluteWhite rounded-full m-0 leading-none'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m12.75 15 3-3m0 0-3-3m3 3h-7'
                />
              </svg>
            </Button>
          </AccordionChild>

          <AccordionChild title='How do I rent an apartment in the estate?'>
            <p>
              Download our mobile app here to browse through a wide selection of
              apartments, with detailed pricing information.
            </p>
          </AccordionChild>

          <AccordionChild title='How do I rent an apartment in the estate?'>
            <p>
              Download our mobile app here to browse through a wide selection of
              apartments, with detailed pricing information.
            </p>
          </AccordionChild>

          <AccordionChild title='How do I rent an apartment in the estate?'>
            <p>
              Download our mobile app here to browse through a wide selection of
              apartments, with detailed pricing information.
            </p>
          </AccordionChild>
        </Accordion>

        <div className='bg-brandDeepGray50 w-full p-8 rounded-2xl grid gap-8 place-content-center'>
          <div className='flex justify-center items-center w-full'>
            <div className='w-12 h-12 -mr-3'>
              <img src={israel1} alt='' className='w-full' />
            </div>
            <div className='w-14 h-14 z-10'>
              <img src={israel2} alt='' className='w-full' />
            </div>
            <div className='w-12 h-12 -ml-3'>
              <img src={seyi} alt='' className='w-full' />
            </div>
          </div>

          <p className='grid text-center'>
            <b>Still have questions?</b>
            <span>
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </span>
          </p>
          <div className='w-fit justify-self-center'>
            <Button text='Get in touch' className=' !rounded-lg' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
