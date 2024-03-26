import React, { FC } from "react";
import styles from "./Text.module.sass";

interface TextProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType<any> & keyof JSX.IntrinsicElements;
  size?: number;
  weight?: number;
  wrap?: "no-wrap";
  color?: string;
}

export const Text: FC<TextProps> = ({ children, className, as = "p", size = 14, weight = 400, wrap, color }) => {
  let classNames = `${styles["text"]} ${styles[`text_size-${size}`]} ${styles[`text_weight-${weight}`]} `;
  if (wrap) classNames += ` ${styles[`text_${wrap}`]}`;
  if (color) classNames += ` ${styles[`text_${color}`]}`;
  if (className) classNames += ` ${className}`;

  const Tag = as;
  return <Tag className={classNames}>{children}</Tag>;
};
