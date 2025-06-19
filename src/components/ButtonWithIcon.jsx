import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import clsx from 'clsx'; // Optional: For clean conditional classnames

const ButtonWithIcon = ({
  text = 'Know More',
  href,
  onClick,
  width = 'w-[222px]',
  height = 'h-[50px]',
}) => {
  const baseClasses = clsx( 
    'relative',
    'flex',
    'pl-2 pr-0 pt-1 pb-1',
    'rounded-[10px]',
    'border border-[#796F51]',
    'bg-[#796F51]',
    'group',
    'overflow-hidden',
    width,
    height
  );

  const textClasses = clsx(
    'font-poppins',
    'font-semibold',
    'text-[18px]',
    'leading-[27px]',
    'text-white',
    'capitalize',
    'z-10',
    'w-[150px]',
    'h-[27px]',
    'flex',
    'truncate',
    'left-0'
  );

  const iconWrapperClasses = clsx(
    'absolute right-[-1px] top-[-6px]',
    'flex items-center justify-center',
    'bg-white',
    'rounded-r-[10px]',
    'w-[51px]',
    'h-[50px]',
    'z-20',
    'group-hover:bg-[#015829]'
  );

  const iconClasses = clsx(
    'w-[16px] h-[16px]',
    'transition-colors duration-300 ease-in-out',
    'text-black',
    'group-hover:text-white'
  );

  const content = (
    <>
      <span className={textClasses}>{text}</span>
      <span className={iconWrapperClasses}>
        <FaArrowRight className={iconClasses} />
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseClasses} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
};

export default ButtonWithIcon;
