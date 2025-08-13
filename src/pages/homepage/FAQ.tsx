// import React from 'react'

import { Button } from '../../components';
import { Accordion } from '../../components/block/Accordion';
import { AccordionChild } from '../../components/block/Accordion';

const FAQ = () => {
  return (
    <section className='bg-white h-fit py-[100px] flex justify-center'>
      <div className='inner-container grid gap-[70px] place-items-center'>
        <div className='grid gap-[15px] justify-center text-center'>
          <header>
            <h2 className='text-4xl leading-[44px] font-bold text-[#0B0D12]'>
              Frequently asked questions
            </h2>
          </header>
          <p className='text-xl leading-[30px] text-brandDeepGray500'>
            Everything you need to know about how TNA works
          </p>
        </div>

        <Accordion className='w-[800px]'>
          <AccordionChild
            title='How do I rent an apartment in the estate?'
            description='Download our mobile app here to browse through a wide selection of apartments, with detailed pricing information.'
          />
          <AccordionChild
            title='Can I customize the inbuilt workstations in the apartments?'
            description='Download our mobile app here to browse through a wide selection of apartments, with detailed pricing information.'
          />
          <AccordionChild
            title='What are the amenities in the estate apartments?'
            description='Download our mobile app here to browse through a wide selection of apartments, with detailed pricing information.'
          />
          <AccordionChild
            title='How does the marketplace for buying and selling of used item work?'
            description='Download our mobile app here to browse through a wide selection of apartments, with detailed pricing information.'
          />
          <AccordionChild
            title='What is the cost of an apartments in the estate?'
            description='Download our mobile app here to browse through a wide selection of apartments, with detailed pricing information.'
          />
          <AccordionChild
            title='How do I win gadgets giveaway on the marketplace?'
            description='Download our mobile app here to browse through a wide selection of apartments, with detailed pricing information.'
          />
        </Accordion>

        <div className='bg-brandDeepGray50 w-full p-8 rounded-2xl grid gap-8 place-content-center'>
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
