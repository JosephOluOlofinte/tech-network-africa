// import React, { type ReactNode } from 'react';

import type React from "react";

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
        <div className='bg-deepBlue5 w-fit p-3 rounded-full'>
          <Icon className='size-[42px]' />
        </div>
        <h3 className='text-xl leading-[30px] font-medium text-deepblue100'>{title1}</h3>
        <h4 className='text-3xl leading-[38px] font-medium'>{title2}</h4>
      </div>
      <p className='text-xl leading-[32px] text-[#717171] font-medium'>{desc}</p>
    </div>
  );
};

export default AnEstateMajorlyCard;
