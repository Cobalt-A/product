import React, {FC} from "react";
import styles from "./Title.module.sass";
import {Link as RouterLink} from "react-router-dom";

interface LinkProps {
  children: React.ReactNode;
  to: string;
  className?: string;
  variant?: "black" | "accent-100";
}

export const Link: FC<LinkProps> = ({children, className, to, variant = "black"}) => {
  let classNames = `${styles["link"]} ${styles[`link_${variant}`]}`;
  if (className) classNames += ` ${className}`;

  return (
    <RouterLink to={to} className={classNames}>
      {children}
    </RouterLink>
  );
};
