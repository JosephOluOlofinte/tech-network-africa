import React from 'react';

type Props = {
  title: string;
  desc: string;
};

const ExploreMarketCard: React.FC<Props> = ({ title, desc }) => {
  return (
    <div className='bg-brandWhite h-fit min-h-[170px] w-full max-w-[575px] py-[20px] border-b-[6px] border-brandGreen4 rounded-lg flex justify-center'>
      <div className='w-[91%] grid gap-[10px] h-fit'>
        <h3 className='text-2xl font-bold'>{title}</h3>
        <p className='text-lg font-medium text-brandDeepGray500'>{desc}</p>
      </div>
    </div>
  );
};

export default ExploreMarketCard;
