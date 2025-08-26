// import React from 'react'

import banner from '../../assets/images/why-us-banner.png';
import WhyUsCard from '../../components/block/WhyUsCard';

const WhyUs = () => {
  return (
    <section className='bg-white h-fit py-[50px] flex justify-center'>
      <div className='inner-container grid gap-[100px]'>
        <div className='overflow-visible'>
          <div className='relative max-w-[1200px]'>
            <header className='xltablet:absolute top-0'>
              <h2 className='font-bold text-brandDeepGray900'>Why us?</h2>
            </header>
            <div className='w-full'>
              <img src={banner} alt='' className='w-full' />
            </div>
          </div>
        </div>

        <div className='grid grid-cols-[repeat(1,_minmax(320px,_565px))] xltablet:grid-cols-[repeat(2,_minmax(350px,_565px))] justify-center xltablet:justify-between gap-5 laptop:gap-8 desktop:gap-y-[100px]'>
          <WhyUsCard
            title='Highly experienced'
            desc='We have years of experience in the tech industry and we understand lots of shortcoming and challenges of all techies'
            className='border-brandBlue2'
          />
          <WhyUsCard
            title='Mentorship Opportunity'
            desc='We give you a platform to connect with your mentor one on one, and share innovative ideas'
            className='border-brandGreen4'
          />
          <WhyUsCard
            title='Support Collaboration'
            desc='Our network encourage collaboration, which is very important in the growth and success of all tech careers'
            className='border-brandOrange4'
          />
          <WhyUsCard
            title='Perfect Apartments'
            desc='We provide a cool, calm and secured residential territory specifically designed for individuals in the tech industry'
            className='border-brandLightGray4'
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
