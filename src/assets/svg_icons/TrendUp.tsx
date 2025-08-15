import React from 'react';

const TrendUp = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      x-bind:width='size'
      x-bind:height='size'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      {...props}
    >
      <path
        d='M16.5 9.5L12.3 13.7L10.7 11.3L7.5 14.5'
        stroke='#0029AC'
        x-bind:strokeWidth='stroke'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1'
      ></path>
      <path
        d='M14.5 9.5H16.5V11.5'
        stroke='#0029AC'
        x-bind:strokeWidth='stroke'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1'
      ></path>
      <path
        d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z'
        stroke='#0029AC'
        x-bind:strokeWidth='stroke'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1'
      ></path>
    </svg>
  );
};

export default TrendUp;
