import React, { FC, MouseEventHandler } from "react";
import styles from "./Toggle.module.sass";

interface ToggleProps {
  isActive: boolean;
  onClick?: MouseEventHandler<HTMLLabelElement>;
}

export const Toggle: FC<ToggleProps> = ({ isActive, onClick }) => {
  return (
    <label onClick={onClick} className={styles["toggle"]}>
      <input type="checkbox" checked disabled />
      <span className={styles["toggle-switch"]}></span>
    </label>
  );
};
