import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import PlusIcon from '../icons/PlusIcon';

type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'textBtn'
  | 'danger';
type ButtonSize = 'small' | 'regular' | 'large';
type ButtonType = 'button' | 'submit' | 'reset';
type ButtonProps = {
  text?: string;
  url?: string;
  icon?: boolean;
  variant?: ButtonVariants;
  size?: ButtonSize;
  type?: ButtonType;
  classname?: string;
  children?: React.ReactNode;
  onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  text,
  url = '',
  icon = false,
  variant = 'primary',
  size = 'regular',
  type = 'button',
  isLoading = false,
  onClick,
  className = '',
  children,
  ...rest
}) => {
  // decalre baseStyles i.e., styles common to all buttons
  const baseStyles =
    'rounded-[100px] text-base font-inter font-medium border transition-all ease-in-out duration-300';

  // declare variantStyles i.e, style unique to each variant
  const variantStyles: Record<ButtonVariants, string> = {
    primary:
      'bg-deepBlue2 border-deepBlue2 text-absoluteWhite hover:bg-[#1642CE] hover:border-[#1642CE]',
    secondary:
      'bg-deepBlue5 border-deepBlue5 text-deepBlue2 hover:bg-[#E3EAFF] hover:border-[#E3EAFF]',
    tertiary:
      'bg-absolutewhite text-deepBlue2 border border-deepBlue2 hover:border-deepBlue3 hover:text-deepBlue3',
    textBtn: 'bg-none text-deepBlue2 border-transparent hover:text-underline',
    danger:
      'bg-red-500 text-absoluteWhite border-red-500 hover:border-red-500 hover:bg-red-600 focus:ring-red-300',
  };

  // declare styles for button sizes
  const sizeStyles: Record<ButtonSize, string> = {
    small: 'py-[6px] px-[14px]',
    regular: 'py-[10px] px-[18px] ',
    large: 'py-[14px] px-[22px]',
  };

  // combine all button styles into a single string
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;


  return (
    <Fragment>
      <NavLink to={url}>
        <button
          type={type}
          onClick={onClick}
          className={styles}
          disabled={isLoading}
          {...rest}
        >
          <span className='h-full flex items-center gap-2'>
            {icon ? <PlusIcon /> : null}{' '}
            {isLoading ? 'Loading...' : children || text}
          </span>
        </button>
      </NavLink>
    </Fragment>
  );
};

export default Button;
