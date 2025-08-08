// import React from 'react'

import { Fragment } from 'react/jsx-runtime';

import card1Img from '../../assets/images/mission-image-1.png';
import card2Img from '../../assets/images/mission-image-2.png';
import MissionCard from '../../components/block/MissionCard';

const Mission = () => {
  return (
    <Fragment>
      <section className='bg-brandWhite h-fit py-[100px] flex justify-center'>
        <div className='inner-container grid gap-[100px]'>
          <div className='grid gap-[15px] justify-center text-center'>
            <header>
              <h2 className='text-4xl leading-[44px] font-bold text-[#0B0D12]'>
                We Are On A Mission
              </h2>
            </header>
            <p className='text-2xl text-brandDeepGray2 w-[40ch]'>
              To ensure living is convenient and apartments are equipped to
              break barriers in productivity constraints in the tech industry
            </p>
          </div>

          <div className='w-full grid grid-cols-2 gap-5'>
            <MissionCard
              title='Energy Efficient'
              desc='We have Integrated energy-efficient systems like solar
                  inverter and sustainable practices into apartments.'
              img={card1Img}
              className='bg-[#FFF5EC]'
            />

            <MissionCard
              title='Equipped Work Space'
              desc='All our apartments are customized with a dedicated work space and well equipped with necessary gadgets'
              img={card2Img}
              className='bg-[#D6F4EC]'
            />

            <MissionCard
              title='Equipped Work Space'
              desc='All our apartments are customized with a dedicated work space and well equipped with necessary gadgets'
              img={card2Img}
              className='bg-[#FEEDED]'
            />

            <MissionCard
              title='Energy Efficient'
              desc='We have Integrated energy-efficient systems like solar
                  inverter and sustainable practices into apartments.'
              img={card1Img}
              className='bg-[#E9EEFF]'
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Mission;
