import React from 'react'


type Props = {
    title: string;
    desc: string;
    className: string;
}

const WhyUsCard: React.FC<Props> = ({ title, desc, className }) => {
  // declare classes common to all card
  const commonStyles =
    'bg-brandWhite pt-3 pb-4 pl-[30px] pr-[10px] border-l-[10px] grid grid-rows-[min-content,_1fr] gap-8';

  // let common styles be merged with classname styles
    const styles = `${commonStyles} ${className}`;
    
  return (
    <div className={styles}>
      <h3 className='font-inter font-bold text-brandBlack'>
        {title}
      </h3>
      <p className='pb-4 text-brandBlack'>
        {desc}
      </p>
    </div>
  );
}

export default WhyUsCard