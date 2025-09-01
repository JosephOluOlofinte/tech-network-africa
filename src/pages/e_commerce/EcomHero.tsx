// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import { Button, Header } from "../../components"
import heroImage from '../../assets/images/ecom-hero.png';


const EcomHero = () => {
  return (
    <Fragment>
      <main className='bg-brandWhite h-[750px] tablet:h-[650px] flex justify-center items-center'>
        <div className='inner-container h-[95%] pb-5 laptop:h-[90%] flex flex-col'>
          <Header />

          <section className='w-full h-full pt-[40px] flex max-[639px]:flex-col justify-between items-center xltablet:flex-row laptop:pt-0'>
            <div className='flex flex-col gap-4 laptop:gap-12 xllaptop:max-w-[580px]'>
              <div className='flex flex-col gap-4'>
                <p className='text-[#717171] font-medium'>
                  <small>Welcome to TNA Marketplace</small>
                </p>
                <h1 className='text-[28px] leading-[32px] font-bold w-[16ch] text-[#454545] xlmobile:w-[18ch] tablet:w-[14ch] min-[740px]:w-[16ch] laptop:text-[36px] laptop:leading-[36px] xllaptop:text-[52px] xllaptop:leading-[52px]'>
                  It’s Time To Upgrade Your Workspace
                </h1>
                <p className='text-lg text-{#4b4b4b} w-[25ch] xlmobile:w-[30ch] tablet:w-[25ch] min-[740px]:w-[25ch] xltablet:text-xl laptop:w-[35ch] xllaptop:w-[40ch]'>
                  Buy and Sell Quality Used Gadgets and Accessories
                </p>
              </div>

              <div className='flex gap-9'>
                <Button text='Download App' type='button' />
                <Button
                  text='Learn more'
                  variant='textBtn'
                  type='button'
                  className='!px-0'
                />
              </div>
            </div>

            <div className='h-[50%] tablet:w-[50%] tablet:h-auto laptop:w-[40%]'>
              <img
                src={heroImage}
                alt=''
                className='h-full tablet:h-auto tablet:w-full object-cover'
              />
            </div>
          </section>
        </div>
      </main>
    </Fragment>
  );
}

export default EcomHero