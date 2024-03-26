import React, { FC, MouseEventHandler } from "react";
import "./Toggle.sass";

interface ToggleProps {
  isActive: boolean;
  onClick?: MouseEventHandler<HTMLLabelElement>;
}

export const Toggle: FC<ToggleProps> = ({ isActive, onClick }) => {
  return (
    <label onClick={onClick} className="checkbox-ios">
      <input type="checkbox" checked disabled />
      <span className="checkbox-ios-switch"></span>
    </label>
  );
};
