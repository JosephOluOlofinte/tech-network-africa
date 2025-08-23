import React from 'react';

type Props = {
  figure: string;
  title: string;
  desc: string;
};

const MetricsCard: React.FC<Props> = ({ figure, title, desc }) => {
  return (
    <div className='max-w-[345px] backdrop-blur-md bg-[#8B8B8B]/10 border border-brandWhite/30 text-center py-[32px] px-[24px] flex flex-col gap-3 laptop:gap-5 items-center'>
      <p className='text-3xl tablet:text-4xl desktop:text-5xl leading-[72px] font-inter font-semibold text-white'>
        {figure}
      </p>
      <p
        className='text-base laptop:text-lg font-inter font-semibold text-white'>
        {title}
      </p>
      <p className='text-sm laptop:text-base leading-[24px] font-inter text-white w-[30ch]'>
        {desc}
      </p>
    </div>
  );
};

export default MetricsCard;
