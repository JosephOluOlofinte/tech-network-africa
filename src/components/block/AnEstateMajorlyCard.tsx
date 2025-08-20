// import React, { type ReactNode } from 'react';

import type React from 'react';

type Props = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title1: string;
  title2: string;
  desc: string;
};

const AnEstateMajorlyCard: React.FC<Props> = ({
  Icon,
  title1,
  title2,
  desc,
}) => {
  return (
    <div className='grid gap-4'>
      <div className='grid gap-[6px]'>
        <div className='bg-brandBlue5 size-[40px] tablet:size-[50px] laptop:size-[66px] rounded-full flex items-center justify-center'>
          <Icon className='size-[24px] tablet:size-[32px] laptop:size-[40px]' />
        </div>
        <h3 className='text-base tablet:text-lg laptop:text-xl leading-[30px] font-medium text-brandBlue100'>
          {title1}
        </h3>
        <h4 className='font-medium'>{title2}</h4>
      </div>
      <p className='text-[#717171] font-medium'>{desc}</p>
    </div>
  );
};

export default AnEstateMajorlyCard;
