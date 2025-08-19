// import React from 'react'

import { Fragment } from 'react/jsx-runtime';

import card1Img from '../../assets/images/mission-image-1.png';
import card2Img from '../../assets/images/mission-image-2.png';
import MissionCard from '../../components/block/MissionCard';

const Mission = () => {
  return (
    <Fragment>
      <section className='bg-brandWhite h-fit py-16 tablet:py-20 laptop:py-24 flex justify-center'>
        <div className='inner-container grid gap-10 tablet:gap-13 laptop:gap-16'>
          <div className='grid gap-[15px] justify-center text-center'>
            <header>
              <h2 className='font-bold text-[#0B0D12]'>We Are On A Mission</h2>
            </header>
            <p className='text-brandDeepGray2 max-w-[45ch]'>
              To ensure living is convenient and apartments are equipped to
              break barriers in productivity constraints in the tech industry
            </p>
          </div>

          <div className='w-full grid place-items-center grid-cols-1 xltablet:grid-cols-[repeat(2,_minmax(335px,_1fr))] gap-6'>
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
