import React, { FC } from "react";

interface LogoProps {
  variant?: "gray";
}

export const Logo: FC<LogoProps> = ({ variant }) => {
  if (variant === "gray") return <img src="./images/Brand1.svg" alt="logo" />;

  return <img src="./images/Brand.svg" alt="logo" />;
};
