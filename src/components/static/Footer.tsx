// import React from 'react'

import { NavLink } from 'react-router-dom';
import { Button } from '../block';
import logo from '../../assets/images/logo.png'
import fb from '../../assets/img_icons/Fb-footer.png'
import x from '../../assets/img_icons/Tw-footer.png'
import Li from '../../assets/img_icons/Ln-footer.png';
import ig from '../../assets/img_icons/In-footer.png'

const Footer = () => {
  return (
    <footer className='min-h-[530px] max-h-[1012px] bg-brandBlue100 flex justify-center items-center py-16 tablet:py-20 laptop:py-24'>
      <div className='inner-container text-brandWhite flex flex-col gap-16 justify-between'>
        <div className='h-fit grid gap-14 tablet:grid-cols-[auto_auto] laptop:grid-cols-[auto_auto_auto_auto] tablet:justify-between'>
          <div className='grid gap-3 h-max'>
            <h2 className='text-[32px] leading-[120%] font-bold max-w-[15ch]'>
              Explore: Take your tech career into a new dimension
            </h2>
            <p className='text-brandDeepGray5 leading-[145%] max-w-[31ch]'>
              Step into a world where your potential knows no bounds, an
              environment of growth and discovery with Tech Network Africa.
            </p>
          </div>

          <div className='grid gap-6 h-max'>
            <h2 className='text-base font-bold'>Company</h2>
            <ul className='grid gap-3 h-max'>
              <li>
                <NavLink to=''>About</NavLink>
              </li>
              <li>
                <NavLink to='' className='flex gap-4 items-baseline'>
                  Marketplace
                  <span className='py-[2px] px-3 text-xs bg-brandWhite text-brandBlack rounded-2xl animate-bounce'>
                    Download App
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to=''>Blog</NavLink>
              </li>
              <li>
                <NavLink to='' className='flex gap-4 items-baseline'>
                  Apartments
                  <span className='py-[2px] px-3 text-xs bg-brandWhite text-brandBlack rounded-2xl animate-bounce'>
                    Available!
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to=''>Gallery</NavLink>
              </li>
              <li>
                <NavLink to=''>Partnerships</NavLink>
              </li>
            </ul>
          </div>

          <div className='grid gap-6 h-max'>
            <h2 className='text-base font-bold'>Contact Us</h2>
            <ul className='grid gap-3 h-max'>
              <li>
                <NavLink to=''>Share</NavLink>
              </li>
              <li>
                <NavLink to=''>Join the Network</NavLink>
              </li>
            </ul>
          </div>

          <div className=''>
            <Button
              text='Instant message'
              variant='greyBtn'
              size='large'
              className='bg-transparent border-brandWhite text-base hover:bg-transparent'
            />
          </div>
        </div>

        {/* mobile menu for smaller devices */}
        <div className='min-h-[105px] py-7 px-8 bg-white rounded-[10px] grid gap-6 items-center place-items-center xltablet:hidden'>
          <div className='flex items-center gap-[clamp(10px,3vw,40px)]'>
            <div className='h-[50px]'>
              <img src={logo} alt='' className='h-full w-auto' />
            </div>
            <div className='grid grid-cols-[auto_auto_auto_auto] gap-3'>
              <img src={fb} alt='' className='size-6' />
              <img src={x} alt='' className='size-6' />
              <img src={Li} alt='' className='size-6' />
              <img src={ig} alt='' className='size-6' />
            </div>
          </div>
          <p className='text-sm text-[#1D2739]'>
            © 2024 Israelajala. All rights reserved.
          </p>
        </div>

        {/* mobile menu for larger devices */}
        <div className='hidden h-[105px] py-7 px-8 bg-white rounded-[10px] xltablet:flex justify-between items-center'>
          <div className='grid grid-cols-[auto_auto_auto_auto] gap-6'>
            <img src={fb} alt='' className='size-6' />
            <img src={x} alt='' className='size-6' />
            <img src={Li} alt='' className='size-6' />
            <img src={ig} alt='' className='size-6' />
          </div>
          <p className='text-sm text-[#1D2739]'>
            © 2024 Israelajala. All rights reserved.
          </p>
          <div className='h-[50px]'>
            <img src={logo} alt='' className='h-full w-auto' />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
