import React, { FC } from "react";
import styles from "./Button.module.sass";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType<any> & keyof JSX.IntrinsicElements;
  variant?: "accent-400" | "accent-100" | "transparent";
  height?: number;
  padding?: number;
}

export const Button: FC<ButtonProps> = ({ children, className, as = "button", variant, height = 48, padding = 24 }) => {
  let classNames = `${styles["button"]} ${styles[`button_variant-${variant}`]} ${styles[`button_height-${height}`]} ${
    styles[`button_padding-${padding}`]
  }`;
  if (className) classNames += ` ${className}`;

  const Tag = as;
  return <Tag className={classNames}>{children}</Tag>;
};
