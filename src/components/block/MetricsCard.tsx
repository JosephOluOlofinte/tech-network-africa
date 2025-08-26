import React from 'react';

type Props = {
  figure: string;
  title: string;
  desc: string;
};

const MetricsCard: React.FC<Props> = ({ figure, title, desc }) => {
  return (
    <div className='max-w-[285px] xltablet:max-w-[345px] backdrop-blur-md bg-[#8B8B8B]/10 border border-brandWhite/30 text-center py-[24px] px-[16px] xltablet:py-[32px] xltablet:px-[24px] flex flex-col gap-3 laptop:gap-5 items-center'>
      <p className='text-3xl tablet:text-4xl desktop:text-5xl font-inter font-semibold text-white'>
        {figure}
      </p>
      <p
        className='text-base laptop:text-lg font-inter font-semibold text-white'>
        {title}
      </p>
      <p className='text-sm laptop:text-base leading-[24px] font-inter text-white max-w-[30ch]'>
        {desc}
      </p>
    </div>
  );
};

export default MetricsCard;
