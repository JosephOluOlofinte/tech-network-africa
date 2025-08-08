// import React from 'react'

import { Fragment } from 'react/jsx-runtime';
import WwoCard from '../../components/block/WwoCard';

const WhatWeOffer = () => {
  return (
    <Fragment>
      <section className='bg-brandWhite flex h-fit justify-center'>
        <div className='inner-container h-full'>
          <header className='h-[150px] flex items-center'>
            <h2 className='text-5xl font-medium text-brandBlue100'>
              What we offer
            </h2>
          </header>

          <div className='min-h-[600px] flex items-end pb-[50px]'>
            <div className='w-full grid grid-flow-col gap-[22.5]'>
              <WwoCard
                title='Standard Customized Apartments'
                body='We have arranged ultimate tech-inspired living experience,
                customized apartments with furnished interiors and essential
                equipment, including workstations, monitors, and ergonomic
                furniture, ensuring an optimal environment for productivity and
                innovation.'
              />

              <WwoCard
                title='Platform to Buy and Sell neatly used gadgets'
                body="Discover great deals on our platform where you can buy and sell neatly used gadgets at affordable prices. Whether you're looking to upgrade or declutter, find quality electronics that are in excellent condition. Shop smart and save on your favorite tech essentials today!"
              />

              <WwoCard
                title='A Community for tech enthusiasts'
                body='Stay connected with a vibrant community of tech enthusiasts through our Estate Networking platform. Join a diverse of individuals passionate about technology, innovation, and collaboration. Share insights, and foster connections with like-minded professionals in the tech world.'
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default WhatWeOffer;
