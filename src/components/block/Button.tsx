import React from "react";
import { NavLink } from "react-router-dom";

type Variant =
  | "primary"
  | "secondary"
  | "danger"
  | "whiteBtn"
  | "greyBtn"
  | "courseBtn";
type Size = "small" | "medium" | "large";

type ButtonProps = {
  text?: string;
  url?: string;
  variant?:
    | "primary"
    | "secondary"
    | "danger"
    | "whiteBtn"
    | "greyBtn"
    | "courseBtn";
  size?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
  className?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  text,
  url = "",
  variant = "primary",
  size = "medium",
  type = "button",
  isLoading = false,
  onClick,
  className = "",
  children,
  ...rest
}) => {
  // Define base styles
  const baseStyles = "rounded-[6px] transition-all ease-in-out duration-500";

  // Define variant styles
  const variantStyles: Record<Variant, string> = {
    primary: "bg-orange50 text-absoluteWhite hover:bg-orange70",
    secondary:
      "bg-absoluteWhite border-[1px] border-absoluteWhite hover:text-orange50 hover:border-orange50",
    danger: "bg-red-500 text-absoluteWhite hover:bg-red-600 focus:ring-red-300",
    whiteBtn:
      "bg-absoluteWhite hover:bg-white95 ease-in-out duration-500 text-absoluteBlack text-[15px] text-grey15 font-medium inline-block",
    greyBtn:
      "bg-white97 border-[1px] border-white95 rounded-[6px] w-[100%] text-center hover:bg-white95 hover:border-white90",
    courseBtn:
      "bg-absoluteWhite border-white95 hover:bg-white97 hover:border-white90 ease-in-out  border-[1px] text-grey30 text-[12px] xltablet:text-[14px] desktop:text-[16px]",
  };

  // Define size styles
  const sizeStyles: Record<Size, string> = {
    small: "py-[6px] px-[14px] laptop:px-[16px] font-medium",
    medium:
      "py-[10px] laptop:py-[12px] px-[20px] laptop:px-[24px] font-semibold",
    large:
      "py-[14px] laptop:py-[16px] px-[24px] laptop:px-[34px] font-semibold",
  };

  // combine styles
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <>
      <NavLink to={url}>
        <button
          type={type}
          onClick={onClick}
          className={styles}
          disabled={isLoading}
          {...rest}
        >
          {isLoading ? "Loading..." : children || text}
        </button>
      </NavLink>
    </>
  );
};

export default Button;
