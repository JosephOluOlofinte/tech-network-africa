// import React from 'react'

import { Button } from '../../components';

const FAQ = () => {
  return (
    <section className='bg-white h-fit py-[100px] flex justify-center'>
      <div className='inner-container grid gap-[100px]'>
        <div className='grid gap-[15px] justify-center text-center'>
          <header>
            <h2 className='text-4xl leading-[44px] font-bold text-[#0B0D12]'>
              Frequently asked questions
            </h2>
          </header>
          <p className='text-xl leading-[30px] text-slateGray500'>
            Everything you need to know about how TNA works
          </p>
        </div>

        <div></div>
        <div className='bg-slateGray50 p-8 rounded-2xl grid gap-8 place-content-center'>
          <div></div>
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
