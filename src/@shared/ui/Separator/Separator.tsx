import React, { FC } from "react";
import styles from "./Separator.module.sass";

interface SeparatorProps {
  className?: string;
  variant?: string;
  height?: "100";
  as?: React.ElementType<any> & keyof JSX.IntrinsicElements;
}

export const Separator: FC<SeparatorProps> = ({ className, as = "div", variant = "horizontal", height }) => {
  let classNames = `${styles["separator"]} ${styles[`separator_${variant}`]}`;
  if (className) classNames += ` ${className}`;
  if (height) classNames += ` ${styles[`separator_height-${height}`]}`;
  const Tag = as;
  return <Tag className={classNames}></Tag>;
};
