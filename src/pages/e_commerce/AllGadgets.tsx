// import React from 'react'

import monitorIcon from '../../assets/img_icons/monitor-icon.png';
import checkIcon from '../../assets/img_icons/check-icon.png';
import thoughtfulGuy from '../../assets/images/thoughtful-guy.png'

const AllGadgets = () => {
  return (
    <section className='section-py flex justify-center relative'>
      <div className='inner-container'>
        <div className='w-full flex flex-col-reverse items-center xltablet:flex-row max-xltablet:gap-10 gap-5'>
          <div className='w-[550px] xlmobile:w-[700px] tablet:w-[80%] xltablet:w-4/6'>
            <img
              src={thoughtfulGuy}
              alt=''
              className='object-cover w-full max-tablet:-translate-x-10 xltablet:min-w-[450px] xltablet:max-w-[650px] xltablet:-translate-x-[19%]'
            />
          </div>
          <div className='h-fit grid gap-8 pl-5'>
            <div className='h-fit grid gap-1'>
              <img
                src={monitorIcon}
                alt=''
                className='size-[clamp(1.5rem,_4vw,_3rem)]'
              />
              <h3 className='font-bold'>All gadgets are fairly used only</h3>
              <p className='text-brandDeepGray2 max-w-[500px] laptop:max-w-[450px]'>
                Whether you need a laptop, monitor, or other tech gear, our
                platform simplifies the process of finding great deals and
                upgrading your workspace.
              </p>
            </div>

            <ul className='h-fit grid gap-4'>
              <li className='grid grid-cols-[max-content,_1fr] gap-3 max-w-[485px]'>
                <img src={checkIcon} alt='' className='size-7' />
                <span className='text-brandDeepGray500'>
                  Fairly used gadgets provide you with access to high-quality
                  technology at significantly lower prices compared to new
                  items.
                </span>
              </li>

              <li className='grid grid-cols-[max-content,_1fr] gap-3 max-w-[485px]'>
                <img src={checkIcon} alt='' className='size-7' />
                <span className='text-brandDeepGray500'>
                  By promoting the reuse of electronics, we contribute to
                  reducing electronic waste and conserving valuable resources.
                </span>
              </li>

              <li className='grid grid-cols-[max-content,_1fr] gap-3 max-w-[485px]'>
                <img src={checkIcon} alt='' className='size-7' />
                <span className='text-brandDeepGray500'>
                  Offering fairly used gadgets increases accessibility to
                  technology for individuals who may not be able to afford
                  brand-new items.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllGadgets