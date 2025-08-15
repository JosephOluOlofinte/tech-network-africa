import React from 'react';

type Props = {
  figure: string;
  title: string;
  desc: string;
};

const MetricsCard: React.FC<Props> = ({ figure, title, desc }) => {
  return (
    <div className='backdrop-blur-md bg-[#8B8B8B]/10 border border-brandWhite/30 text-center py-[32px] px-[24px] flex flex-col gap-5'>
      <p className='text-[60px] leading-[72px] font-inter font-semibold text-white'>
        {figure}
      </p>
      <p className='text-[18px] leading-[28px] font-inter font-semibold text-white'>
        {title}
      </p>
      <p className='text-[16px] leading-[24px] font-inter text-white w-[30ch]'>
        {desc}
      </p>
    </div>
  );
};

export default MetricsCard;
