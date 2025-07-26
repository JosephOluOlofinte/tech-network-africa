import React from 'react'

import ArrowRight from "../icons/ArrowRight";

type CardProps = {
    title: string;
    body: string;
}

const WwoCard: React.FC<CardProps> = ({title, body}) => {
  return (
    <div className='rounded-[20px] border-2 border-deepBlue5 py-[35px] px-[25px] grid gap-5 w-[380px]'>
      <h3 className='text-[30px] leading-[38px] text-slateGray100 font-medium tracking-normal'>
        {title}
      </h3>
      <p className='text-lg text-slateGray100'>{body}</p>
      <div className='h-[70px] w-[70px] border rounded-full border-slateGray2 text-slateGray2 flex items-center justify-center overflow-hidden'>
        <ArrowRight className='size-14' strokeWidth={1.5} />
      </div>
    </div>
  );
}

export default WwoCard