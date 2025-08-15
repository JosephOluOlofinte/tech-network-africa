import React from 'react';

const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill='none'
      viewBox='0 0 20 25'
      strokeWidth='1.5'
      stroke='currentColor'
      className='size-6'
      {...props}
    >
      <g transform='rotate(-90 12 12)'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M16.5 12L12 16.5L7.5 12M12 16.5V3'
        />
      </g>
    </svg>
  );
};

export default ArrowRight;
