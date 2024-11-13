import React, { useMemo } from "react";
import { ButtonRounded, ButtonSize } from "./interface";
import classNames from "../../../../utils/classNames";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string | React.ReactNode | React.ReactElement;
  size?: ButtonSize;
  rounded?: ButtonRounded;
}

const BUTTON_SIZE: { [key in ButtonSize]: string } = {
  fit: "",
  xs: "py-1 px-2",
  sm: "py-2 px-4",
  md: "py-3 px-6",
  lg: "py-4 px-8",
};

const BUTTON_ROUNDED: { [key in ButtonRounded]: string } = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
};

const Button = (props: ButtonProps) => {
  const {
    children,
    className = "",
    size = "md",
    rounded = "md",
    ...rest
  } = props;

  const buttonStyles = useMemo(() => {
    return classNames(
      "",
      BUTTON_SIZE[size],
      BUTTON_ROUNDED[rounded],
      className
    );
  }, [className, size, rounded]);

  return (
    <button {...rest} className={buttonStyles}>
      {children}
    </button>
  );
};

export default Button;
