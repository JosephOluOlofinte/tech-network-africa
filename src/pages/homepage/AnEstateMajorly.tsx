import { Fragment } from 'react';
import image from '../../assets/images/male-female-light-bulb-green-illustration.png';

const AnEstateMajorly = () => {
  return (
    <Fragment>
      <section className='bg-[#F4F7FF] h-fit py-[100px] flex justify-center'>
        <div className='inner-container grid gap-[100px]'>
          <div className='grid gap-[15px] justify-center text-center'>
            <header>
              <h2 className='text-4xl leading-[44px] font-bold text-[#0B0D12]'>
                An estate majorly for the tech industry
              </h2>
            </header>
            <p className='text-2xl text-slateGray2 w-[60ch]'>
              Here, you'll find more than just a place to live or work – you'll
              discover a vibrant community of like-minded individuals passionate
              about technology and its limitless possibilities.
            </p>
          </div>

          <div className='grid grid-cols-2'>
            <div className='w-full max-w-[510px] grid grid-rows-2'>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className='w-full max-w-[610px]'>
              <img src={image} alt='' className='object-cover w-full' />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AnEstateMajorly;
