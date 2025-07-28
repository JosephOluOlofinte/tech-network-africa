// import React from 'react'

import { Fragment } from 'react/jsx-runtime';
import logo from '../../assets/images/logo.png';
import { Button } from '../block';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Fragment>
      <header className='h-[85px] flex justify-center items-center'>
        <div className='bg-brandWhite h-full w-full flex justify-center items-center rounded-[100px] shadow-md'>
          <div className='w-[95%] h-full flex justify-between items-center'>
            <div className='h-[50px]'>
              <img src={logo} alt='TNA logo' className='h-full' />
            </div>

            <nav>
              <ul className='h-full flex items-center gap-[22px]'>
                <li>
                  <NavLink
                    to='#'
                    className='py-3 px-[22px] text-lg font-medium'
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='#'
                    className='py-3 px-[22px] text-lg font-medium'
                  >
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='#'
                    className='py-3 px-[22px] text-lg font-medium'
                  >
                    Our Estate
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='#'
                    className='py-3 px-[22px] text-lg font-medium'
                  >
                    Marketplace
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div className='h-full flex items-center gap-3'>
              <Button
                variant='tertiary'
                size='regular'
                type='button'
                text='Sign in'
              />
              <Button
                variant='primary'
                size='regular'
                type='button'
                text='Join Network'
              />
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
