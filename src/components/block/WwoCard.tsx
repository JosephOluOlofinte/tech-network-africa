// What we offer section on the homepage

import React from 'react';

import ArrowRight from '../../assets/svg_icons/ArrowRight';

type CardProps = {
  title: string;
  body: string;
};

const WwoCard: React.FC<CardProps> = ({ title, body }) => {
  return (
    <div className='rounded-[20px] border-2 border-brandBlue5 py-9 px-6 grid grid-rows-[min-content,_1fr,_min-content] gap-5'>
      <h3 className='text-brandDeepGray100 font-medium'>
        {title}
      </h3>
      <p className='text-brandDeepGray100'>{body}</p>
      <div className='size-10 xllaptop:size-[70px] border rounded-full border-brandDeepGray2 text-brandDeepGray2 flex items-center justify-center overflow-hidden'>
        <ArrowRight className='size-9 xllaptop:size-14' strokeWidth={1.5} />
      </div>
    </div>
  );
};

export default WwoCard;
