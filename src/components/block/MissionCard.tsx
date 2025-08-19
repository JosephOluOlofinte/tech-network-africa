import React from 'react';
import Button from './Button';
import ArrowRight from '../../assets/svg_icons/ArrowRight';

type CardProps = {
  title: string;
  desc: string;
  img: string;
  className?: string;
};

const MissionCard: React.FC<CardProps> = ({ title, desc, img, className }) => {
  // declare classes common to all card
  const commonStyles =
    'tablet:h-[285px] w-full tablet:w-fit max-w-[600px] rounded-[20px] flex overflow-hidden';

  // let common styles be merged with classname styles
  const styles = `${commonStyles} ${className}`;

  return (
    <div className={styles}>
      <div className='py-8 max-tablet:px-8 grid gap-8 tablet:gap-3 tablet:pl-8'>
        
        <div className='h-fit grid gap-3'>
          <h3 className='font-bold'>{title}</h3>
          <p className='text-brandDeepGray2 font-medium max-w-[35ch] tablet:w-[30ch]'>
            {desc}
          </p>
        </div>

        <div className='h-fit flex items-center gap-1'>
          <Button
            variant='textBtn'
            text='See apartments'
            className='!text-[#0B0D12] !py-0  !px-0'
          />
          <ArrowRight className='size-7' />
        </div>
      </div>

      <div className='h-full max-tablet:hidden'>
        <img src={img} alt='' className='h-full w-auto bg-cover' />
      </div>
    </div>
  );
};

export default MissionCard;
