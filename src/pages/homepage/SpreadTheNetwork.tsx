// import React from 'react'

import { Fragment } from 'react/jsx-runtime';

const SpreadTheNetwork = () => {
  return (
    <Fragment>
      <section className='bg-brandWhite h-fit py-[100px] flex justify-center'>
        <div className='inner-container grid gap-[42px]'>
          <header className='w-full max-w-[50ch]'>
            <h2 className='text-4xl leading-[44px] font-bold text-brandBlack'>
              Spread The Network
            </h2>
          </header>

          <div className='grid grid-cols-2 gap-5'>
            <div className='w-full max-w-[590px] bg-deepBlue3 rounded-[10px] p-9 grid gap-4'>
              <h3 className='text-brandWhite text-[32px] leading-tight font-bold'>
                Connect with us and stay updated on latest gist
              </h3>
              <p className='text-brandWhite text-lg font-medium'>
                Follow us on our socials for behind-the-scenes glimpses,
                updates, and engaging content leading up to the big reveal of
                our flagship product.
              </p>
              <div className='text-brandWhite'>
                social <br /> Links
              </div>
            </div>

            <div className='w-full max-w-[590px] bg-mintGreen3 rounded-[10px] p-9 grid gap-4'>
              <h3 className='text-brandWhite text-[32px] leading-tight font-bold'>
                Tell Your Tech Bro and Tech Sis About Us
              </h3>
              <p className='text-brandWhite text-lg font-medium'>
                Help us grow Africa's tech network. Share this page with your
                friends, team, and colleagues. Together, let's make the tech
                industry a welcoming home for everyone!
              </p>
              <div className='text-brandWhite'>
                social <br /> Links
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SpreadTheNetwork;
