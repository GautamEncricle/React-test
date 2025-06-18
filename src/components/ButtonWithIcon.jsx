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
    'flex items-center justify-start',
    'pl-9 pr-0',
    'rounded-[5px]',
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
    'z-10'
  );

  const iconWrapperClasses = clsx(
    'absolute right-0 top-0',
    'flex items-center justify-center',
    'bg-white',
    'rounded-r-[5px]',
    'w-[51px]',
    'h-full',
    'z-20'
  );

  const iconClasses = clsx(
    'w-4 h-4',
    'transition-colors duration-300 ease-in-out',
    'group-hover:text-[#3BB54A]',
    'text-white'
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
