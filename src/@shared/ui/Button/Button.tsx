import React, {FC} from "react";
import styles from "./Title.module.sass";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType<any> & keyof JSX.IntrinsicElements;
  variant?: "accent-400" | "accent-100";
}

export const Button: FC<ButtonProps> = ({children, className, as = "button", variant}) => {
  let classNames = `${styles["button"]} ${styles[`button_variant-${variant}`]}`;
  if (className) classNames += ` ${className}`;

  const Tag = as;
  return <Tag className={classNames}>{children}</Tag>;
};
