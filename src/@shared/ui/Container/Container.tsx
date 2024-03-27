import React, { FC, ReactNode } from "react";
import styles from "./Container.module.sass";

interface ContainerProps {
  children: ReactNode;
  fluid?: boolean;
}

export const Container: FC<ContainerProps> = ({ children, fluid }) => {
  let classNames = styles["container"];
  if (fluid) classNames += ` ${styles["container_fluid"]}`;
  return <div className={classNames}>{children}</div>;
};
