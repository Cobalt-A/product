import React, {FC} from "react";
import styles from "./Stack.module.sass";

interface StackProps {
  children: React.ReactNode;
  tag?: React.ElementType<any> & keyof JSX.IntrinsicElements;
  gap?: number;
  direction?: "column" | "row";
  align?: "center" | "end" | "start";
  justify?: "center" | "end" | "start";
  wrap?: "wrap" | "no-wrap";
  className?: string;
}

export const Stack: FC<StackProps> = ({
  children,
  className,
  gap = 20,
  direction = "column",
  justify = "start",
  align = "start",
  tag = "div",
  wrap,
}) => {
  let classNames = `${styles["stack"]} ${styles[`stack_gap-${gap}`]} ${styles[`stack_direction-${direction}`]} ${
    styles[`stack_justify-${justify}`]
  } ${styles[`stack_align-${align}`]} ${styles[`stack_${wrap}`]}`;
  if (className) classNames += ` ${className}`;
  const Tag = tag;

  return <Tag className={classNames}>{children}</Tag>;
};
