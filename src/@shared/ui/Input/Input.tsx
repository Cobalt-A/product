import React, { FC } from "react";
import styles from "./Input.module.sass";

interface InputProps {
  className?: string;
  isInvalid?: boolean;
  placeholder?: string;
}

export const Input: FC<InputProps> = ({ className, isInvalid, placeholder }) => {
  let classNames = `${styles["input"]}`;
  if (isInvalid) classNames += ` ${styles["input_invalid"]}`;
  if (className) classNames += ` ${className}`;

  return <input className={classNames} placeholder={placeholder} />;
};
