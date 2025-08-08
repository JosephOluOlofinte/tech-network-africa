// import React from 'react'

import { NavLink } from 'react-router-dom';
import { Button } from '../block';
import logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <footer className='h-[530px] max-h-[1012px] bg-brandBlue100 flex justify-center items-center'>
      <div className='inner-container h-[80%] text-brandWhite flex flex-col justify-between'>
        <div className='grid grid-cols-[auto_auto_auto_auto] justify-between'>
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
                <NavLink to=''>
                  Marketplace <span>Download App</span>
                </NavLink>
              </li>
              <li>
                <NavLink to=''>Blog</NavLink>
              </li>
              <li>
                <NavLink to=''>
                  Apartments <span>Availale!</span>
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

        <div className='h-[105px] py-7 px-8 bg-white rounded-[10px] flex justify-between items-center'>
          <div></div>
          <p className='text-sm text-[#1D2739]'>
            © 2024 Israelajala. All rights reserved.
          </p>
          <div className='h-[50px]'>
            <img src={logo} alt='' className='h-full w-auto'/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
