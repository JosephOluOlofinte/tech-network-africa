import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import PlusIcon from '../../assets/svg_icons/PlusIcon';

type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'textBtn'
  | 'danger'
  | 'greyBtn';
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
    'w-fit flex items-center justify-center rounded-[100px] font-inter font-medium border transition-all ease-in-out duration-300';

  // declare variantStyles i.e, style unique to each variant
  const variantStyles: Record<ButtonVariants, string> = {
    primary:
      'bg-brandBlue2 border-brandBlue2 text-brandWhite hover:bg-[#1642CE] hover:border-[#1642CE]',
    secondary:
      'bg-brandBlue5 border-brandBlue5 text-brandBlue2 hover:bg-[#E3EAFF] hover:border-[#E3EAFF]',
    tertiary:
      'bg-brandWhite text-brandBlue2 border border-brandBlue2 hover:border-brandBlue3 hover:text-brandBlue3',
    textBtn: 'bg-none text-brandBlue2 border-transparent hover:text-underline',
    greyBtn:
      'bg-[#F7F7F8] border-[1px] border-[#F1F1F3] rounded-[6px] w-[100%] text-center hover:bg-[#F1F1F3] hover:border-[#E4E4E7]',
    danger:
      'bg-red-500 text-brandWhite border-red-500 hover:border-red-500 hover:bg-red-600 focus:ring-red-300',
  };

  // declare styles for button sizes
  const sizeStyles: Record<ButtonSize, string> = {
    small: 'py-[6px] px-[14px] text-xs laptop:text-sm',
    regular:
      'py-[6px] px-[14px] tablet:py-[10px] tablet:px-[18px] text-sm laptop:text-base',
    large:
      'py-[10px] px-[18px] tablet:py-[14px] tablet:px-[22px] text-base laptop:text-lg',
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
          {...rest}>
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
