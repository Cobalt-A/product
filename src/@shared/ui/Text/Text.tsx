import React, {FC} from "react";
import styles from "./Title.module.sass";

interface TextProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType<any> & keyof JSX.IntrinsicElements;
  size?: number;
  weight?: number;
}

export const Text: FC<TextProps> = ({children, className, as = "h2", size = 32, weight = 400}) => {
  let classNames = `${styles["title"]} ${styles[`title_size-${size}`]} ${styles[`title_weight-${weight}`]}`;
  if (className) classNames += ` ${className}`;

  const Tag = as;
  return <Tag className={classNames}>{children}</Tag>;
};
