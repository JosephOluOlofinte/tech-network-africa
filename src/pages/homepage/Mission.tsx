// import React from 'react'

import { Fragment } from 'react/jsx-runtime';

import card1Img from '../../assets/images/mission-image-1.png';
import card2Img from '../../assets/images/mission-image-2.png';
import MissionCard from '../../components/block/MissionCard';

const Mission = () => {
  return (
    <Fragment>
      <section className='bg-[#F4F7FF] h-fit py-[100px] flex justify-center'>
        <div className='inner-container grid gap-[100px]'>
          <div className='grid gap-[15px] justify-center text-center'>
            <header>
              <h2 className='text-4xl leading-[44px] font-bold text-[#0B0D12]'>
                We Are On A Mission
              </h2>
            </header>
            <p className='text-2xl text-slateGray2 w-[40ch]'>
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
              variant='card1'
            />

            <MissionCard
              title='Equipped Work Space'
              desc='All our apartments are customized with a dedicated work space and well equipped with necessary gadgets'
              img={card2Img}
              variant='card2'
            />

            <MissionCard
              title='Equipped Work Space'
              desc='All our apartments are customized with a dedicated work space and well equipped with necessary gadgets'
              img={card2Img}
              variant='card3'
            />

            <MissionCard
              title='Energy Efficient'
              desc='We have Integrated energy-efficient systems like solar
                  inverter and sustainable practices into apartments.'
              img={card1Img}
              variant='card4'
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Mission;
