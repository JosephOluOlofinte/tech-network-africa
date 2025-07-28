import { Fragment } from 'react';
import image from '../../assets/images/male-female-light-bulb-green-illustration.png';
import AnEstateMajorlyCard from '../../components/block/AnEstateMajorlyCard';
import LinkBold from '../../components/icons/LinkBold';
import TrendUp from '../../components/icons/TrendUp';

const AnEstateMajorly = () => {
  return (
    <Fragment>
      <section className='bg-brandWhite h-fit py-[100px] flex justify-center'>
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
            <div className='w-full max-w-[510px] grid grid-rows-2 gap-[70px]'>
              <AnEstateMajorlyCard
                Icon={LinkBold}
                title1='Productive Socialization'
                title2='Link up and Connect with creatives in the Estate'
                desc='TNA organizes networking events, workshops, and social gatherings within the estate where creatives can meet face-to-face, exchange ideas, and collaborate on projects.'
              />

              <AnEstateMajorlyCard
                Icon={TrendUp}
                title1='Growth Check and Review'
                title2='Career Tracking and Latest Updates to Stay Ahead in the Digital Era'
                desc='We understand the importance of continuous learning and development in the digital age. We help residents in tracking career progress, and ensure they are well informed about latest updates in the digital space'
              />
            </div>

            <div className='self-center w-full max-w-[610px]'>
              <img src={image} alt='' className='object-cover w-full' />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AnEstateMajorly;
