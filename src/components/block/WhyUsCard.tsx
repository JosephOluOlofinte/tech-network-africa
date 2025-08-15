import React from 'react'


type Props = {
    title: string;
    desc: string;
    className: string;
}

const WhyUsCard: React.FC<Props> = ({ title, desc, className }) => {
  // declare classes common to all card
  const commonStyles =
    'bg-brandWhite pt-3 pb-4 pl-[30px] border-l-[10px] grid grid-rows-[min-content,_1fr] gap-8';

  // let common styles be merged with classname styles
    const styles = `${commonStyles} ${className}`;
    
  return (
    <div className={styles}>
      <p className='text-[30px] leading-[38px] font-inter font-semibold text-brandBlack'>
        {title}
      </p>
      <p className='text-[24px] leading-[32px] pb-4 text-brandBlack'>
        {desc}
      </p>
    </div>
  );
}

export default WhyUsCard