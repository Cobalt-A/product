import React, { FC } from "react";
import styles from "./Title.module.sass";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType<any> & keyof JSX.IntrinsicElements;
  size?: number;
  weight?: number;
  font?: "gotham-pro" | "gotham" | "sans-serif";
}

export const Title: FC<TitleProps> = ({ children, className, as = "h2", size = 32, weight = 400, font }) => {
  let classNames = `${styles["title"]} ${styles[`title_size-${size}`]} ${styles[`title_weight-${weight}`]}`;
  if (className) classNames += ` ${className}`;
  if (font) classNames += ` ${styles[`title_font-${font}`]}`;

  const Tag = as;
  return <Tag className={classNames}>{children}</Tag>;
};
