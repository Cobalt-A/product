import React, { FC } from "react";
import styles from "./Link.module.sass";
import { Link as RouterLink } from "react-router-dom";

interface LinkProps {
  children: React.ReactNode;
  to: string;
  className?: string;
  variant?: string;
  weight?: number;
  size?: number;
}

export const Link: FC<LinkProps> = ({ children, className, to, variant = "black", weight = 400, size = 14 }) => {
  let classNames = `${styles["link"]} ${styles[`link_${variant}`]} ${styles[`link_weight-${weight}`]} ${
    styles[`link_size-${size}`]
  }`;
  if (className) classNames += ` ${className}`;

  return (
    <RouterLink to={to} className={classNames}>
      {children}
    </RouterLink>
  );
};
