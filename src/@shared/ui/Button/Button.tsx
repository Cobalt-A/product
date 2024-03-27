import React, { FC, MouseEventHandler } from "react";
import styles from "./Button.module.sass";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType<any> & keyof JSX.IntrinsicElements;
  variant?: string;
  height?: number;
  padding?: number;
  onClick?: MouseEventHandler<HTMLElement>;
  width?: "100";
  align?: "center";
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  as = "button",
  variant,
  height = 48,
  padding = 24,
  onClick,
  width,
  align,
}) => {
  let classNames = `${styles["button"]} ${styles[`button_variant-${variant}`]} ${styles[`button_height-${height}`]} ${
    styles[`button_padding-${padding}`]
  }`;
  if (className) classNames += ` ${className}`;
  if (width) classNames += ` ${styles[`button_width-${width}`]}`;
  if (align) classNames += ` ${styles[`button_align-${align}`]}`;

  const Tag = as;
  return (
    <Tag onClick={onClick} className={classNames}>
      {children}
    </Tag>
  );
};
