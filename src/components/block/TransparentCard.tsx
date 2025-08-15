import React from 'react';
import { NavLink } from 'react-router-dom';
import ArrowUpRight from '../../assets/svg_icons/ArrowUpRight';

type Prop = {
  title: string;
    desc: string;
  url?: string
};

const TransparentCard: React.FC<Prop> = ({ title, desc, url }) => {
  return (
    <div className='backdrop-blur-lg bg-white/40 border border-brandWhite/30 py-[32px] px-[24px] grid grid-rows-[min-content,_1fr,_20%] gap-4'>
      <p className='text-[30px] leading-[38px] pb-4 font-inter font-semibold text-white'>
        {title}
      </p>
      <p className='text-[24px] leading-[32px] font-medium text-white'>
        {desc}
      </p>
      <p className='text-[16px] leading-[24px] font-inter text-white'>
              {url ? <NavLink to={url} className='flex items-center gap-[5px]'>
                  Learn more <ArrowUpRight />
              </NavLink> : null }
      </p>
    </div>
  );
};

export default TransparentCard;
