// import React from 'react'

import { NavLink } from 'react-router-dom';
import houseImg from '../../assets/images/apartments.png';

import ProductCard from '../../components/block/ProductCard';

const WeveCustomized = () => {
  return (
    <section className='bg-brandWhite flex justify-center'>
      <div className='inner-container'>
        <div className='py-14 grid xltablet:grid-cols-2 items-center justify-center gap-6'>
          <h2 className='max-w-[30ch] xltablet:max-w-[20ch] font-medium max-xltablet:text-center'>
            We've customized our apartments to ease living and work experience
            for you
          </h2>
          <div className='bg-brandBlue5 p-8 rounded-lg'>
            <h3 className='font-bold text-brandBlue1 mb-3'>
              Rent, move in, work and Enjoy.
            </h3>
            <p className='font-medium text-brandDeepGray2 max-w-[55ch] xltablet:max-w-[35ch]'>
              You don’t have to worry about how to furnish your apartment or how
              to set up your workstation, we have it all in place. Just move in
              and experience comfort with productivity
            </p>
          </div>
        </div>

        <div className='w-full py-14 flex max-tablet:flex-col-reverse flex-wrap tablet:grid tablet:grid-cols-[50%_50%] laptop:grid-cols-3 xllaptop:grid-cols-4 justify-center items-center gap-7'>
          <ProductCard
            productImg={houseImg}
            newProduct
            name='A room self contain'
            price='₦800,000'
            url='#'
          />

          <ProductCard
            productImg={houseImg}
            newProduct
            name='A room self contain'
            price='₦800,000'
            url='#'
          />

          <ProductCard
            productImg={houseImg}
            newProduct
            name='A room self contain'
            price='₦800,000'
            url='#'
          />

          <p className='laptop:max-xllaptop:hidden font-medium w-[265px]'>
            <span className='font-semibold'>FACT:</span> New apartments cost
            more
          </p>
        </div>

        {/* This is where I stopped. To continue with 'All Apartments section */}
        <div className='py-12'>
          <div className='flex justify-between items-center'>
            <h2 className='max-w-[20ch] font-medium'>All apartments</h2>
            <NavLink to='#'>See all</NavLink>
          </div>
          <div className='w-full py-14 flex max-tablet:flex-col-reverse flex-wrap tablet:grid tablet:grid-cols-[50%_50%] laptop:grid-cols-3 xllaptop:grid-cols-4 justify-center items-center gap-7'>
            <ProductCard
              productImg={houseImg}
              newProduct
              name='A room self contain'
              price='₦800,000'
              url='#'
            />

            <ProductCard
              productImg={houseImg}
              newProduct
              name='A room self contain'
              price='₦800,000'
              url='#'
            />

            <ProductCard
              productImg={houseImg}
              newProduct
              name='A room self contain'
              price='₦800,000'
              url='#'
            />

            <ProductCard
              productImg={houseImg}
              newProduct
              name='A room self contain'
              price='₦800,000'
              url='#'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeveCustomized;
