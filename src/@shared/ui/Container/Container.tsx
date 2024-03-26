import React, { FC, ReactNode } from "react";
import styles from "./Container.module.sass";

interface ContainerProps {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className={styles["container"]}>{children}</div>;
};
