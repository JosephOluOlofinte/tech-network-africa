import React from 'react';
import Button from './Button';
import ArrowRight from '../svg_icons/ArrowRight';

type CardProps = {
  title: string;
  desc: string;
  img: string;
  className?: string;
};

const MissionCard: React.FC<CardProps> = ({ title, desc, img, className }) => {
  // declare classes common to all card
  const commonStyles =
    'h-[285px] w-fit max-w-[600px] rounded-[20px] flex overflow-hidden';

  // let common styles be merged with classname styles
  const styles = `${commonStyles} ${className}`;

  return (
    <div className={styles}>
      <div className='py-8 pl-8 grid gap-[12px]'>
        <h3 className='text-3xl leading-[38px] font-bold'>{title}</h3>
        <p className='text-lg text-brandDeepGray2 font-medium max-w-[28ch]'>
          {desc}
        </p>
        <div className='h-fit flex items-center gap-1'>
          <Button
            variant='textBtn'
            text='See apartments'
            className='!text-[#0B0D12] !py-0  !px-0'
          />
          <ArrowRight className='size-7' />
        </div>
      </div>

      <div className='h-full'>
        <img src={img} alt='' className='h-full w-auto bg-cover' />
      </div>
    </div>
  );
};

export default MissionCard;
