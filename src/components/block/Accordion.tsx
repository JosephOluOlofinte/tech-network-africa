import React, { useEffect, useRef, useState } from 'react';

// DOCUMENTATION
// This is the accordion component
// The content is set to ReactNode so html
// and/or JSX can be used within the accordion
// So answers to FAQs can have links, buttons, images, etc


type AccordionChildProps = {
  title: string;
  children?: React.ReactNode;
  isOpen?: boolean; // coming from parent
  onToggle?: () => void; // coming from parent
};


type AccordionProps = {
  children: React.ReactElement<AccordionChildProps>[];
  className?: string;
};

export const Accordion: React.FC<AccordionProps> = ({
  children,
  className = '',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isOpen: openIndex === index,
            onToggle: () => toggleIndex(index),
          });
        }
        return child;
      })}
    </div>
  );
};



export const AccordionChild: React.FC<AccordionChildProps> = ({
  title,
  children,
  isOpen = false,
  onToggle,
}) => {

   const contentRef = useRef<HTMLDivElement>(null);
   const [height, setHeight] = useState(0);

   // Whenever open state changes, measure the scrollHeight
   useEffect(() => {
     if (contentRef.current) {
       setHeight(isOpen ? contentRef.current.scrollHeight : 0);
     }
   }, [isOpen, children]);
  
  return (
    <div
      className={`h-max border-b rounded-[10px] xltablet:px-[40px] lglaptop:px-[50px] w-full transition-all duration-1000 ${
        isOpen ? 'py-[40px]' : 'py-[24px]'
      }`}
    >
      <button
        onClick={onToggle}
        className='w-[100%] text-left cursor-pointer outline-0 flex justify-between items-center'
      >
        <h3 className='text-[18px] font-inter font-medium max-w-[80%] leading-[1.4]'>
          {title}
        </h3>
        {isOpen ? (
          <div className='border-2 border-brandBlue2 rounded-full'>
            {/* Close Icon */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2.5'
              stroke='currentColor'
              className='size-5 p-[2px] text-brandBlue2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18 18 6M6 6l12 12'
              />
            </svg>
          </div>
        ) : (
          <div className='border-2 border-brandBlue2 rounded-full'>
            {/* Open Icon */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2.5'
              stroke='currentColor'
              className='size-5 p-[2px] text-brandBlue2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 4.5v15m7.5-7.5h-15'
              />
            </svg>
          </div>
        )}
      </button>

      <div
        className='overflow-hidden transition-all duration-700'
        style={{ maxHeight: `${height}px` }}
      >
        <div
          ref={contentRef}
          className='border-t border-white90 pt-[20px] laptop:pt-[40px] desktop:pt-[50px] mt-[24px] h-fit text-brandDeepGray500 font-inter font-normal text-[16px]'
        >
          {children}
        </div>

      </div>
    </div>
  );
};