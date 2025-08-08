// import React from 'react'

const JoinNewsletter = () => {
  return (
    <section className='bg-brandWhite flex justify-center items-center h-fit min-h-[165px] max-h-[205px]'>
      <div className='inner-container h-[80%] grid grid-flow-col grid-cols-3'>
        <div className='grid gap-2'>
          <header>
            <h2 className='text-2xl font-bold'>Join our newsletter</h2>
          </header>
          <p className='w-[30ch]'>
            Get all the latest TNA news delivered to your inbox.
          </p>
        </div>
        <div></div>
        <div className='h-fit'>
          <form
            action=''
            className='w-full justify-self-end grid grid-cols-3 gap-3'
          >
            <input
              type='text'
              name='email'
              id='email'
              placeholder='Email address'
              className='p-4 bg-white border border-[#C9D2F0] rounded-lg col-span-2'
            />
            <input
              type='button'
              value='Subscribe'
              className='py-4 px-6 bg-brandBlue2 text-brandWhite font-medium rounded-lg col-span-1'
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinNewsletter;
