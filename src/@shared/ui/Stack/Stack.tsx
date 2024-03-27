import React, { FC } from "react";
import styles from "./Stack.module.sass";

interface StackProps {
  children: React.ReactNode;
  tag?: React.ElementType<any> & keyof JSX.IntrinsicElements;
  gap?: number;
  direction?: "column" | "row";
  align?: "center" | "end" | "start";
  justify?: "center" | "end" | "start" | "space-between";
  wrap?: "wrap" | "no-wrap";
  className?: string;
  width?: "auto";
  height?: "100" | "auto";
}

export const Stack: FC<StackProps> = ({
  children,
  className,
  gap = 20,
  direction = "column",
  justify,
  align,
  tag = "div",
  wrap,
  width,
  height,
}) => {
  let classNames = `${styles["stack"]} ${styles[`stack_gap-${gap}`]} ${styles[`stack_direction-${direction}`]}`;
  if (justify) classNames += ` ${styles[`stack_justify-${justify}`]}`;
  if (align) classNames += ` ${styles[`stack_align-${align}`]}`;
  if (className) classNames += ` ${className}`;
  if (width) classNames += ` ${styles["stack_width-auto"]}`;
  if (height) classNames += ` ${styles[`stack_height-${height}`]}`;
  if (wrap) classNames += ` ${styles[`stack_${wrap}`]}`;
  const Tag = tag;

  return <Tag className={classNames}>{children}</Tag>;
};
