import React, { FC } from "react";
import styles from "./Separator.module.sass";

interface SeparatorProps {
  className?: string;
  variant?: string;
  as?: React.ElementType<any> & keyof JSX.IntrinsicElements;
}

export const Separator: FC<SeparatorProps> = ({ className, as = "div", variant = "horizontal" }) => {
  let classNames = `${styles["separator"]} ${styles[`separator_${variant}`]}`;
  if (className) classNames += className;
  const Tag = as;
  return <Tag className={classNames}></Tag>;
};
