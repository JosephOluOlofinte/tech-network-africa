// import React from 'react'

import { Fragment } from 'react/jsx-runtime';
import fb from '../../assets/img_icons/fb.png';
import x from '../../assets/img_icons/x.png';
import Li from '../../assets/img_icons/Li.png';
import ig from '../../assets/img_icons/ig.png';
import share from '../../assets/img_icons/share.png'

const SpreadTheNetwork = () => {
  return (
    <Fragment>
      <section className='bg-brandWhite h-fit py-16 tablet:py-20 laptop:py-24 flex justify-center'>
        <div className='inner-container grid gap-[42px]'>
          <header className='w-full max-w-[50ch]'>
            <h2 className='font-bold text-brandBlack'>Spread The Network</h2>
          </header>

          <div className='w-full grid gap-6 xltablet:grid-cols-2 xltablet:justify-between bg-red-200'>
            <div className='w-full max-w-[590px] bg-brandBlue3 rounded-[10px] p-9 grid gap-4 grid-rows-[min-content,_1fr,_min-content]'>
              <h3 className='text-brandWhite font-bold max-w-[22ch]'>
                Connect with us and stay updated on latest gist
              </h3>
              <p className='text-brandWhite text-lg font-medium'>
                Follow us on our socials for behind-the-scenes glimpses,
                updates, and engaging content leading up to the big reveal of
                our flagship product.
              </p>
              <div className='text-brandWhite flex items-center gap-3 pt-4'>
                <a href=''>
                  <img src={fb} alt='' className='size-10' />
                </a>
                <a href=''>
                  <img src={x} alt='' className='size-10' />
                </a>
                <a href=''>
                  <img src={Li} alt='' className='size-10' />
                </a>
                <a href=''>
                  <img src={ig} alt='' className='size-10' />
                </a>
              </div>
            </div>

            <div className='w-full max-w-[590px] bg-brandGreen3 rounded-[10px] p-9 grid gap-4 justify-self-end'>
              <h3 className='text-brandWhite font-bold max-w-[20ch]'>
                Tell Your Tech Bro and Tech Sis About Us
              </h3>
              <p className='text-brandWhite text-lg font-medium'>
                Help us grow Africa's tech network. Share this page with your
                friends, team, and colleagues. Together, let's make the tech
                industry a welcoming home for everyone!
              </p>
              <div className='text-brandWhite pt-4'>
                <a
                  href=''
                  className='flex items-center justify-center gap-2 w-fit border border-white rounded-[28px] py-[10px] px-[20px] text-sm font-medium'>
                  Share Circles <img src={share} alt='' className='size-5' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SpreadTheNetwork;
