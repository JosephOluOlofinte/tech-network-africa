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
    <div className='backdrop-blur-lg bg-white/40 border border-brandWhite/30 py-[32px] px-[24px] grid grid-rows-[1fr,_min-content] gap-4'>
      <div>
        <h3 className='text-xl xllaptop:text-2xl font-inter font-semibold text-white mb-3'>
          {title}
        </h3>
        <p className='text-base laptop:text-xl pb-4  font-medium text-white'>
          {desc}
        </p>
      </div>
      <p className='text-[16px] leading-[24px] font-inter text-white'>
        {url ? (
          <NavLink to={url} className='flex items-end gap-2'>
            Learn more <ArrowUpRight />
          </NavLink>
        ) : null}
      </p>
    </div>
  );
};

export default TransparentCard;
