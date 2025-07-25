// import React from 'react'

const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='size-6'
      {...props}
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M12 4.5v15m7.5-7.5h-15'
      />
    </svg>
  );
};

export default PlusIcon