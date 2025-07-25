import React from 'react';
import Button from './Button';
import ArrowRight from '../icons/ArrowRight';

type CardVariants = 'card1' | 'card2' | 'card3' | 'card4';

type CardProps = {
  title: string;
  desc: string;
  img: string;
  variant: CardVariants;
  className?: string;
};

const MissionCard: React.FC<CardProps> = ({
  title,
  desc,
  img,
  variant,
  className,
}) => {
  // declare card variants styles
  const variantStyles: Record<CardVariants, string> = {
    card1: 'bg-[#FFF5EC]',
    card2: 'bg-[#D6F4EC]',
    card3: 'bg-[#FEEDED]',
    card4: 'bg-[#E9EEFF]',
  };

  // declare classes common to all card
  const commonStyles =
    'h-[285px] w-fit max-w-[600px] rounded-[20px] flex overflow-hidden';

  // merge classes
  const styles = `${variantStyles[variant]} ${commonStyles} ${className}`;

  return (
    <div className={styles}>
      <div className='py-8 pl-8 grid gap-[12px]'>
        <h3 className='text-3xl leading-[38px] font-bold'>{title}</h3>
        <p className='text-lg text-slateGray2 font-medium max-w-[28ch]'>
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
