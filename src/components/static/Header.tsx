// import React from 'react'

import { Fragment } from 'react/jsx-runtime';
import logo from '../../assets/images/logo.png';
import { Button } from '../block';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

const Header = () => {
  // Dropdown state: shown/!shown

  const [dropdownShown, setDropdownShown] = useState(false);

  const dropdown = () => {
    setDropdownShown((shown) => !shown);
  };

  return (
    <Fragment>
      <header className='h-[60px] xltablet:h-[75px] laptop:h-[85px] flex justify-center items-center'>
        <div className='bg-white h-full w-full flex justify-center items-center rounded-[100px] shadow-md'>
          <div className='w-[90%] xltablet:max-laptop:w-[95%] h-full flex justify-between items-center'>
            <div className='h-[40px] laptop:h-[50px]'>
              <img src={logo} alt='TNA logo' className='h-full' />
            </div>

            <nav className='hidden laptop:block'>
              <ul className='h-full flex items-center gap-4'>
                <li>
                  <NavLink
                    to='/'
                    className='py-3 xllaptop:px-2 font-medium'>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/about'
                    className='py-3  xllaptop:px-2 font-medium'>
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/our-estate'
                    className='py-3 xllaptop:px-2 font-medium'>
                    Our Estate
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/e-commerce'
                    className='py-3 xllaptop:px-2 font-medium'>
                    E-commerce
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/marketplace'
                    className='py-3 laptop:px-4 xllaptop:px-2 font-medium'>
                    Marketplace
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div className='hidden xltablet:flex h-full items-center gap-3'>
              <Button
                variant='tertiary'
                size='regular'
                type='button'
                text='Sign in'
                url='/auth/sign-in'
              />
              <Button
                variant='primary'
                size='regular'
                type='button'
                text='Join Network'
                url='/auth/join-network'
              />
            </div>

            {/* MOBILE Menu */}
            <div
              className='xltablet:hidden hover:cursor-pointer
                hover:scale-110 duration-400'
              onClick={dropdown}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-[34px] w-[34px]'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25'
                />
              </svg>
            </div>

            <div
              className={`
                      w-screen h-screen z-20
                      fixed top-0 left-0
                      backdrop-blur-sm
                      backdrop-saturate-[180%]
                      bg-[rgba(255,255,0,0.015)]
                      ${dropdownShown ? 'translate-x-0' : '-translate-x-[130%]'}
                      transition-all ease-in-out duration-[1.1s]
                      `}
              onClick={dropdown}></div>

            <div
              className={`z-30 ${
                dropdownShown ? 'translate-x-0' : 'translate-x-[130%]'
              } fixed top-[5px] right-0 transition-all ease-in-out duration-[1.2s]`}>
              <div
                className={`rounded-[10px] w-[300px] h-[99vh] bg-brandWhite pl-[30px] pt-[15px] pb-[30px] shadow-[5px_10px_30px_-5px_#2656F0]`}>
                <div
                  className='
                        hover:cursor-pointer
                        hover:scale-110 duration-300
                        flex justify-end pr-[20px] mb-[30px]
                        '
                  onClick={dropdown}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2.5}
                    stroke='currentColor'
                    className='size-8'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18 18 6M6 6l12 12'
                    />
                  </svg>
                </div>
                <MobileMenu onClick={dropdown} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
