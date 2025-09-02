// import React from 'react'

import zeroScam from '../../assets/images/scam-is-impossible.png'
import shieldIcon from '../../assets/img_icons/featured-icon.png'
import checkIcon from '../../assets/img_icons/check-icon.png';

const WeveSimplified = () => {
  return (
    <section className='bg-white flex justify-center py-[clamp(2.5rem,_4vw,_4.5rem)]'>
      <div className='inner-container h-fit grid gap-6'>
        <header className='section-py grid justify-center gap-3'>
          <p className='justify-self-center'>
            What you should know about our marketplace
          </p>
          <h2 className='justify-self-center font-bold text-center max-w-[30ch]'>
            We’ve simplified the process of acquiring and upgrading gadgets
          </h2>
        </header>

        {/* SCAM IS IMPOSSIBLE ON THE PLATFORM */}

        <div className='grid max-w-[550px] xltablet:min-w-full xltablet:grid-cols-2 min-[870px]:grid-cols-[1fr,_40%] gap-10 justify-center xltablet:justify-between items-center my-0 mx-auto place-items-center'>
          <div className='h-fit grid gap-8'>
            <div className='h-fit grid gap-1'>
              <img
                src={shieldIcon}
                alt=''
                className='size-[clamp(1.5rem,_4vw,_3rem)]'
              />
              <h3 className='font-bold'>Scam is impossible on the platform</h3>
              <p className='text-brandDeepGray2 max-w-[500px] laptop:max-w-[450px]'>
                Our platform acts as an intermediary, ensuring a secure
                transaction process for both buyers and sellers.
              </p>
            </div>

            <ul className='h-fit grid gap-4'>
              <li className='grid grid-cols-[max-content,_1fr] gap-3 max-w-[485px]'>
                <img src={checkIcon} alt='' className='size-7' />
                <span className='text-brandDeepGray500'>
                  Our platform offers escrow services, whereby funds are held
                  securely until both parties fulfill their obligations. This
                  escrow system provides added protection for buyers and
                  sellers, as funds are only released once the terms of the
                  transaction have been met satisfactorily.
                </span>
              </li>

              <li className='grid grid-cols-[max-content,_1fr] gap-3 max-w-[485px]'>
                <img src={checkIcon} alt='' className='size-7' />
                <span className='text-brandDeepGray500'>
                  We offer dispute resolution mechanisms to address concerns and
                  ensure that both buyers and sellers are treated equitably.
                </span>
              </li>

              <li className='grid grid-cols-[max-content,_1fr] gap-3 max-w-[485px]'>
                <img src={checkIcon} alt='' className='size-7' />
                <span className='text-brandDeepGray500'>
                  Prior to listing items for sale or making purchases, users
                  undergo verification processes to authenticate their
                  identities and ensure credibility. Our platform fosters trust
                  and transparency, enhancing the overall transaction
                  experience.
                </span>
              </li>
            </ul>
          </div>

          <div className='max-xltablet:max-w-[455px] max-xltablet:flex justify-center xltablet:w-full'>
            <img src={zeroScam} alt='' className='w-[80%] xltablet:w-full' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeveSimplified;