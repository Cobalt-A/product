import React, { FC } from "react";
import styles from "./Badge.module.sass";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType<any> & keyof JSX.IntrinsicElements;
  variant?: string;
  height?: number;
  padding?: number;
}

export const Badge: FC<ButtonProps> = ({
  children,
  className,
  as = "button",
  variant = "gray-100",
  height = 26,
  padding = 8,
}) => {
  let classNames = `${styles["button"]} ${styles[`button_variant-${variant}`]} ${styles[`button_height-${height}`]} ${
    styles[`button_padding-${padding}`]
  }`;
  if (className) classNames += ` ${className}`;

  const Tag = as;
  return <Tag className={classNames}>{children}</Tag>;
};
