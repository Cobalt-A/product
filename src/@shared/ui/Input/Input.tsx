import React, {FC} from "react";
import styles from "./Title.module.sass";

interface LinkProps {
  className?: string;
  isInvalid?: boolean;
}

export const Link: FC<LinkProps> = ({className, isInvalid}) => {
  let classNames = `${styles["input"]}`;
  if (isInvalid) classNames += ` ${styles["input_invalid"]}`;
  if (className) classNames += ` ${className}`;

  return <input className={classNames} />;
};
