// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import { Button, Header } from "../../components";

const EstateHero = () => {
  return (
    <Fragment>
      <main className='bg-estate-hero h-[600px] flex justify-center items-center'>
        <div className='inner-container h-[95%] pb-5 laptop:h-[90%] flex flex-col'>
          <Header />

          <section className='w-full h-full pt-[40px] flex justify-center items-center'>
            <div className='flex flex-col items-center gap-6 laptop:gap-12'>
              <div className='flex flex-col gap-3 items-center text-center'>
                <h1 className='text-[32px] leading-[32px] font-bold w-[16ch] text-brandWhite xlmobile:w-[18ch] tablet:w-[14ch] min-[740px]:w-[16ch] laptop:text-[42px] laptop:leading-[42px] xllaptop:text-[60px] xllaptop:leading-[60px] laptop:font-medium'>
                  Welcome to the Estate
                </h1>
                <p className='text-lg text-brandWhite w-[25ch] xlmobile:w-[30ch] xltablet:text-xl laptop:w-[35ch] xllaptop:w-[40ch]'>
                  We have built our apartments to ensure all techies have
                  equipped workstation to stay active in the industry
                </p>
              </div>

              <div className='flex gap-5'>
                <Button text='Download App' variant='secondary' type='button' />
                <Button
                  text='See Apartments'
                  variant='textBtn'
                  type='button'
                  className='text-white !border !border-brandBlue5'
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </Fragment>
  );
}

export default EstateHero