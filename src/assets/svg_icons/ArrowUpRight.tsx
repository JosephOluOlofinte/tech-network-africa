import React from 'react';

const ArrowUpRight = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height='24px'
      viewBox='0 -960 960 960'
      width='20px'
      fill='currentColor'
      {...props}>
      <path d='m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z' />
    </svg>
  );
};

export default ArrowUpRight;
