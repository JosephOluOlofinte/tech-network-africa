// import React from 'react'

import zeroScam from '../../assets/images/scam-is-impossible.png'

const WeveSimplified = () => {
  return (
    <section className='bg-white flex justify-center py-[clamp(2.5rem,_4vw,_4.5rem)]'>
      <div className='inner-container'>
        <header className='grid justify-center gap-3'>
          <p className='justify-self-center'>
            What you should know about our marketplace
          </p>
          <h2 className='justify-self-center font-bold text-center max-w-[30ch]'>
            We’ve simplified the process of acquiring and upgrading gadgets
          </h2>
        </header>

        {/* SCAM IS IMPOSSIBLE ON THE PLATFORM */}

        <div>

          <div>
            <div>
              <img src='w' alt='' />
            </div>
            <h3 className='font-bold'>Scam is impossible on the platform</h3>
            <p>
              Our platform acts as an intermediary, ensuring a secure
              transaction process for both buyers and sellers.{' '}
            </p>
          </div>



          <div>
            <img src={zeroScam} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeveSimplified;